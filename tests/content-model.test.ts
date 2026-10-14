import { describe, expect, it } from 'vitest';
import { parseQuestionRecord, validateBilingualPairs, validateNoDuplicateTitles, validateQuestionRelationships } from '../src/lib/content-model';

const question = (locale: 'zh-CN' | 'en', overrides: Record<string, unknown> = {}) => ({
  questionId: 'prioritization-under-limited-capacity',
  kind: 'question',
  status: 'published',
  locale,
  title: locale === 'zh-CN' ? '有限资源下如何取舍？' : 'How do you prioritize under limited capacity?',
  question: locale === 'zh-CN' ? '资源只够做两项时，你会如何制定下一季度规划？' : 'How would you plan next quarter if capacity only allowed two initiatives?',
  intent: locale === 'zh-CN' ? '了解你如何说明目标、取舍依据与暂缓项。' : 'Understand how you explain goals, trade-offs, and deferred work.',
  signals: [locale === 'zh-CN' ? '说清排序口径' : 'States the basis for the ranking'],
  primaryCapability: 'value-direction.prioritization',
  topics: ['planning', 'prioritization'],
  roles: ['engineering', 'product'],
  responsibilityScopes: ['team'],
  careerTracks: ['individual-contributor'],
  scenarios: ['interview', 'promotion'],
  formats: ['planning'],
  source: [{ attribution: 'original' }],
  ...overrides,
});

describe('question content contract', () => {
  it('requires a prompt, intent, signals, and exactly one known primary capability', () => {
    expect(parseQuestionRecord(question('zh-CN'))).toMatchObject({ questionId: 'prioritization-under-limited-capacity' });
    expect(() => parseQuestionRecord(question('zh-CN', { intent: '' }))).toThrow(/intent/i);
    expect(() => parseQuestionRecord(question('zh-CN', { signals: [] }))).toThrow(/signal/i);
    expect(() => parseQuestionRecord(question('zh-CN', { primaryCapability: 'unknown.capability' }))).toThrow(/capability/i);
    expect(() => parseQuestionRecord(question('zh-CN', { primaryCapability: 'value-direction.not-a-leaf' }))).toThrow(/capability/i);
  });

  it('rejects unknown taxonomy IDs in every facet', () => {
    expect(() => parseQuestionRecord(question('zh-CN', { topics: ['made-up-topic'] }))).toThrow(/topics/i);
    expect(() => parseQuestionRecord(question('zh-CN', { formats: ['made-up-format'] }))).toThrow(/formats/i);
    expect(() => parseQuestionRecord(question('zh-CN', { scenarios: ['made-up'] }))).toThrow(/scenarios/i);
  });

  it('rejects answer-bearing fields', () => {
    for (const field of ['answer', 'sampleAnswer', 'score', 'rubric', 'recommendation']) {
      expect(() => parseQuestionRecord(question('zh-CN', { [field]: 'x' }))).toThrow();
    }
  });

  it('requires provenance and a url unless the question is original', () => {
    expect(() => parseQuestionRecord(question('zh-CN', { source: [] }))).toThrow(/source|original/i);
    expect(() => parseQuestionRecord(question('zh-CN', { source: [{ attribution: 'inspired' }] }))).toThrow(/url/i);
    expect(parseQuestionRecord(question('zh-CN', { source: [{ attribution: 'derived', url: 'https://example.com/a' }] })).source).toHaveLength(1);
  });

  it('requires every published question to have one Chinese and one English page', () => {
    const pair = [question('zh-CN'), question('en')];
    expect(validateBilingualPairs(pair)).toEqual([]);
    expect(validateBilingualPairs([question('zh-CN')])).toContainEqual(expect.stringMatching(/missing.*English/i));
    expect(validateBilingualPairs([...pair, question('en')])).toContainEqual(expect.stringMatching(/duplicate.*en/i));
  });

  it('keeps one primary capability across both languages', () => {
    const errors = validateBilingualPairs([question('zh-CN'), question('en', { primaryCapability: 'delivery.capacity-planning' })]);
    expect(errors).toContainEqual(expect.stringMatching(/capability differs/i));
  });

  it('does not require draft questions to be indexed or translated', () => {
    expect(validateBilingualPairs([question('zh-CN', { status: 'draft' })])).toEqual([]);
  });

  it('requires published related questions to exist in the same language', () => {
    expect(validateQuestionRelationships([
      question('zh-CN', { relatedQuestions: [{ questionId: 'related-prompt', relation: 'related', contrast: 'different focus' }] }),
      question('zh-CN', { questionId: 'related-prompt', question: '另一个问题', relatedQuestions: [] }),
    ])).toEqual([]);
    expect(validateQuestionRelationships([
      question('en', { relatedQuestions: [{ questionId: 'missing-prompt', relation: 'related', contrast: 'different focus' }] }),
    ])).toContainEqual(expect.stringMatching(/missing.*related question/i));
  });

  it('flags the same wording published under two question IDs', () => {
    expect(validateNoDuplicateTitles([question('en'), question('en', { questionId: 'another-id' })])).toContainEqual(expect.stringMatching(/duplicate en question wording/i));
    expect(validateNoDuplicateTitles([question('en'), question('en', { questionId: 'another-id', question: 'A different prompt entirely' })])).toEqual([]);
  });
});
