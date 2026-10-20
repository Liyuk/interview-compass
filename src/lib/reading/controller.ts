import { createReadingSession, currentCollectionKey } from './session';
import { browserReadingStorage } from './storage';
import { createKnowledgeRegistry } from '../knowledge/registry';
import type { KnowledgeRegistry } from '../knowledge/types';
import { readingReturnPath } from '../reading-journey';
import { getTargetContext } from '../target-state';
import { withLinkPreference } from '../target-preferences';
const locale = document.documentElement.lang === 'en' ? 'en' : 'zh-CN';
const en = locale === 'en';
const base = import.meta.env.BASE_URL;
const prefix = `${base.replace(/\/$/, '')}/${en ? 'en/' : ''}`;
const navigation = document.querySelector<HTMLElement>('[data-reading-navigation]');
const collectionRoot = document.querySelector<HTMLDetailsElement>('[data-current-collection]');
const currentQuestion = navigation?.dataset.currentQuestion;
let registry: KnowledgeRegistry;
let session: ReturnType<typeof createReadingSession>;
let pending: Promise<void> | undefined;
const storage = browserReadingStorage();
function message(value: string) { const node = document.querySelector('[data-collection-status]'); if (node) node.textContent = value; }
function readingQuestions(payload: unknown): { questionId: string; question: string }[] {
  if (typeof payload !== 'object' || payload === null || !('questions' in payload) || !Array.isArray(payload.questions)) throw Error('reading-index-version');
  const questions = payload.questions.filter((item: unknown): item is { questionId: string; question: string } =>
    typeof item === 'object' && item !== null && 'questionId' in item && typeof item.questionId === 'string' && 'question' in item && typeof item.question === 'string');
  if (questions.length !== payload.questions.length) throw Error('reading-index-version');
  return questions;
}
function linked(href: string): string {
  const url = new URL(href, location.origin);
  if (getTargetContext().hasLink) url.search = withLinkPreference(url.searchParams, getTargetContext().preference).toString();
  return `${url.pathname}${url.search}${url.hash}`;
}
function openCurrent() {
  const state = session.current();
  if (currentQuestion && state.questionIds.length) session.open({ locale, source: state.source ?? '', questionIds: state.questionIds, currentId: currentQuestion, collectionId: state.collectionId });
}
function render() {
  if (!session) return;
  const state = session.current();
  if (navigation) {
    navigation.hidden = !state.source || !state.questionIds.length;
    for (const [key, node] of [['previous',state.previous], ['next',state.next]] as const) {
      const a = navigation.querySelector<HTMLAnchorElement>(`[data-reading-${key}]`)!;
      a.hidden = !node;
      if (node?.href) { a.href = linked(node.href); a.removeAttribute('aria-disabled'); }
      else { a.removeAttribute('href'); a.setAttribute('aria-disabled','true'); }
    }
    const source = navigation.querySelector<HTMLAnchorElement>('[data-session-return]')!;
    source.href = state.source || `${prefix}collections/`;
    if (state.source) document.querySelectorAll<HTMLAnchorElement>('[data-reading-return]').forEach(link => { link.href = state.source!; link.hidden = false; });
    navigation.querySelector('[data-reading-position]')!.textContent = state.position >= 0
      ? (en ? `Question ${state.position + 1} of ${state.questionIds.length}` : `本次集合第 ${state.position + 1} / ${state.questionIds.length} 题`)
      : (en ? 'This question is no longer in this set. Return to choose another.' : '当前题已不在本次集合中，可以返回集合重新选择。');
    navigation.querySelector('[data-reading-endpoint]')!.textContent = state.position < 0 ? '' : !state.next ? (en ? 'End of this set.' : '已到本次集合末尾。') : !state.previous ? (en ? 'Start of this set.' : '已到本次集合开头。') : '';
  }
  if (collectionRoot) {
    collectionRoot.hidden = false;
    const collection = session.collection();
    collectionRoot.querySelector('[data-collection-count]')!.textContent = `${collection.ids.length} / 200`;
    if (collection.scope === 'page') message(en ? 'Storage is unavailable. This collection lasts only on this page.' : '存储不可用，本次题单仅在当前页面有效。');
    const list = collectionRoot.querySelector('[data-collection-list]')!;
    list.replaceChildren(...collection.ids.flatMap((id,index) => {
      const node = registry.page(`question:${id}`,locale); if (!node?.href) return [];
      const li = document.createElement('li'); li.dataset.questionId = id;
      const a = document.createElement('a'); a.href = linked(node.href); a.textContent = node.title; li.append(a);
      const controls = document.createElement('div'); controls.className = 'collection-item-controls';
      for (const [label,action,disabled] of [[en ? 'Move up' : '上移','up',index===0], [en ? 'Move down' : '下移','down',index===collection.ids.length-1], [en ? 'Remove' : '移除','remove',false]] as const) {
        const button = document.createElement('button'); button.type='button'; button.textContent=label; button.disabled=disabled;
        button.setAttribute('aria-label', `${label}：${node.title}`);
        button.onclick = () => {
          if (action === 'remove') session.updateCollection({type:'remove',id});
          else { const ids = [...collection.ids]; const to = index + (action === 'up' ? -1 : 1); [ids[index],ids[to]] = [ids[to],ids[index]]; session.updateCollection({type:'reorder',ids}); }
          render(); const replacement = [...list.querySelectorAll<HTMLButtonElement>('button')].find(item => item.getAttribute('aria-label') === `${label}：${node.title}`); (replacement ?? collectionRoot.querySelector<HTMLElement>('summary'))?.focus();
        };
        controls.append(button);
      }
      li.append(controls); return [li];
    }));
    const add = collectionRoot.querySelector<HTMLButtonElement>('[data-collection-add]');
    if (add) add.disabled = collection.ids.includes(add.dataset.collectionAdd!);
    collectionRoot.querySelector<HTMLButtonElement>('[data-collection-clear]')!.disabled = collection.ids.length === 0;
  }
}
async function init() {
  pending ??= (async () => {
    const response = await fetch(`${base.replace(/\/$/,'')}/data/questions/${locale}.json`);
    if (!response.ok) throw Error('reading-index');
    const questions = readingQuestions(await response.json());
    const result = createKnowledgeRegistry({nodes:questions.map(item => ({contentId:`question:${item.questionId}`,locale,kind:'question',title:item.question,href:`${prefix}questions/${item.questionId}/`,missingTranslations:[en ? 'zh-CN' : 'en']}))});
    if (result.ok === false) throw Error('reading-registry');
    registry = result.registry;
    session = createReadingSession(storage,registry,{base,locale});
    openCurrent(); render();
  })().catch(error => { pending=undefined; throw error; });
  return pending;
}
if (navigation || collectionRoot) void init().catch(() => {
  if (collectionRoot) {
    collectionRoot.hidden = false;
    message(en ? 'Reading tools could not load. Open this panel again to retry; article links remain available.' : '阅读工具暂时无法加载。重新打开本面板可重试；正文链接仍可使用。');
  }
});
collectionRoot?.addEventListener('toggle', () => { if (collectionRoot.open && !session) void init().catch(() => message(en ? 'Still unavailable. Try again later.' : '仍无法载入，请稍后重试。')); });
document.addEventListener('click', event => {
  const target = event.target instanceof Element ? event.target : null;
  const add = target?.closest<HTMLElement>('[data-collection-add]');
  if (add) {
    void init().then(() => {
      const result = session.updateCollection({type:'add',id:add.dataset.collectionAdd!});
      message(result.error === 'collection-limit' ? (en ? 'The 200-question limit has been reached. Remove a question first.' : '已达到 200 题上限，请先移除一些题目。') : result.error ? (en ? 'This question is unavailable.' : '此题暂不可用。') : (en ? 'Added to your collection.' : '已加入本次题单。'));
      render();
    }).catch(() => message(en ? 'Could not load reading tools.' : '阅读工具加载失败。'));
    return;
  }
  if (target?.closest('[data-collection-clear]')) { session?.updateCollection({type:'clear'}); message(en ? 'Collection cleared.' : '本次题单已清空。'); render(); return; }
  const anchor = target?.closest<HTMLAnchorElement>('a');
  if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || anchor.target === '_blank' || anchor.hasAttribute('download')) return;
  if (anchor.matches('[data-reading-next],[data-reading-previous]')) { session?.move(anchor.matches('[data-reading-next]') ? 1 : -1); return; }
  const url = new URL(anchor.href,location.href);
  const questionId = url.pathname.startsWith(`${prefix}questions/`) ? url.pathname.slice(`${prefix}questions/`.length).match(/^([^/]+)\/$/)?.[1] : undefined;
  if (!questionId || url.origin !== location.origin) return;
  let source = readingReturnPath(`${location.pathname}${location.search}${location.hash}`,locale,base);
  const local = Boolean(anchor.closest('[data-current-collection]'));
  if (local) source = `${prefix}collections/#current-collection`;
  if (!source) return;
  const container = anchor.closest('ol,ul');
  let ids = local ? undefined : container ? [...container.querySelectorAll<HTMLElement>('[data-question-id]')].filter(item => !item.hidden).map(item => item.dataset.questionId!) : [questionId];
  if (!local && container instanceof HTMLElement && container.dataset.readingOrder) try {
    const order = JSON.parse(container.dataset.readingOrder);
    if (Array.isArray(order) && order.includes(questionId) && order.every(id => typeof id === 'string')) ids = order;
  } catch { /* Visible results still form a usable snapshot. */ }
  event.preventDefault();
  void init().then(() => {
    const questionIds = local ? session.collection().ids : ids ?? [questionId];
    const collectionId = local ? 'current' : location.pathname.match(/\/collections\/([^/]+)\//)?.[1];
    session.open({locale,source:source!,questionIds,currentId:questionId,collectionId});
    location.assign(url.href);
  }).catch(() => location.assign(url.href));
});
window.addEventListener('storage', event => {
  if (event.key !== currentCollectionKey && event.key !== null) return;
  if (!registry) return;
  const current = session.current();
  session = createReadingSession(storage,registry,{base,locale});
  if (current.currentId) session.open({locale,source:current.source ?? '',questionIds:current.collectionId === 'current' ? session.collection().ids : current.questionIds,currentId:current.currentId,collectionId:current.collectionId});
  render(); message(en ? 'Your collection changed in another tab.' : '本次题单已在其他标签页更新。');
});
