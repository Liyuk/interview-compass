import { describe, expect, it } from 'vitest';
import type { QuestionRecord } from '../src/lib/content-model';
import { buildPublicQuestion, buildQuestionIndex } from '../src/lib/question-feed';

const record = (locale: 'zh-CN' | 'en', questionId = 'measure-outcome'): QuestionRecord => ({
  questionId,
  kind: 'question',
  status: 'published',
  locale,
  title: locale === 'en' ? 'Measure an outcome' : '如何衡量结果？',
  question: locale === 'en' ? 'How would you measure the outcome?' : '你会如何衡量结果？',
  intent: locale === 'en' ? 'Measures outcome evidence.' : '考察结果证据。',
  signals: [locale === 'en' ? 'Defines a baseline' : '说明基线'],
  primaryCapability: 'value-judgment.business-outcomes',
  topics: [], roles: [], responsibilityScopes: [], careerTracks: [], scenarios: [], formats: [],
  source: [{ attribution: 'original' }],
});

describe('buildQuestionFeed', () => {
  it('returns a compact entry for each published stable ID in the requested locale', () => {
    const index = buildQuestionIndex([record('zh-CN'), record('en'), record('zh-CN', 'second-question')], 'zh-CN');

    expect(index).toHaveLength(2);
    expect(index.map((item) => item.questionId)).toEqual(['measure-outcome', 'second-question']);
    expect(index[0]).toMatchObject({ question: '你会如何衡量结果？', primaryCapability: 'value-judgment.business-outcomes', profiles: [] });
    expect(index[0]).not.toHaveProperty('title');
    expect(index[0]).not.toHaveProperty('locale');
    expect(index[0]).not.toHaveProperty('evaluation');
  });

  it('returns one public question with transparent shared anchors and no practice state', () => {
    const practiceAnswer = 'private practice answer sentinel';
    const serialized = JSON.stringify(buildPublicQuestion(record('en')));
    const question = JSON.parse(serialized);

    expect(serialized).not.toContain(practiceAnswer);
    expect(serialized).not.toContain('practiceAnswer');
    expect(serialized).not.toContain('localStorage');
    expect(serialized).not.toContain('practiceHistory');
    expect(question.evaluation.levels.map((level: { score: number }) => level.score)).toEqual([1, 2, 3, 4]);
    expect(question.evaluation.specific).toBe(false);
    expect(question.evaluation.reviewLabel).toContain('question-specific review pending');
    expect(question.evaluation.levels[1].reference).not.toContain('Defines a baseline');
  });

  it('includes the same edited analysis in the public feed for a reviewed question', () => {
    const question = buildPublicQuestion(record('en', 'c-metrics-causality-competitor-benchmark'));
    expect(question.evaluation.specific).toBe(true);
    expect(question.evaluation.comparisons[0].dimension).toBe('Measurement basis');
  });
});
