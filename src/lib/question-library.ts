import { matchesProfileTokens, withLinkPreference } from './target-preferences';
import { getTargetContext, subscribeTarget } from './target-state';
import { updateTargetDom } from './target-dom';
import { CATALOG_PAGE_SIZE, getPageWindow } from './search-pagination';

type IndexQuestion = {
  questionId: string;
  question: string;
  primaryCapability: string;
  topics: string[];
  roles: string[];
  responsibilityScopes: string[];
  careerTracks: string[];
  scenarios: string[];
  formats: string[];
  profiles: string[];
};
const fieldBySelect = {
  capability: 'primaryCapability',
  topic: 'topics',
  role: 'roles',
  scope: 'responsibilityScopes',
  track: 'careerTracks',
  scenario: 'scenarios',
  format: 'formats',
} as const;

const en = document.documentElement.lang === 'en';
const form = document.querySelector<HTMLFormElement>('#filters');
const list = document.querySelector<HTMLElement>('#question-list');
const count = document.querySelector<HTMLElement>('#result-count');
const empty = document.querySelector<HTMLElement>('#no-results');
if (!form || !list || !count || !empty) throw new Error('Question library markup is missing');
const selects = [...form.querySelectorAll<HTMLSelectElement>('select')];
const pagination = document.querySelector<HTMLElement>('#library-pagination')!;
const chips = document.querySelector<HTMLElement>('#selected-filters')!;
const advanced = document.querySelector<HTMLDetailsElement>('#advanced-filters')!;
const advancedCount = document.querySelector<HTMLElement>('#advanced-filter-count')!;
const previous = document.querySelector<HTMLButtonElement>('#previous-page')!;
const next = document.querySelector<HTMLButtonElement>('#next-page')!;
const labels = JSON.parse(document.querySelector('#library-capability-labels')?.textContent || '{}') as Record<string, string>;
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const questionRoot = `${base}/${en ? 'en/' : ''}questions/`;
let records: IndexQuestion[] = [];
let page = 1;
let ready = false;
let dirty = false;

