import './target-dom';
import { parseBrowseQuery, serializeBrowseQuery } from './discovery/query';
import { translateArticleHash, type SectionTranslation } from './article-sections';
import { initTargetSelector } from './target-selector';
import { createDiscovery } from './discovery/search';
import { createPagefindAdapter } from './discovery/pagefind-adapter';
import { withLinkPreference } from './target-preferences';
import { getTargetContext, subscribeTarget } from './target-state';
import { safeSearchResultHref } from './search-records';

initTargetSelector();
import './site-navigation-dom';

const form = document.querySelector<HTMLFormElement>('.search-form');
const input = form?.querySelector<HTMLInputElement>('input');
const results = document.querySelector<HTMLElement>('.search-results');
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const lang = document.documentElement.lang;
const noResultsText = lang === 'en' ? 'No matching questions.' : '没有找到匹配的问题。';
const errorText = lang === 'en' ? 'Search is unavailable. Try again.' : '搜索暂时不可用，请重试。';
const languageLink = document.querySelector<HTMLAnchorElement>('.language-switch a');
if (languageLink) {
  const syncLanguageLink = () => {
    const current = new URL(window.location.href);
    const target = new URL(languageLink.href, current);
    const parsed = parseBrowseQuery(current, { base, locale: lang === 'en' ? 'zh-CN' : 'en' });
    target.search = new URL(serializeBrowseQuery(parsed.query, target), current).search;
    // Comparison lenses belong to the same question, not the browsing target.
    if (document.body.dataset.routeType === 'question') for (const key of ['targetRole', 'targetStage']) {
      const value = current.searchParams.get(key);
      if (value) target.searchParams.set(key, value);
    }
    const data = document.getElementById('article-section-translations');
    if (data) {
      let sections: SectionTranslation[] = [];
      try { sections = JSON.parse(data.textContent ?? '[]'); } catch { /* Unmapped sections fall back to the translated page. */ }
      const from = lang === 'en' ? 'en' : 'zh-CN';
      target.hash = translateArticleHash(current.hash, from, from === 'en' ? 'zh-CN' : 'en', sections);
    } else target.hash = current.hash;
    languageLink.href = target.href;
  };
  syncLanguageLink();
  languageLink.addEventListener('click', syncLanguageLink);
  window.addEventListener('hashchange', syncLanguageLink);
}
type SearchData = { url: string; meta?: { title?: string }; excerpt?: string };
type SearchResult = { url: string; data: () => Promise<SearchData> };
type PagefindIndex = { search: (query: string, options: { filters: Record<string, string> }) => Promise<{ results: SearchResult[] }> };
let pagefind: PagefindIndex | undefined;
let timer: number | undefined;
let activeSearch = 0;

function showSearchMessage(message: string) {
  if (!results) return;
  const paragraph = document.createElement('p');
  paragraph.className = 'search-empty';
  paragraph.textContent = message;
  results.replaceChildren(paragraph);
  results.hidden = false;
}

async function search(query: string) {
  if (document.body.dataset.routeType === 'search') { if (results) results.hidden = true; return; }
  const request = ++activeSearch;
  const normalizedQuery = query.trim();
  if (!results || !normalizedQuery) {
    results?.replaceChildren();
    if (results) results.hidden = true;
    return;
  }
  try {
    pagefind ??= await import(/* @vite-ignore */ `${base}/pagefind/pagefind.js`) as PagefindIndex;
    const adapter = createPagefindAdapter(pagefind);
    const query = parseBrowseQuery(new URL(location.href), { base, locale: lang === 'en' ? 'en' : 'zh-CN' }).query;
    query.q = normalizedQuery; query.searchScope = 'all'; query.facets = {}; query.target = getTargetContext(); query.page = 1;
    const response = await createDiscovery({ catalog: adapter, pagefind: adapter }).search(query, { pageSize: 8 });
    if (request !== activeSearch) return;
    const items = [...response.docs.items.map(item => ({ ...item, group: lang === 'en' ? 'Document' : '文档' })), ...response.questions.items.map(item => ({ ...item, group: lang === 'en' ? 'Question' : '题目' }))];

    const links = items.flatMap((item) => {
      const href = safeSearchResultHref(item.url, { origin: window.location.origin, basePath: base });
      if (!href) return [];
      const link = document.createElement('a');
      link.className = 'search-result';
      const linkUrl = new URL(href, location.origin);
      if (getTargetContext().hasLink) linkUrl.search = withLinkPreference(linkUrl.searchParams, getTargetContext().preference).toString();
      link.href = `${linkUrl.pathname}${linkUrl.search}${linkUrl.hash}`;
      const title = document.createElement('strong');
      title.textContent = `${item.group} · ${item.title}`;
      const excerpt = document.createElement('span');
      excerpt.textContent = new DOMParser().parseFromString(item.excerpt ?? '', 'text/html').body.textContent ?? '';
      link.append(title, excerpt);
      return [link];
    });
    if (links.length) {
      const allLink = document.createElement('a');
      allLink.className = 'search-all';
      const allUrl = new URL(form?.action ?? `${base}/search/`, location.origin); allUrl.searchParams.set('q', normalizedQuery);
      if (getTargetContext().hasLink) allUrl.search = withLinkPreference(allUrl.searchParams, getTargetContext().preference).toString();
      allLink.href = allUrl.href;
      allLink.textContent = lang === 'en' ? 'View all matches' : '查看全部匹配';
      results.replaceChildren(...links, allLink);
      results.hidden = false;
    } else showSearchMessage(noResultsText);
  } catch {
    if (request === activeSearch) showSearchMessage(errorText);
  }
}

form?.addEventListener('submit', () => {
  form.querySelectorAll('[data-profile-form-value]').forEach(item => item.remove());
  if (!getTargetContext().hasLink) return;
  const params = withLinkPreference(new URLSearchParams(), getTargetContext().preference);
  for (const [name, value] of params) { const hidden = document.createElement('input'); hidden.type = 'hidden'; hidden.name = name; hidden.value = value; hidden.dataset.profileFormValue = ''; form.append(hidden); }
});
const initialQuery = new URLSearchParams(location.search).get('q');
if (input && initialQuery) input.value = initialQuery;
subscribeTarget((_context, reset) => { if (reset) { activeSearch++; if (results) { results.replaceChildren(); results.hidden = true; } if (input?.value.trim()) void search(input.value); } });
input?.addEventListener('input', () => {
  window.clearTimeout(timer);
  if (!input.value.trim()) { void search(''); return; }
  timer = window.setTimeout(() => void search(input.value), 160);
});
document.addEventListener('pointerdown', event => {
  if (event.target instanceof Node && !form?.contains(event.target) && !results?.contains(event.target)) {
    activeSearch++; window.clearTimeout(timer); if (results) results.hidden = true;
  }
});
document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); input?.focus(); }
  if (event.key === 'Escape') {
    activeSearch += 1;
    window.clearTimeout(timer);
    if (results) { results.replaceChildren(); results.hidden = true; }
    input?.blur();
  }
});
