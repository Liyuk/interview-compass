import { createDiscovery, type DiscoveryItem, type ResultGroup } from './search';
import { createCatalogAdapter } from './catalog-adapter';
import { createPagefindAdapter, type PagefindIndex } from './pagefind-adapter';
import { facetKeys, type BrowseQuery, type FacetKey } from './types';
import { parseBrowseQuery, serializeBrowseQuery } from './query';
import { getTargetContext, subscribeTarget } from '../target-state';
import { updateTargetDom } from '../target-dom';
import { safeSearchResultHref } from '../search-records';

const form = document.querySelector<HTMLFormElement>('#filters')!;
const list = document.querySelector<HTMLElement>('[data-discovery-results]')!;
const status = document.querySelector<HTMLElement>('#result-count, #search-page-status')!;
const staticFallback = [...list.children].map(node => node.cloneNode(true));
const docs = document.querySelector<HTMLElement>('#discovery-docs')!;
const docsList = document.querySelector<HTMLElement>('#document-results')!;
const empty = document.querySelector<HTMLElement>('#no-results')!;
const error = document.querySelector<HTMLElement>('#discovery-error')!;
const pagination = document.querySelector<HTMLElement>('#library-pagination')!;
const previous = document.querySelector<HTMLButtonElement>('#previous-page')!;
const next = document.querySelector<HTMLButtonElement>('#next-page')!;
const en = document.documentElement.lang === 'en';
const locale = en ? 'en' : 'zh-CN';
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const facetSelects = [...form.querySelectorAll<HTMLSelectElement>('select')].filter(select => facetKeys.includes(select.name as FacetKey));
const allowed = Object.fromEntries(facetSelects.map(select => [select.name, [...select.options].map(option => option.value).filter(Boolean)]));
const keyword = form.querySelector<HTMLInputElement>('[name=q]')!;
const scope = form.querySelector<HTMLSelectElement>('[name=searchScope]')!;
const sort = form.querySelector<HTMLSelectElement>('[name=sort]')!;
let version = 0;
let catalog: DiscoveryItem[] | undefined;
let catalogPending: Promise<DiscoveryItem[]> | undefined;
let index: PagefindIndex | undefined;
let readingMap: Promise<Record<string, string>> | undefined;
async function loadReadingMap() {
  readingMap ??= fetch(`${base}/data/discovery/reading-map.v1.json`).then(async response => {
    if (!response.ok) throw Error('reading-map');
    const payload = await response.json(); if (payload.version !== 1 || !payload.ids || typeof payload.ids !== 'object') throw Error('reading-map-version'); return payload.ids as Record<string, string>;
  }).catch(error => { readingMap = undefined; throw error; });
  return readingMap;
}
let pageCount = 1;
let lastQuery: BrowseQuery;
const labels = JSON.parse(document.querySelector('#library-capability-labels')?.textContent ?? '{}') as Record<string, string>;

