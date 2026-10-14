import { domains, type FacetKind, type Locale } from './taxonomy';

export type BrowseRecord = {
  questionId: string;
  locale: Locale;
  status: 'draft' | 'published';
  title: string;
  question: string;
  intent: string;
  signals?: string[];
  primaryCapability: string;
  topics: string[];
  roles: string[];
  responsibilityScopes: string[];
  careerTracks: string[];
  scenarios: string[];
  formats?: string[];
};

export type BrowseFilters = {
  locale: Locale;
  domain?: string;
  capability?: string;
  topic?: string;
  role?: string;
  responsibilityScope?: string;
  careerTrack?: string;
  scenario?: string;
  format?: string;
};

export function getQuestions<T extends BrowseRecord>(records: readonly T[], filters: BrowseFilters): T[] {
  const seen = new Set<string>();
  return records.filter((record) => {
    if (record.status !== 'published' || record.locale !== filters.locale || seen.has(record.questionId)) return false;
    if (filters.domain && record.primaryCapability.split('.')[0] !== filters.domain) return false;
    if (filters.capability && record.primaryCapability !== filters.capability) return false;
    if (filters.topic && !record.topics.includes(filters.topic)) return false;
    if (filters.role && !record.roles.includes(filters.role)) return false;
    if (filters.responsibilityScope && !record.responsibilityScopes.includes(filters.responsibilityScope)) return false;
    if (filters.careerTrack && !record.careerTracks.includes(filters.careerTrack)) return false;
    if (filters.scenario && !record.scenarios.includes(filters.scenario)) return false;
    if (filters.format && !(record.formats ?? []).includes(filters.format)) return false;
    seen.add(record.questionId);
    return true;
  });
}

const facetField: Record<FacetKind, 'topics' | 'roles' | 'responsibilityScopes' | 'careerTracks' | 'scenarios' | 'formats'> = {
  topics: 'topics', roles: 'roles', responsibilityScopes: 'responsibilityScopes',
  careerTracks: 'careerTracks', scenarios: 'scenarios', formats: 'formats',
};

export function facetValuesOf(record: BrowseRecord, kind: FacetKind): string[] {
  return record[facetField[kind]] ?? [];
}

export function listFacetValues(records: readonly BrowseRecord[], options: { locale: Locale; facet: FacetKind }): string[] {
  return [...new Set(getQuestions(records, { locale: options.locale }).flatMap((record) => facetValuesOf(record, options.facet)))].sort();
}

export function facetCounts(records: readonly BrowseRecord[], options: { locale: Locale; facet: FacetKind }): Map<string, number> {
  const counts = new Map<string, number>();
  for (const record of getQuestions(records, { locale: options.locale })) {
    for (const id of new Set(facetValuesOf(record, options.facet))) counts.set(id, (counts.get(id) ?? 0) + 1);
  }
  return counts;
}

export function capabilityCounts(records: readonly BrowseRecord[], locale: Locale) {
  const leaves = new Map<string, number>();
  const domainTotals = new Map<string, number>();
  for (const record of getQuestions(records, { locale })) {
    leaves.set(record.primaryCapability, (leaves.get(record.primaryCapability) ?? 0) + 1);
    const domain = record.primaryCapability.split('.')[0];
    domainTotals.set(domain, (domainTotals.get(domain) ?? 0) + 1);
  }
  return { leaves, domains: domainTotals };
}

export function publishedDomains(records: readonly BrowseRecord[], locale: Locale) {
  const { leaves, domains: totals } = capabilityCounts(records, locale);
  return domains.map((domain) => ({
    domain,
    count: totals.get(domain.id) ?? 0,
    leaves: domain.leaves.map((leaf) => ({ leaf, count: leaves.get(`${domain.id}.${leaf.id}`) ?? 0 })).filter((entry) => entry.count > 0),
  }));
}

export function parseFilterQuery(search: string | URLSearchParams): Omit<BrowseFilters, 'locale'> {
  const params = typeof search === 'string' ? new URLSearchParams(search) : search;
  const read = (key: string) => params.get(key) || undefined;
  return {
    domain: read('domain'), capability: read('capability'), topic: read('topic'), role: read('role'),
    responsibilityScope: read('scope'), careerTrack: read('track'), scenario: read('scenario'), format: read('format'),
  };
}

export function serializeFilterQuery(filters: Omit<BrowseFilters, 'locale'>): string {
  const params = new URLSearchParams();
  const entries: [string, string | undefined][] = [
    ['domain', filters.domain], ['capability', filters.capability], ['topic', filters.topic], ['role', filters.role],
    ['scope', filters.responsibilityScope], ['track', filters.careerTrack], ['scenario', filters.scenario], ['format', filters.format],
  ];
  for (const [key, value] of entries) if (value) params.set(key, value);
  const text = params.toString();
  return text ? `?${text}` : '';
}
