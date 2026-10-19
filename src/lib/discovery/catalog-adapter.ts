import type { DiscoveryAdapter, DiscoveryItem } from './search';
export function createCatalogAdapter(records: DiscoveryItem[]): DiscoveryAdapter {
  return async (query, kind) => {

    const target = query.target.preference;
    const token = target.mode === 'target' ? `${target.target.roleId}:${target.target.stageId}` : undefined;
    const matches = records.filter(item => (item.kind ?? 'questions') === kind && (kind === 'docs' || ((!token || item.profiles?.includes(token)) && Object.entries(query.facets).every(([key, value]) => item.facets?.[key]?.includes(value)))));
    if (query.sort === 'title') matches.sort((a, b) => a.title.localeCompare(b.title, query.locale));
    const counts: Record<string, Record<string, number>> = {};
    for (const item of matches) for (const [key, values] of Object.entries(item.facets ?? {})) for (const value of values) {
      counts[key] ??= {}; counts[key][value] = (counts[key][value] ?? 0) + 1;
    }
    return { counts, results: matches.map(item => ({ id: item.id, data: async () => item })) };
  };
}
