import { describe, expect, it } from 'vitest';
import { questionSchema, type QuestionRecord } from '../src/lib/content-model';
import { questionQualityWarnings } from '../src/lib/question-quality';

const record = (questionId: string, overrides: Partial<QuestionRecord> = {}): QuestionRecord => ({
  questionId,
  kind: 'question',
  status: 'published',
  locale: 'zh-CN',
  perspective: 'candidate',
  perspectiveReview: 'inferred',
  qualityTier: 'extended',
  title: '题目',
  question: '你会怎么做？',
  intent: '判断回答者能否说明目标和证据。',
  signals: ['说明目标'],
  primaryCapability: 'value-direction.prioritization',
  topics: [], roles: [], responsibilityScopes: [], careerTracks: [], scenarios: [], formats: [],
  source: [{ attribution: 'original' }],
  ...overrides,
});

describe('questionQualityWarnings', () => {
  it('keeps an extended editorial defect as a warning while schema errors stay blocking', () => {
    const extended = record('extended-without-followups', { followUps: undefined });
    expect(questionSchema.safeParse(extended).success).toBe(true);
    expect(questionQualityWarnings([extended])).toContainEqual(expect.objectContaining({ code: 'missing-followups' }));
    expect(questionSchema.safeParse({ ...extended, perspective: 'reviewer' }).success).toBe(false);
  });

  it('warns on missing and merged follow-ups and short intents without making extended records invalid', () => {
    const warnings = questionQualityWarnings([
      record('missing-followups', { followUps: undefined }),
      record('merged-followup', { followUps: ['【旧题标题】旧题全文'] }),
      record('short-intent', { locale: 'en', intent: 'Tests judgment.' }),
    ]);

    expect(warnings).toContainEqual(expect.objectContaining({ questionId: 'missing-followups', code: 'missing-followups' }));
    expect(warnings).toContainEqual(expect.objectContaining({ questionId: 'merged-followup', code: 'merged-followup-residue' }));
    expect(warnings).toContainEqual(expect.objectContaining({ questionId: 'short-intent', code: 'short-intent' }));
  });

  it('warns when the same intent is repeated across several question IDs', () => {
    const warnings = questionQualityWarnings([
      record('template-one'),
      record('template-two'),
      record('template-three'),
    ]);

    expect(warnings).toContainEqual(expect.objectContaining({ questionId: 'template-one', code: 'repeated-intent', message: expect.stringMatching(/same intent appears on 3 question IDs/i) }));
    expect(warnings).toContainEqual(expect.objectContaining({ questionId: 'template-three', code: 'repeated-intent', message: expect.stringMatching(/same intent appears on 3 question IDs/i) }));
  });
});