function valuesOf(item: IndexQuestion, name: string): string[] {
  const key = fieldBySelect[name as keyof typeof fieldBySelect];
  if (!key) return [];
  const value = item[key];
  return Array.isArray(value) ? value : [value];
}
function readAddress() {
  const params = new URLSearchParams(location.search);
  page = Math.max(1, Number.parseInt(params.get('page') || '1', 10) || 1);
  for (const select of selects) select.value = params.get(select.name) ?? '';
}
function render(items: IndexQuestion[]) {
  list!.replaceChildren(...items.map(item => {
    const row = document.createElement('li');
    row.dataset.questionId = item.questionId;
    row.dataset.questionProfiles = item.profiles.join(' ');
    row.dataset.capability = item.primaryCapability;
    row.dataset.topic = item.topics.join(' ');
    row.dataset.role = item.roles.join(' ');
    row.dataset.scope = item.responsibilityScopes.join(' ');
    row.dataset.track = item.careerTracks.join(' ');
    row.dataset.scenario = item.scenarios.join(' ');
    row.dataset.format = item.formats.join(' ');
    const link = document.createElement('a');
    link.href = `${questionRoot}${item.questionId}/`;
    const text = document.createElement('span');
    text.className = 'question-text';
    text.textContent = item.question;
    const meta = document.createElement('span');
    meta.className = 'question-meta';
    meta.textContent = labels[item.primaryCapability] ?? item.primaryCapability;
    link.append(text, meta);
    row.append(link);
    return row;
  }));
}
function refreshOptionCounts(targetToken?: string) {
  for (const select of selects) {
    const counts = new Map<string, number>();
    for (const item of records) {
      if (targetToken && !item.profiles.includes(targetToken)) continue;
      for (const value of valuesOf(item, select.name)) counts.set(value, (counts.get(value) ?? 0) + 1);
    }
    for (const option of select.options) {
      if (!option.value || !option.dataset.countLabel) continue;
      option.textContent = `${option.dataset.countLabel} (${counts.get(option.value) ?? 0})`;
    }
  }
}
function apply(writeUrl: boolean) {
  if (!ready) return;
  const context = getTargetContext();
  const target = context.preference.mode === 'target' ? context.preference.target : undefined;
  const token = target ? `${target.roleId}:${target.stageId}` : undefined;
  const params = new URLSearchParams(location.search);
  for (const select of selects) { if (select.value) params.set(select.name, select.value); else params.delete(select.name); }
  const matches = records.filter(item => matchesProfileTokens(item.profiles.join(' '), target) && selects.every(select => !select.value || valuesOf(item, select.name).includes(select.value)));
  const requested = page;
  const window = getPageWindow(matches.length, requested, CATALOG_PAGE_SIZE);
  const clamped = window.page !== requested || (matches.length > 0 && requested > window.pageCount);
  page = window.page;
  const pages = Math.max(window.pageCount, 1);
  render(matches.slice(window.start, window.end));
  refreshOptionCounts(token);
  count!.textContent = en ? `${matches.length} questions · Showing ${matches.length ? window.start + 1 : 0}–${window.end}` : `${matches.length} 道问题 · 当前展示第 ${matches.length ? window.start + 1 : 0}–${window.end} 题`;
  empty!.hidden = matches.length !== 0;
  empty!.querySelector('[data-library-empty-message]')!.textContent = target && selects.some(select => select.value)
    ? (en ? 'Your target and page filters have no matching questions. Clear page filters or view all questions.' : '当前目标与页面筛选没有交集。可以清除页面条件，或查看全部题目。')
    : (en ? 'No matching questions. Change your target or page filters.' : '没有匹配题目，可以调整目标或页面条件。');
  pagination.hidden = window.pageCount <= 1;
  previous.disabled = page <= 1;
  next.disabled = page >= pages;
  document.querySelector('#page-status')!.textContent = en ? `Page ${page} of ${pages}` : `第 ${page} / ${pages} 页`;
  chips.replaceChildren();
  let activeAdvancedCount = 0;
  for (const select of selects) {
    if (!select.value) continue;
    if (['capability', 'topic', 'format'].includes(select.name)) activeAdvancedCount++;
    const button = document.createElement('button');
    button.type = 'button';
    const caption = select.selectedOptions[0]?.dataset.countLabel ?? select.selectedOptions[0]?.textContent ?? select.value;
    button.textContent = `${select.closest('label')?.querySelector('span')?.textContent}：${caption}`;
    button.setAttribute('aria-label', (en ? 'Remove filter: ' : '移除筛选：') + button.textContent);
    button.addEventListener('click', () => { select.value = ''; page = 1; apply(true); select.focus(); });
    chips.append(button);
  }
  advancedCount.textContent = activeAdvancedCount ? `· ${activeAdvancedCount}` : '';
  if (activeAdvancedCount) advanced.open = true;
  if (page > 1) params.set('page', String(page)); else params.delete('page');
  if (writeUrl || clamped) { const url = new URL(location.href); url.search = params.toString(); history.replaceState(null, '', url); }
  list!.removeAttribute('data-library-pending');
  updateTargetDom();
}
function clearFilters() { for (const select of selects) select.value = ''; page = 1; apply(true); }
previous.addEventListener('click', () => { page--; apply(true); count!.scrollIntoView({ block: 'start' }); });
next.addEventListener('click', () => { page++; apply(true); count!.scrollIntoView({ block: 'start' }); });
form.addEventListener('change', () => { page = 1; dirty = true; apply(true); });
document.querySelector('#clear-filters')?.addEventListener('click', clearFilters);
document.querySelector('[data-clear-page-filters]')?.addEventListener('click', clearFilters);
window.addEventListener('popstate', () => { readAddress(); apply(false); });
readAddress();
const indexUrl = `${base}/data/questions/${en ? 'en' : 'zh-CN'}.json`;
void fetch(indexUrl).then(async response => {
  if (!response.ok) throw new Error('Question index unavailable');
  const payload = await response.json() as { questions: IndexQuestion[] };
  records = payload.questions;
  ready = true;
  subscribeTarget((_context, reset) => { if (reset) page = 1; apply(reset || dirty); dirty = false; });
}).catch(() => {
  count.textContent = en ? 'The question index could not be loaded.' : '题库索引加载失败。';
  list.removeAttribute('data-library-pending');
});
document.querySelector('#share-filter-link')?.addEventListener('click', async () => {
  const url = new URL(location.href);
  url.search = withLinkPreference(url.searchParams, getTargetContext().preference).toString();
  const status = document.querySelector<HTMLElement>('#share-filter-status')!;
  try {
    await navigator.clipboard.writeText(url.href);
    status.textContent = en ? 'Copied with the current target and filters.' : '已复制，链接包含当前目标与筛选条件。';
  } catch {
    const input = document.querySelector<HTMLInputElement>('#share-filter-value')!;
    input.hidden = false;
    input.value = url.href;
    input.focus();
    input.select();
    status.textContent = en ? 'Copy the selected link.' : '可手动复制已选中的链接。';
  }
});
