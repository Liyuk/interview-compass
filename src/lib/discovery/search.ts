import { getPageWindow } from '../search-pagination';
import type { BrowseQuery, FacetKey } from './types';
export type ResultKind = 'docs' | 'questions';
export interface DiscoveryItem { id: string; title: string; url: string; excerpt?: string; sections?: { title: string; url: string }[]; profiles?: string[]; facets?: Record<string, string[]> }
export interface Candidate { id: string; data(): Promise<DiscoveryItem> }
export interface CandidateSet { results: Candidate[]; counts?: Record<string, Record<string, number>> }
export type DiscoveryAdapter = (query: BrowseQuery, kind: ResultKind) => Promise<CandidateSet>;
export interface DiscoveryAdapters { catalog: DiscoveryAdapter; pagefind: DiscoveryAdapter }
export interface ResultGroup { items: DiscoveryItem[]; total: number; page: number; pageSize: number; pageCount: number; ids: string[] }
export interface ResultPage { docs: ResultGroup; questions: ResultGroup; appliedConditions: BrowseQuery; state: 'ready' | 'empty' }
export function createDiscovery(adapters: DiscoveryAdapters) {
  const countCache = new Map<string, Promise<Record<string, number>>>();
  return { async facetCounts(query: BrowseQuery, facet: FacetKey, values: string[]): Promise<Record<string, number>> {
    const facets = { ...query.facets }; delete facets[facet];
    const key = JSON.stringify([query.locale, query.q, query.target.preference, facets, facet, values]);
    if (!countCache.has(key)) {
      const adapter = query.q ? adapters.pagefind : adapters.catalog;
      const pending = adapter({ ...query, facets }, 'questions').then(set => Object.fromEntries(values.map(value => [value, set.counts?.[facet]?.[value] ?? 0]))).catch(error => { countCache.delete(key); throw error; });
      if (countCache.size > 100) countCache.clear();
      countCache.set(key, pending);
    }
    return countCache.get(key)!;
  }, async search(query: BrowseQuery, options: { pageSize?: number } = {}): Promise<ResultPage> {
    const adapter = query.q ? adapters.pagefind : adapters.catalog;
    async function group(kind: ResultKind): Promise<ResultGroup> {
      const enabled = query.searchScope === 'all' || query.searchScope === kind;
      const candidates = enabled ? await adapter(query, kind) : { results: [] };
      const pageSize = options.pageSize ?? 50;
      const window = getPageWindow(candidates.results.length, query.page, pageSize);
      const items = await Promise.all(candidates.results.slice(window.start, window.end).map(result => result.data()));
      return { items, total: candidates.results.length, page: window.page, pageSize, pageCount: window.pageCount, ids: candidates.results.map(item => item.id) };
    }
    const [docs, questions] = await Promise.all([group('docs'), group('questions')]);
    return { docs, questions, appliedConditions: query, state: docs.total + questions.total ? 'ready' : 'empty' };
  } };
}
