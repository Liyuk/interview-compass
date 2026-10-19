import { matchesProfileTokens, withLinkPreference } from './target-preferences';
import { adoptLinkTarget, getTargetContext, isTargetTemporary, openTargetSelector, removeLinkTarget, subscribeTarget, viewAllQuestions } from './target-state';
import { loadTargetRoles } from './target-roles-client';
import type { TargetRoleOption } from './target-roles';

const en = document.documentElement.lang === 'en';
let options: TargetRoleOption[] = [];
void loadTargetRoles().then(roles => { options = roles; updateTargetDom(); }).catch(() => undefined);
const inheritedLinks = new WeakMap<HTMLAnchorElement, string>();
const parsedCounts = new WeakMap<HTMLElement, Record<string, number>>();
export function updateTargetDom() {
  const context = getTargetContext();
  const target = context.preference.mode === 'target' ? context.preference.target : undefined;
  const token = target ? `${target.roleId}:${target.stageId}` : undefined;
  const role = options.find(item => item.id === target?.roleId);
  const stage = role?.stages.find(item => item.id === target?.stageId);
  const summary = document.querySelector<HTMLElement>('[data-target-summary]');
  if (summary) {
    const storageNote = summary.querySelector<HTMLElement>('[data-target-storage-warning]');
    if (storageNote) storageNote.hidden = !isTargetTemporary();
    const description = summary.querySelector('[data-target-description]');
    if (description) description.textContent = context.invalidLink
      ? (en ? 'This link has an invalid target. Showing all questions; your saved choice is unchanged.' : '链接中的目标无效，当前显示全部题目；本地选择未改变。')
      : `${context.hasLink ? (en ? 'Target from link: ' : '来自链接的目标：') : (en ? 'Current target: ' : '当前目标：')}${target ? `${role?.name ?? (en ? 'Loading target' : '正在载入目标')} · ${stage?.name ?? ''}` : (en ? 'All questions' : '全部题目')}`;
    const adopt = summary.querySelector<HTMLButtonElement>('[data-adopt-target]');
    if (adopt) adopt.hidden = !context.hasLink || context.invalidLink;
    const clear = summary.querySelector<HTMLButtonElement>('[data-remove-link-target]');
    if (clear) clear.hidden = !context.hasLink;
    const model = summary.querySelector<HTMLAnchorElement>('[data-target-model]');
    if (model) { model.hidden = !target; if (role && stage) { const modelUrl = new URL(`${role.path}#${stage.id}`, location.origin); if (context.hasLink) modelUrl.search = withLinkPreference(modelUrl.searchParams, context.preference).toString(); model.href = modelUrl.href; } }
  }
  for (const element of document.querySelectorAll<HTMLElement>('[data-profile-counts]')) {
    let counts = parsedCounts.get(element);
    if (!counts) { counts = JSON.parse(element.dataset.profileCounts ?? '{}'); parsedCounts.set(element, counts!); }
    const count = token ? counts?.[token] ?? 0 : Number(element.dataset.totalCount ?? '0');
    element.textContent = element.dataset.countLabel ? `${element.dataset.countLabel} (${count})` : String(count) + (element.dataset.countUnit ? (en ? ' questions' : ' 道问题') : '');
  }
  for (const row of document.querySelectorAll<HTMLElement>('[data-question-profiles]')) {
    if (row.closest('#question-list')) continue; // The library combines target + local filters before pagination.
    row.hidden = !matchesProfileTokens(row.dataset.questionProfiles ?? '', target);
  }
  for (const root of document.querySelectorAll<HTMLElement>('[data-target-list]')) {
    const rows = [...root.querySelectorAll<HTMLElement>('[data-question-profiles]')];
    const matched = rows.filter(row => matchesProfileTokens(row.dataset.questionProfiles ?? '', target));
    const limit = Number(root.dataset.targetLimit || '0');
    if (limit) for (const [index, row] of matched.entries()) row.hidden = index >= limit;
    const empty = root.querySelector<HTMLElement>('[data-target-empty]');
    if (empty) empty.hidden = matched.length > 0;
  }
  for (const group of document.querySelectorAll<HTMLElement>('[data-reading-group]')) {
    let start = 0;
    for (const batch of group.querySelectorAll<HTMLDetailsElement>('.reading-batch')) {
      const count = [...batch.querySelectorAll<HTMLElement>('[data-question-profiles]')].filter(row => !row.hidden).length;
      batch.hidden = count === 0;
      const label = batch.querySelector('[data-batch-label]');
      if (label && count) label.textContent = en ? `Questions ${start + 1}–${start + count}` : `第 ${start + 1}–${start + count} 题`;
      start += count;
    }
    group.hidden = start === 0;
  }
  for (const root of document.querySelectorAll<HTMLElement>('[data-reading-root]')) { const empty = root.querySelector<HTMLElement>('[data-reading-empty]'); if (empty) empty.hidden = !!root.querySelector('[data-reading-group]:not([hidden])'); }
  const firstBatch = document.querySelector<HTMLDetailsElement>('[data-reading-group]:not([hidden]) .reading-batch:not([hidden])');
  if (firstBatch && !document.querySelector('.reading-batch:not([hidden])[open]')) firstBatch.open = true;
  for (const warning of document.querySelectorAll<HTMLElement>('[data-question-detail-profiles]')) warning.hidden = !target || matchesProfileTokens(warning.dataset.questionDetailProfiles ?? '', target);
  for (const link of document.querySelectorAll<HTMLAnchorElement>('.language-switch a')) {
    const url = new URL(link.href);
    for (const key of ['profile', 'profileRole', 'profileStage']) {
      const value = new URLSearchParams(location.search).get(key);
      if (value === null) url.searchParams.delete(key); else url.searchParams.set(key, value);
    }
    link.href = url.href;
  }
  for (const root of document.querySelectorAll<HTMLElement>('[data-target-list]')) {
    const visible = [...root.querySelectorAll<HTMLElement>('[data-question-profiles]')].filter(item => !item.hidden);
    visible.forEach((item, index) => { const number = item.querySelector('[data-curated-number]'); if (number) number.textContent = String(index + 1).padStart(2, '0'); });
  }
  for (const section of document.querySelectorAll<HTMLElement>('[data-related-section]')) section.hidden = !section.querySelector('tr[data-question-profiles]:not([hidden])');
  // Only an explicit link target follows navigation; local preferences stay out of ordinary URLs.
  const base = import.meta.env.BASE_URL.replace(/\/$/, '') + '/';
  for (const link of document.querySelectorAll<HTMLAnchorElement>('a[href]')) {
    if (link.hasAttribute('data-search-scope') || link.hasAttribute('data-discovery-group') || link.closest('.language-switch') || link.hasAttribute('data-reading-return') || link.hasAttribute('data-stage-model') || link.hasAttribute('data-target-model')) continue;
    const original = inheritedLinks.get(link);
    if (!context.hasLink) { if (original) { link.href = original; inheritedLinks.delete(link); } continue; }
    const url = new URL(original ?? link.href, location.href);
    if (url.origin !== location.origin || !url.pathname.startsWith(base)) continue;
    if (!original && ['profile', 'profileRole', 'profileStage'].some(key => url.searchParams.has(key))) continue;
    if (!original) inheritedLinks.set(link, link.href);
    url.search = withLinkPreference(url.searchParams, context.preference).toString(); link.href = url.href;
  }
  delete document.documentElement.dataset.targetPending;
}

document.addEventListener('click', event => {
  const button = (event.target as Element).closest<HTMLElement>('[data-edit-target], [data-view-all-target], [data-adopt-target], [data-remove-link-target]');
  if (!button) return;
  if (button.hasAttribute('data-edit-target')) openTargetSelector();
  else if (button.hasAttribute('data-view-all-target')) viewAllQuestions();
  else if (button.hasAttribute('data-adopt-target')) adoptLinkTarget();
  else removeLinkTarget();
});
subscribeTarget(updateTargetDom);
export function sharedTargetUrl(url: URL): string {
  url.search = withLinkPreference(url.searchParams, getTargetContext().preference).toString();
  return url.href;
}
