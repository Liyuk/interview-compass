import { resolvePreference, withLinkPreference } from '../target-preferences';
import { facetKeys, type BrowseQuery, type QueryContext, type QueryResult } from './types';
export function parseBrowseQuery(url: URL, context: QueryContext): QueryResult {
  const params = url.searchParams;
  const diagnostics: string[] = [];
  const facets: BrowseQuery['facets'] = {};
  for (const key of facetKeys) {
    const value = params.get(key);
    if (!value) continue;
    if (context.facets?.[key] && !context.facets[key]!.includes(value)) diagnostics.push(`invalid-${key}`);
    else facets[key] = value;
  }
  const rawPage = params.get('page');
  let page = rawPage && /^[1-9][0-9]*$/.test(rawPage) && Number.isSafeInteger(Number(rawPage)) ? Number(rawPage) : 1;
  if (rawPage && String(page) !== rawPage) diagnostics.push('invalid-page');
  if (context.pageCount !== undefined) page = Math.min(page, Math.max(1, context.pageCount));
  const defaultScope = !params.get('q')?.trim() && /\/questions\/$/.test(url.pathname) ? 'questions' : 'all';
  const query: BrowseQuery = { locale: context.locale, searchScope: params.get('searchScope') === 'docs' ? 'docs' : params.get('searchScope') === 'questions' ? 'questions' : params.get('searchScope') === 'all' ? 'all' : defaultScope, q: (params.get('q') ?? '').trim(), target: resolvePreference(params, context.localTarget), facets, sort: params.get('sort') === 'title' ? 'title' : 'relevance', page };
  if (query.target.invalidLink) diagnostics.push('invalid-target');
  return { query, diagnostics, normalizedUrl: serializeBrowseQuery(query, url) };
}
export function serializeBrowseQuery(query: BrowseQuery, destination: URL, options: { share?: boolean } = {}): string {
  let params = new URLSearchParams();
  if (query.q) params.set('q', query.q);
  for (const key of facetKeys) if (query.facets[key]) params.set(key, query.facets[key]!);
  const defaultScope = !query.q && /\/questions\/$/.test(destination.pathname) ? 'questions' : 'all';
  if (query.searchScope !== defaultScope) params.set('searchScope', query.searchScope);
  if (query.sort !== 'relevance') params.set('sort', query.sort);
  if (query.page > 1) params.set('page', String(query.page));
  if (query.target.hasLink || options.share) params = withLinkPreference(params, query.target.preference);
  const result = new URL(destination); result.search = params.toString();
  return `${result.pathname}${result.search}${result.hash}`;
}
export function updateBrowseQuery(query: BrowseQuery, changes: Partial<BrowseQuery>): BrowseQuery {
  const conditionsChanged = (Object.keys(changes) as (keyof BrowseQuery)[]).some(key => key !== 'page' && JSON.stringify(query[key]) !== JSON.stringify(changes[key]));
  return { ...query, ...changes, page: conditionsChanged ? 1 : changes.page ?? query.page };
}
