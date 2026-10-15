import { describe, expect, it } from 'vitest';
import {
  capabilityCounts, facetCounts, getPathQuestions, getQuestions, listFacetValues, parseFilterQuery, publishedDomains, serializeFilterQuery,
  type BrowseRecord,
} from '../src/lib/question-catalog';
import { addBase, localeSwitchPath } from '../src/lib/locale-paths';
import { safeSearchResultHref } from '../src/lib/search-records';
import { crossDomainPaths, domains } from '../src/lib/taxonomy';

const record = (overrides: Partial<BrowseRecord>): BrowseRecord => ({
  questionId: 'q1', locale: 'zh-CN', status: 'published', title: '标题', question: '问题', intent: '意图',
  primaryCapability: 'value-direction.prioritization', topics: ['planning'], roles: ['engineering'],
  responsibilityScopes: ['team'], careerTracks: ['individual-contributor'], scenarios: ['interview'], formats: ['planning'],
  ...overrides,
});

const records: BrowseRecord[] = [
  record({}),
  record({ locale: 'en', title: 'Resource planning' }),
  record({ questionId: 'q2', status: 'draft', primaryCapability: 'professional.system-design', topics: ['distributed-systems'] }),
  record({ questionId: 'q3', primaryCapability: 'delivery.capacity-planning', roles: ['product', 'engineering'], topics: ['planning', 'execution'], scenarios: ['promotion'], formats: ['case'] }),
  record({ questionId: 'q3', locale: 'en' }),
];

describe('question discovery', () => {
  it('browses by independent facets without duplicating a question', () => {
    expect(getQuestions(records, { locale: 'zh-CN', role: 'engineering', topic: 'planning' }).map((item) => item.questionId)).toEqual(['q1', 'q3']);
    expect(getQuestions(records, { locale: 'zh-CN', role: 'product' }).map((item) => item.questionId)).toEqual(['q3']);
    expect(getQuestions(records, { locale: 'zh-CN', format: 'case' }).map((item) => item.questionId)).toEqual(['q3']);
  });

  it('filters by capability leaf and by domain', () => {
    expect(getQuestions(records, { locale: 'zh-CN', capability: 'delivery.capacity-planning' }).map((item) => item.questionId)).toEqual(['q3']);
    expect(getQuestions(records, { locale: 'zh-CN', domain: 'value-direction' }).map((item) => item.questionId)).toEqual(['q1']);
  });

  it('keeps draft records out of every index', () => {
    expect(getQuestions(records, { locale: 'zh-CN' })).toHaveLength(2);
    expect(listFacetValues(records, { locale: 'zh-CN', facet: 'topics' })).not.toContain('distributed-systems');
    expect(getQuestions(records, { locale: 'zh-CN', domain: 'professional' })).toEqual([]);
  });

  it('includes every path topic while retaining primary-domain sections', () => {
    const pathRecords = [
      record({ questionId: 'q1', primaryCapability: 'value-direction.planning', topics: ['business-planning'] }),
      record({ questionId: 'q2', primaryCapability: 'delivery.project-management', topics: ['team-planning'] }),
      record({ questionId: 'q3', primaryCapability: 'domain-modeling.business-context', topics: ['commercialization'] }),
    ];
    expect(getPathQuestions(pathRecords, { locale: 'zh-CN', domain: 'value-direction', topics: ['business-planning', 'team-planning'] }).map((item) => item.questionId)).toEqual(['q1']);
    expect(getPathQuestions(pathRecords, { locale: 'zh-CN', domain: 'delivery', topics: ['business-planning', 'team-planning'] }).map((item) => item.questionId)).toEqual(['q2']);
  });

  it('counts unique question IDs in the selected language only', () => {
    expect(facetCounts(records, { locale: 'zh-CN', facet: 'roles' }).get('engineering')).toBe(2);
    expect(facetCounts(records, { locale: 'zh-CN', facet: 'roles' }).get('product')).toBe(1);
    const counts = capabilityCounts(records, 'zh-CN');
    expect(counts.leaves.get('value-direction.prioritization')).toBe(1);
    expect(counts.domains.get('delivery')).toBe(1);
  });

  it('lists only capabilities that have published questions', () => {
    const overview = publishedDomains(records, 'zh-CN');
    const delivery = overview.find((entry) => entry.domain.id === 'delivery')!;
    expect(delivery.count).toBe(1);
    expect(delivery.leaves.map((entry) => entry.leaf.id)).toEqual(['capacity-planning']);
    expect(overview.find((entry) => entry.domain.id === 'professional')!.count).toBe(0);
  });

  it('round-trips shareable filter state through a query string', () => {
    const query = serializeFilterQuery({ role: 'product', capability: 'delivery.capacity-planning', scenario: 'promotion' });
    expect(parseFilterQuery(query)).toMatchObject({ role: 'product', capability: 'delivery.capacity-planning', scenario: 'promotion' });
    expect(serializeFilterQuery({})).toBe('');
  });
});

