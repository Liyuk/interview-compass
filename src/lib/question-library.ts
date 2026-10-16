import { matchesProfileTokens, withLinkPreference } from './target-preferences';
import { getTargetContext, subscribeTarget } from './target-state';
const en = document.documentElement.lang === 'en';
const form = document.querySelector<HTMLFormElement>('#filters')!;
const items = [...document.querySelectorAll<HTMLElement>('#question-list > li')];
const list = document.querySelector<HTMLElement>('#question-list')!;
const count = document.querySelector<HTMLElement>('#result-count')!;
const empty = document.querySelector<HTMLElement>('#no-results')!;
const selects = [...form.querySelectorAll<HTMLSelectElement>('select')];
const pagination = document.querySelector<HTMLElement>('#library-pagination')!;
const chips = document.querySelector<HTMLElement>('#selected-filters')!;
const advanced = document.querySelector<HTMLDetailsElement>('#advanced-filters')!;
const advancedCount = document.querySelector<HTMLElement>('#advanced-filter-count')!;
const previous = document.querySelector<HTMLButtonElement>('#previous-page')!;
const next = document.querySelector<HTMLButtonElement>('#next-page')!;
const pageSize = 20;
let page = 1;
function readAddress() {
  const params = new URLSearchParams(location.search);
  page = Math.max(1, Number.parseInt(params.get('page') || '1', 10) || 1);
  for (const select of selects) select.value = params.get(select.name) ?? '';
}
function apply(writeUrl: boolean) {
  const context = getTargetContext();
  const target = context.preference.mode === 'target' ? context.preference.target : undefined;
  const params = new URLSearchParams(location.search);
  for (const select of selects) { if (select.value) params.set(select.name, select.value); else params.delete(select.name); }
  const matches = items.filter(item => matchesProfileTokens(item.dataset.questionProfiles ?? '', target) && selects.every(select =>
    !select.value || (item.dataset[select.name] ?? '').split(' ').includes(select.value)));
  const pages = Math.max(1, Math.ceil(matches.length / pageSize));
  const clamped = page > pages;
  page = Math.min(page, pages);
  const visible = new Set(matches.slice((page - 1) * pageSize, page * pageSize));
  for (const item of items) item.hidden = !visible.has(item);
  count.textContent = en ? `${matches.length} questions · Showing ${matches.length ? (page - 1) * pageSize + 1 : 0}–${Math.min(page * pageSize, matches.length)}` : `${matches.length} 道问题 · 当前展示第 ${matches.length ? (page - 1) * pageSize + 1 : 0}–${Math.min(page * pageSize, matches.length)} 题`;
  empty.hidden = matches.length !== 0;
  empty.querySelector('[data-library-empty-message]')!.textContent = target && selects.some(select => select.value)
    ? (en ? 'Your target and page filters have no matching questions. Clear page filters or view all questions.' : '当前目标与页面筛选没有交集。可以清除页面条件，或查看全部题目。')
    : (en ? 'No matching questions. Change your target or page filters.' : '没有匹配题目，可以调整目标或页面条件。');
  pagination.hidden = pages <= 1; previous.disabled = page <= 1; next.disabled = page >= pages;
  document.querySelector('#page-status')!.textContent = en ? `Page ${page} of ${pages}` : `第 ${page} / ${pages} 页`;
  chips.replaceChildren();
  let activeAdvancedCount = 0;
  for (const select of selects) {
    if (!select.value) continue;
    if (['capability', 'topic', 'format'].includes(select.name)) activeAdvancedCount++;
    const button = document.createElement('button'); button.type = 'button';
    button.textContent = `${select.closest('label')?.querySelector('span')?.textContent}：${select.selectedOptions[0].textContent}`;
    button.setAttribute('aria-label', (en ? 'Remove filter: ' : '移除筛选：') + button.textContent);
    button.addEventListener('click', () => { select.value = ''; page = 1; apply(true); select.focus(); }); chips.append(button);
  }
  advancedCount.textContent = activeAdvancedCount ? `· ${activeAdvancedCount}` : '';
  if (activeAdvancedCount) advanced.open = true;
  if (page > 1) params.set('page', String(page)); else params.delete('page');
  if (writeUrl || clamped) { const url = new URL(location.href); url.search = params.toString(); history.replaceState(null, '', url); }
  list.removeAttribute('data-library-pending');
}
function clearFilters() { for (const select of selects) select.value = ''; page = 1; apply(true); }
previous.addEventListener('click', () => { page--; apply(true); count.scrollIntoView({ block: 'start' }); });
next.addEventListener('click', () => { page++; apply(true); count.scrollIntoView({ block: 'start' }); });
form.addEventListener('change', () => { page = 1; apply(true); });
document.querySelector('#clear-filters')?.addEventListener('click', clearFilters);
document.querySelector('[data-clear-page-filters]')?.addEventListener('click', clearFilters);
window.addEventListener('popstate', () => { readAddress(); apply(false); });
readAddress();
subscribeTarget((_context, reset) => { if (reset) page = 1; apply(reset); });
document.querySelector('#share-filter-link')?.addEventListener('click', async () => {
  const url = new URL(location.href); url.search = withLinkPreference(url.searchParams, getTargetContext().preference).toString();
  const status = document.querySelector<HTMLElement>('#share-filter-status')!;
  try { await navigator.clipboard.writeText(url.href); status.textContent = en ? 'Copied with the current target and filters.' : '已复制，链接包含当前目标与筛选条件。'; }
  catch { const input = document.querySelector<HTMLInputElement>('#share-filter-value')!; input.hidden = false; input.value = url.href; input.focus(); input.select(); status.textContent = en ? 'Copy the selected link.' : '可手动复制已选中的链接。'; }
});
