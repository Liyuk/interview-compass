import type { Locale } from './taxonomy';

export type BrowseRecord = {
  questionId: string;
  locale: Locale;
  status: 'draft' | 'published';
  title: string;
  question: string;
  intent: string;
  primaryCapability: string;
  topics: string[];
  roles: string[];
  responsibilityScopes: string[];
  careerTracks: string[];
  scenarios: string[];
};

type BrowseFilters = {
  locale: Locale;
  role?: string;
  topic?: string;
  capability?: string;
  responsibilityScope?: string;
  careerTrack?: string;
  scenario?: string;
};

export function getQuestions<T extends BrowseRecord>(records: readonly T[], filters: BrowseFilters): T[] {
  const seen = new Set<string>();
  return records.filter((record) => {
    if (record.status !== 'published' || record.locale !== filters.locale || seen.has(record.questionId)) return false;
    if (filters.role && !record.roles.includes(filters.role)) return false;
    if (filters.topic && !record.topics.includes(filters.topic)) return false;
    if (filters.capability && record.primaryCapability !== filters.capability) return false;
    if (filters.responsibilityScope && !record.responsibilityScopes.includes(filters.responsibilityScope)) return false;
    if (filters.careerTrack && !record.careerTracks.includes(filters.careerTrack)) return false;
    if (filters.scenario && !record.scenarios.includes(filters.scenario)) return false;
    seen.add(record.questionId);
    return true;
  });
}

export function listFacetValues(records: readonly BrowseRecord[], options: { locale: Locale; facet: 'topics' | 'roles' }): string[] {
  return [...new Set(getQuestions(records, { locale: options.locale }).flatMap((record) => record[options.facet]))].sort();
}