describe('taxonomy audit coverage', () => {
  it('gives every capability leaf a bilingual placement rule', () => {
    const leaves = domains.flatMap((domain) => domain.leaves);
    expect(leaves.length).toBeGreaterThan(0);
    for (const leaf of leaves) {
      expect(leaf.placement.zh, `${leaf.id} needs a Chinese placement rule`).toMatch(/收录|归入|包括|规划中/);
      expect(leaf.placement.en, `${leaf.id} needs an English placement rule`).toMatch(/Include|Use this leaf|Assign here|Planned/i);
      expect(leaf.boundary.zh).toBeTruthy();
      expect(leaf.boundary.en).toBeTruthy();
    }
  });

  it('defines the audit browse paths with distinct, valid topic tags and bilingual copy', () => {
    const ids = crossDomainPaths.map((path) => path.id);
    expect(ids).toEqual(expect.arrayContaining([
      'asking-better-questions', 'business-planning', 'technical-planning', 'team-planning',
    ]));
    for (const path of crossDomainPaths) {
      expect(path.topics.length).toBeGreaterThan(0);
      expect(path.name.zh).toBeTruthy();
      expect(path.name.en).toBeTruthy();
      expect(path.description.zh).toBeTruthy();
      expect(path.description.en).toBeTruthy();
    }
  });
});

describe('localized routes and search', () => {
  it('applies the GitHub Pages base to root and English routes exactly once', () => {
    expect(addBase('/questions/q1/', '/interview-compass')).toBe('/interview-compass/questions/q1/');
    expect(addBase('/en/questions/q1/', '/interview-compass')).toBe('/interview-compass/en/questions/q1/');
    expect(addBase('/interview-compass/en/questions/q1/', '/interview-compass')).toBe('/interview-compass/en/questions/q1/');
  });

  it('switches language on the paired question route and falls back to that locale home when unpaired', () => {
    expect(localeSwitchPath('/questions/q1/', 'zh-CN', 'en', { q1: { 'zh-CN': '/questions/q1/', en: '/en/questions/q1/' } }, '/interview-compass'))
      .toBe('/interview-compass/en/questions/q1/');
    expect(localeSwitchPath('/questions/q2/', 'zh-CN', 'en', {}, '/interview-compass')).toBe('/interview-compass/en/');
  });

  it('accepts only same-origin search destinations inside the configured base path', () => {
    const options = { origin: 'https://liyuk.github.io', basePath: '/interview-compass' };
    expect(safeSearchResultHref('/interview-compass/en/questions/q1/', options)).toBe('/interview-compass/en/questions/q1/');
    expect(safeSearchResultHref('https://example.com/phishing', options)).toBeUndefined();
    expect(safeSearchResultHref('javascript:alert(1)', options)).toBeUndefined();
    expect(safeSearchResultHref('/outside/questions/q1/', options)).toBeUndefined();
  });
});
