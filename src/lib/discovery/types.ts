import type { Locale } from '../taxonomy';
import type { BrowsePreference, ResolvedPreference } from '../target-preferences';
export const facetKeys = ['role', 'scope', 'track', 'scenario', 'topic', 'format', 'capability', 'domain'] as const;
export type FacetKey = typeof facetKeys[number];
export interface BrowseQuery {
  locale: Locale;
  searchScope: 'all' | 'docs' | 'questions';
  q: string;
  target: ResolvedPreference;
  facets: Partial<Record<FacetKey, string>>;
  sort: 'relevance' | 'title';
  page: number;
}
export interface QueryContext { base: string; locale: Locale; facets?: Partial<Record<FacetKey, readonly string[]>>; localTarget?: BrowsePreference; pageCount?: number }
export interface QueryResult { query: BrowseQuery; diagnostics: string[]; normalizedUrl: string }
