import type { DiscoveryAdapter } from './search';
export interface PagefindData { url: string; meta?: { title?: string }; excerpt?: string; sub_results?: { title: string; url: string }[] }
export interface PagefindIndex { filters?(): Promise<unknown>; search(q: string | null, options: { filters: Record<string, string>; sort?: Record<string, string> }): Promise<{ filters?: Record<string, Record<string, number>>; results: { id?: string; data(): Promise<PagefindData> }[] }> }
export function createPagefindAdapter(index: PagefindIndex, identities: Record<string, string> = {}): DiscoveryAdapter {
  return async (query, kind) => {
    const filters: Record<string, string> = { locale: query.locale, kind };
    if (kind === 'questions') {
      Object.assign(filters, query.facets);
      const preference = query.target.preference;
      if (preference.mode === 'target') filters.profile = `${preference.target.roleId}:${preference.target.stageId}`;
    }
    await index.filters?.();
    const response = await index.search(query.q || null, { filters, ...(query.sort === 'title' ? { sort: { title: 'asc' } } : {}) });
    return { counts: response.filters, results: response.results.map((handle, i) => ({ id: identities[handle.id ?? ''] ?? handle.id ?? String(i), data: async () => {
      const data = await handle.data();
      return { id: identities[handle.id ?? ''] ?? handle.id ?? data.url, title: data.meta?.title ?? data.url, url: data.url, excerpt: data.excerpt, sections: data.sub_results?.filter(section => section.url.includes('#')) };
    } })) };
  };
}