type CatalogRecord = { questionId: string; question: string; primaryCapability: string; topics: string[]; roles: string[]; responsibilityScopes: string[]; careerTracks: string[]; scenarios: string[]; formats: string[]; profiles: string[] };
async function loadCatalog() {
  catalogPending ??= fetch(`${base}/data/questions/${locale}.json`).then(async response => {
    if (!response.ok) throw new Error('catalog');
    const payload = await response.json();
    if (!Array.isArray(payload.questions) || !payload.questions.every((item: CatalogRecord) => typeof item.questionId === 'string' && typeof item.question === 'string' && Array.isArray(item.profiles))) throw new Error('catalog-version');
    return payload.questions.map((item: CatalogRecord) => ({ id: item.questionId, title: item.question, url: `${base}/${en ? 'en/' : ''}questions/${item.questionId}/`, profiles: item.profiles, facets: { capability: [item.primaryCapability], domain: [item.primaryCapability.split('.')[0]], topic: item.topics, role: item.roles, scope: item.responsibilityScopes, track: item.careerTracks, scenario: item.scenarios, format: item.formats } }));
  }).catch(reason => { catalogPending = undefined; throw reason; });
  catalog = await catalogPending;
  return catalog!;
}
async function loadIndex() {
  index ??= await import(/* @vite-ignore */ `${base}/pagefind/pagefind.js`) as PagefindIndex;
  return index;
}
function read(): BrowseQuery {
  const parsed = parseBrowseQuery(new URL(location.href), { base, locale, facets: allowed });
  const query = parsed.query;
  if (parsed.diagnostics.some(code => code !== 'invalid-target')) {
    const corrected = new URL(location.href);
    for (const key of facetKeys) { if (query.facets[key]) corrected.searchParams.set(key, query.facets[key]!); else corrected.searchParams.delete(key); }
    if (query.page === 1) corrected.searchParams.delete('page'); else corrected.searchParams.set('page', String(query.page));
    history.replaceState(null, '', corrected);
  }
  query.target = getTargetContext();
  keyword.value = query.q; scope.value = query.searchScope; sort.value = query.sort;
  for (const select of facetSelects) select.value = query.facets[select.name as FacetKey] ?? '';
  if (Object.keys(query.facets).length) document.querySelector<HTMLDetailsElement>('[data-discovery-facets]')!.open = true;
  const header = document.querySelector<HTMLInputElement>('#site-search'); if (header) header.value = query.q;
  return query;
}
function write(query: BrowseQuery, push = true) {
  const url = serializeBrowseQuery(query, new URL(location.href));
  if (`${location.pathname}${location.search}${location.hash}` !== url) history[push ? 'pushState' : 'replaceState'](null, '', url);
}
function text(value: string) { return new DOMParser().parseFromString(value, 'text/html').body.textContent ?? ''; }
function row(item: DiscoveryItem, query: BrowseQuery, question: boolean): HTMLLIElement | undefined {
  const href = safeSearchResultHref(item.url, { origin: location.origin, basePath: base });
  if (!href) return;
  const li = document.createElement('li');
  li.className = 'search-page-result';
  const match = new URL(href, location.origin).pathname.match(/\/questions\/([^/]+)\/$/);
  if (question && match) li.dataset.questionId = match[1];
  if (item.profiles) li.dataset.questionProfiles = item.profiles.join(' ');
  const link = document.createElement('a');
  const url = new URL(href, location.origin);
  // A linked preparation target follows explicit question links, never local defaults.
  if (query.target.hasLink && question) {
    const linked = { ...query, q: '', facets: {}, page: 1, searchScope: 'all' as const, sort: 'relevance' as const };
    url.search = new URL(serializeBrowseQuery(linked, url), location.origin).search;
  }
  link.href = `${url.pathname}${url.search}${url.hash}`;
  link.className = 'search-page-result-title';
  const title = document.createElement('span'); title.className = 'question-text'; title.textContent = item.title;
  link.append(title);
  const capability = item.facets?.capability?.[0];
  if (capability) { const meta = document.createElement('span'); meta.className = 'question-meta'; meta.textContent = labels[capability] ?? capability; link.append(meta); }
  li.append(link);
  if (item.excerpt) { const p = document.createElement('p'); p.textContent = text(item.excerpt); li.append(p); }
  for (const section of item.sections?.slice(0, 3) ?? []) {
    const sectionHref = safeSearchResultHref(section.url, { origin: location.origin, basePath: base });
    if (!sectionHref) continue;
    const a = document.createElement('a'); a.href = sectionHref; a.textContent = section.title; a.className = 'search-section-link'; li.append(a);
  }
  return li;
}
function renderGroup(target: HTMLElement, group: ResultGroup, query: BrowseQuery, question: boolean) {
  target.replaceChildren(...group.items.flatMap(item => { const li = row(item, query, question); return li ? [li] : []; }));
}
const discovery = createDiscovery({
  catalog: async (query, kind) => kind === 'docs'
    ? query.searchScope === 'docs' ? createPagefindAdapter(await loadIndex())(query, kind) : { results: [] }
    : createCatalogAdapter(await loadCatalog())(query, kind),
  pagefind: async (query, kind) => createPagefindAdapter(await loadIndex(), await loadReadingMap())(query, kind),
});
async function refreshCounts(query: BrowseQuery) {
  const request = version;
  const advanced = document.querySelector<HTMLDetailsElement>('#advanced-filters')!;
  if (!document.querySelector<HTMLDetailsElement>('[data-discovery-facets]')!.open) return;
  await Promise.all(facetSelects.map(async select => {
    if (select.closest('#advanced-filters') && !advanced.open) return;
    try {
      const counts = await discovery.facetCounts(query, select.name as FacetKey, [...select.options].map(option => option.value).filter(Boolean));
      if (request !== version) return;
      for (const option of select.options) if (option.dataset.countLabel) option.textContent = `${option.dataset.countLabel} (${counts[option.value] ?? 0})`;
    } catch { /* Result browsing remains available if optional counts fail. */ }
  }));
}
function chips(query: BrowseQuery) {
  const target = document.querySelector('#selected-filters')!;
  target.replaceChildren();
  for (const select of facetSelects) {
    if (!select.value) continue;
    const button = document.createElement('button'); button.type = 'button';
    button.textContent = select.selectedOptions[0]?.dataset.countLabel ?? select.value;
    button.setAttribute('aria-label', `${en ? 'Remove filter: ' : '移除筛选：'}${button.textContent}`);
    button.onclick = () => { delete query.facets[select.name as FacetKey]; query.page = 1; write(query); void render(); select.focus(); };
    target.append(button);
  }
  const active = facetSelects.filter(select => select.closest('#advanced-filters') && select.value).length;
  document.querySelector('#advanced-filter-count')!.textContent = active ? `· ${active}` : '';
  if (active) document.querySelector<HTMLDetailsElement>('#advanced-filters')!.open = true;
}
async function render() {
  const request = ++version;
  const query = read(); lastQuery = query;
  error.hidden = true; empty.hidden = true; pagination.hidden = true;
  status.textContent = en ? 'Loading matching content…' : '正在加载匹配内容…';
  list.setAttribute('aria-busy', 'true');
  try {
    const result = await discovery.search(query);
    if (request !== version) return;
    renderGroup(list, result.questions, query, true);
    renderGroup(docsList, result.docs, query, false);
    docs.hidden = result.docs.total === 0;
    docs.querySelector('[data-docs-count]')!.textContent = `(${result.docs.total})`;
    document.querySelector<HTMLElement>('#discovery-questions-heading')!.hidden = query.searchScope === 'docs';
    const group = query.searchScope === 'docs' ? result.docs : result.questions.total ? result.questions : result.docs;
    pageCount = Math.max(1, group.pageCount);
    if (query.page !== group.page) { query.page = group.page; write(query, false); }
    const total = result.docs.total + result.questions.total;
    status.textContent = en ? `${result.questions.total} questions · ${result.docs.total} documents · Page ${group.page} of ${pageCount}` : `${result.questions.total} 道问题 · ${result.docs.total} 篇文档 · 第 ${group.page} / ${pageCount} 页`;
    pagination.hidden = pageCount <= 1;
    previous.disabled = group.page <= 1; next.disabled = group.page >= pageCount;
    document.querySelector('#page-status')!.textContent = en ? `Page ${group.page} of ${pageCount}` : `第 ${group.page} / ${pageCount} 页`;
    empty.hidden = total > 0;
    chips(query); void refreshCounts(query);
    // ReadingNavigation consumes the resolved order without refetching all result bodies.
    list.dataset.readingOrder = JSON.stringify(result.questions.ids);
    updateTargetDom();
  } catch {
    if (request !== version) return;
    error.hidden = false;
    docs.hidden = true;
    list.replaceChildren(...staticFallback.map(node => node.cloneNode(true)));
    delete list.dataset.readingOrder;
    error.querySelector('[data-error-message]')!.textContent = en ? 'Content could not be loaded. Retry, or read the static questions below; filters have not been applied.' : '内容暂时无法载入。可以重试，或阅读下方静态题目；筛选尚未应用。';
    status.textContent = en ? 'Results unavailable' : '结果暂不可用';
    for (const select of facetSelects) select.disabled = true;
  } finally {
    if (request === version) { list.removeAttribute('aria-busy'); list.removeAttribute('data-library-pending'); }
  }
}
// Read controls before render synchronizes them with the address.
function submitControls() {
  const values = new FormData(form);
  const query = parseBrowseQuery(new URL(location.href), { base, locale }).query; query.target = getTargetContext();
  query.q = String(values.get('q') ?? '').trim(); query.searchScope = String(values.get('searchScope')) as BrowseQuery['searchScope']; query.sort = String(values.get('sort')) as BrowseQuery['sort'];
  query.facets = Object.fromEntries(facetSelects.filter(select => select.value).map(select => [select.name, select.value])); query.page = 1;
  write(query); void render();
}
form.addEventListener('submit', event => { event.preventDefault(); submitControls(); });
form.addEventListener('change', submitControls);
document.querySelector('[data-discovery-facets]')?.addEventListener('toggle', () => { if (lastQuery) void refreshCounts(lastQuery); });
document.querySelector('#advanced-filters')?.addEventListener('toggle', () => { if (lastQuery) refreshCounts(lastQuery); });
function clear() { const query = read(); query.facets = {}; query.page = 1; write(query); void render(); }
document.querySelector('#clear-filters')?.addEventListener('click', clear);
document.querySelector('[data-clear-page-filters]')?.addEventListener('click', clear);
function move(direction: number) { const query = read(); query.page = Math.max(1, Math.min(pageCount, query.page + direction)); write(query); void render(); status.scrollIntoView({block:'start'}); }
previous.onclick = () => move(-1); next.onclick = () => move(1);
document.querySelector('[data-discovery-retry]')?.addEventListener('click', () => { index = undefined; for (const select of facetSelects) select.disabled = false; void render(); });
document.querySelector('#share-filter-link')?.addEventListener('click', async () => {
  const query = read(); const href = new URL(serializeBrowseQuery(query, new URL(location.href), { share: true }), location.origin).href;
  const message = document.querySelector<HTMLElement>('#share-filter-status')!;
  try { await navigator.clipboard.writeText(href); message.textContent = en ? 'Link copied.' : '链接已复制。'; }
  catch { const input = document.querySelector<HTMLInputElement>('#share-filter-value')!; input.hidden = false; input.value = href; input.focus(); input.select(); message.textContent = en ? 'Copy the selected link.' : '可手动复制已选中的链接。'; }
});
document.querySelector<HTMLFormElement>('.search-form')?.addEventListener('submit', event => {
  event.preventDefault(); const value = document.querySelector<HTMLInputElement>('#site-search')?.value.trim() ?? ''; const query = read(); query.q = value; query.page = 1; write(query); void render();
});
window.addEventListener('popstate', () => void render());
subscribeTarget((_context, reset) => { if (reset) { const query = read(); query.page = 1; write(query, false); } void render(); });
