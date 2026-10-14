import { describe, expect, it } from 'vitest';
import { getQuestions, listFacetValues } from '../src/lib/question-catalog';
import { addBase, localeSwitchPath } from '../src/lib/locale-paths';
import { filterLocalizedResults } from '../src/lib/search-records';

const records = [
  { questionId: 'q1', locale: 'zh-CN', status: 'published', title: '资源规划', question: '资源只够做两项时怎么办？', intent: '看取舍', primaryCapability: 'value-direction.prioritization', topics: ['planning'], roles: ['engineering'], responsibilityScopes: ['team'], careerTracks: ['individual-contributor'], scenarios: ['interview'] },
  { questionId: 'q1', locale: 'en', status: 'published', title: 'Resource planning', question: 'How do you plan with limited capacity?', intent: 'Observe trade-offs', primaryCapability: 'value-direction.prioritization', topics: ['planning'], roles: ['engineering'], responsibilityScopes: ['team'], careerTracks: ['individual-contributor'], scenarios: ['interview'] },
  { questionId: 'q2', locale: 'zh-CN', status: 'draft', title: '草稿', question: '草稿题', intent: '草稿意图', primaryCapability: 'professional.system-design', topics: ['distributed-systems'], roles: ['engineering'], responsibilityScopes: ['team'], careerTracks: ['individual-contributor'], scenarios: ['interview'] },
];

describe('question discovery', () => {
  it('browses by independent role and topic facets without duplicating a question', () => {
    const selected = getQuestions(records, { locale: 'zh-CN', role: 'engineering', topic: 'planning' });
    expect(selected.map((item) => item.questionId)).toEqual(['q1']);
    expect(listFacetValues(records, { locale: 'zh-CN', facet: 'roles' })).toEqual(['engineering']);
    expect(listFacetValues(records, { locale: 'zh-CN', facet: 'topics' })).toEqual(['planning']);
  });

  it('keeps draft records out of public topic and role indexes', () => {
    expect(getQuestions(records, { locale: 'zh-CN' })).toHaveLength(1);
    expect(listFacetValues(records, { locale: 'zh-CN', facet: 'topics' })).not.toContain('distributed-systems');
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

  it('filters Pagefind-style records to the active language', () => {
    const results = filterLocalizedResults([
      { url: '/questions/q1/', locale: 'zh-CN', title: '资源规划' },
      { url: '/en/questions/q1/', locale: 'en', title: 'Resource planning' },
    ], 'en');
    expect(results.map((item) => item.title)).toEqual(['Resource planning']);
  });
});
