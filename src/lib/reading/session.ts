import type { KnowledgeRegistry } from '../knowledge/types';
import type { Locale } from '../taxonomy';
import type { ReadingStorage } from './storage';
import { readingReturnPath } from '../reading-journey';
export interface ReadingContext { locale: Locale; source: string; collectionId?: string; questionIds: string[]; currentId: string }
export type CollectionAction = {type:'add'; id:string} | {type:'remove'; id:string} | {type:'reorder'; ids:string[]} | {type:'clear'};
export const readingSessionKey = 'interview-compass.reading.v1';
export const currentCollectionKey = 'interview-compass.collection.v1';
export function createReadingSession(storage: ReadingStorage, registry: KnowledgeRegistry, options: { base: string; locale?: Locale }) {
  let context: ReadingContext | undefined;
  let persistent = true;
  let scope: 'device' | 'tab' | 'page' = storage.scope ?? 'page';
  let collection: string[] = [];
  try { const value = JSON.parse(storage.get(currentCollectionKey) ?? 'null'); if(value && (value.version !== 1 || !Array.isArray(value.ids))) { persistent = false; scope = 'page'; } if (value?.version === 1 && Array.isArray(value.ids)) collection = [...new Set<string>(value.ids.filter((id: unknown): id is string => typeof id === 'string' && Boolean(registry.page(`question:${id}`, 'en') ?? registry.page(`question:${id}`, 'zh-CN'))))].slice(0, 200); } catch { persistent = false; scope = 'page'; }
  function normalize(value: ReadingContext): ReadingContext {
    const locale = options.locale ?? value.locale;
    let source = readingReturnPath(value.source, value.locale, options.base) ?? '';
    if (source && locale !== value.locale) {
      const prefix = `${options.base.replace(/\/$/, '')}/`;
      const suffix = source.slice(prefix.length).replace(/^en\//, '');
      source = `${prefix}${locale === 'en' ? 'en/' : ''}${suffix}`;
    }
    return { ...value, locale, source, questionIds: [...new Set(value.questionIds)].filter(id => typeof id === 'string' && registry.page(`question:${id}`, locale)?.kind === 'question') };
  }
  try {
    const value = JSON.parse(storage.get(readingSessionKey) ?? 'null');
    if (value && (value.version !== 1 || !['en','zh-CN'].includes(value.locale) || typeof value.source !== 'string' || typeof value.currentId !== 'string' || !Array.isArray(value.questionIds))) { persistent = false; scope = 'page'; }
    if (value?.version === 1 && ['en','zh-CN'].includes(value.locale) && typeof value.source === 'string' && typeof value.currentId === 'string' && Array.isArray(value.questionIds)) context = normalize(value);
  } catch { persistent = false; scope = 'page'; }
  if (!context) try {
    const legacy = JSON.parse(storage.get('interview-compass-reading-return') ?? 'null');
    if (typeof legacy?.from === 'string' && typeof legacy.to === 'string') {
      const match = legacy.to.match(/\/questions\/([^/]+)\/$/);
      const locale: Locale = legacy.to.startsWith(`${options.base.replace(/\/$/, '')}/en/`) ? 'en' : 'zh-CN';
      if (match && readingReturnPath(legacy.from, locale, options.base)) context = normalize({ locale, source: legacy.from, questionIds: [match[1]], currentId: match[1] });
    }
  } catch { /* Older return state is optional. */ }
  function save() { if (!persistent) return; try { storage.set(readingSessionKey, JSON.stringify({version:1, ...context})); } catch { persistent = false; scope = 'page'; } }
  function current() {
    const position = context?.questionIds.indexOf(context.currentId) ?? -1;
    const node = (id?: string) => id && context ? registry.page(`question:${id}`, context.locale) : undefined;
    return { current: node(context?.currentId), previous: position > 0 ? node(context!.questionIds[position - 1]) : undefined, next: position >= 0 ? node(context!.questionIds[position + 1]) : undefined, source: context?.source, locale: context?.locale, collectionId: context?.collectionId, currentId: context?.currentId, questionIds: [...(context?.questionIds ?? [])], position, scope };
  }
  return {
    open(value: ReadingContext) {
      context = normalize(value);
      save(); return current();
    },
    current,
    collection() { return { ids: [...collection], scope }; },
    updateCollection(action: CollectionAction) {
      let error: string | undefined;
      if (action.type === 'add') {
        if (!registry.page(`question:${action.id}`, options.locale ?? context?.locale ?? 'en')) error = 'missing-question';
        else if (!collection.includes(action.id)) { if (collection.length >= 200) error = 'collection-limit'; else collection.push(action.id); }
      } else if (action.type === 'remove') collection = collection.filter(id => id !== action.id);
      else if (action.type === 'clear') collection = [];
      else if (action.ids.length === collection.length && new Set(action.ids).size === collection.length && action.ids.every(id => collection.includes(id))) collection = [...action.ids];
      else error = 'invalid-order';
      try { if (persistent) storage.set(currentCollectionKey, JSON.stringify({ version: 1, ids: collection })); } catch { persistent = false; scope = 'page'; }
      if (context?.collectionId === 'current') { context.questionIds = [...collection]; save(); }
      return { ids: [...collection], scope, error };
    },
    move(direction: -1 | 1) {
      if (!context) return current();
      const position = context.questionIds.indexOf(context.currentId);
      const next = position >= 0 ? context.questionIds[position + direction] : undefined;
      if (next) { context.currentId = next; save(); }
      return current();
    },
  };
}
