import { describe, expect, it } from 'vitest';
import { parseQuestionRecord, validateBilingualPairs, validateQuestionRelationships } from '../src/lib/content-model';

const question = (locale: 'zh-CN' | 'en', overrides: Record<string, unknown> = {}) => ({
  questionId: 'prioritization-under-limited-capacity',
  kind: 'question',
  status: 'published',
  locale,
  title: locale === 'zh-CN' ? '有限资源下如何取舍？' : 'How do you prioritize under limited capacity?',
  question: locale === 'zh-CN' ? '资源只够做两项时，你会如何制定下一季度规划？' : 'How would you plan next quarter if capacity only allowed two initiatives?',
  intent: locale === 'zh-CN' ? '了解你如何说明目标、取舍依据与暂缓项。' : 'Understand how you explain goals, trade-offs, and deferred work.',
  primaryCapability: 'value-direction.prioritization',
  topics: ['planning', 'prioritization'],
  roles: ['engineering', 'product'],
  responsibilityScopes: ['team'],
  careerTracks: ['individual-contributor'],
  scenarios: ['interview', 'promotion'],
  ...overrides,
});

describe('question content contract', () => {
  it('requires a prompt, intent, and exactly one known primary capability', () => {
    expect(parseQuestionRecord(question('zh-CN'))).toMatchObject({ questionId: 'prioritization-under-limited-capacity' });
    expect(() => parseQuestionRecord(question('zh-CN', { intent: '' }))).toThrow(/intent/i);
    expect(() => parseQuestionRecord(question('zh-CN', { primaryCapability: 'unknown.capability' }))).toThrow(/capability/i);
  });

  it('rejects unknown taxonomy IDs and answer-bearing fields', () => {
    expect(() => parseQuestionRecord(question('zh-CN', { topics: ['made-up-topic'] }))).toThrow(/topic/i);
    expect(() => parseQuestionRecord(question('zh-CN', { answer: 'sample answer' }))).toThrow();
  });

  it('requires every published question to have one Chinese and one English page', () => {
    const pair = [question('zh-CN'), question('en')];
    expect(validateBilingualPairs(pair)).toEqual([]);
    expect(validateBilingualPairs([question('zh-CN')])).toContainEqual(expect.stringMatching(/missing.*English/i));
    expect(validateBilingualPairs([...pair, question('en')])).toContainEqual(expect.stringMatching(/duplicate.*en/i));
  });

  it('does not require draft questions to be indexed or translated', () => {
    expect(validateBilingualPairs([question('zh-CN', { status: 'draft' })])).toEqual([]);
  });

  it('requires published related questions to exist in the same language', () => {
    expect(validateQuestionRelationships([
      question('zh-CN', { relatedQuestions: [{ questionId: 'related-prompt', relation: 'related', contrast: 'different focus' }] }),
      question('zh-CN', { questionId: 'related-prompt', relatedQuestions: [] }),
    ])).toEqual([]);
    expect(validateQuestionRelationships([
      question('en', { relatedQuestions: [{ questionId: 'missing-prompt', relation: 'related', contrast: 'different focus' }] }),
    ])).toContainEqual(expect.stringMatching(/missing.*related question/i));
  });
});
