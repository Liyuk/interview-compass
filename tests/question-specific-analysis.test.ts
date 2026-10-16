import { describe, expect, it } from 'vitest';
import analyses from '../src/data/question-specific-analyses.json';
import { questionSpecificAnalysisSchema } from '../src/lib/content-model';

describe('question-specific analysis records', () => {
  it('requires a reviewed objective, alternative interpretation, comparisons, trade-offs, and four anchors', () => {
    const record = {
      questionId: 'example-question', locale: 'en', reviewStatus: 'reviewed',
      objectiveProblem: 'Which action is safe when the operation result is unknown?',
      inference: { hypothesis: 'The person considers uncertainty before retrying.', alternatives: ['The person may have observed a similar case but not owned the decision.'] },
      contextQuestions: ['Could the operation status be queried?'],
      comparisons: [{ dimension: 'Retry', guidance: 'Compare retrying with pausing for status reconciliation.' }],
      decisionRule: 'Repeat only after establishing that the original action did not take effect.',
      benefits: ['Avoids an unintended duplicate action.'], costs: ['Pausing may delay a valid request.'],
      highlightEvidence: ['A verified reduction in duplicate operations.'],
      anchors: { notPassing: 'Cannot explain the state uncertainty.', passing: 'Explains a safe basic recovery.', excellent: 'Compares recovery paths with evidence.', exceptional: 'Shows verifiable impact across the relevant system scope.' },
    };
    expect(questionSpecificAnalysisSchema.parse(record)).toMatchObject({ reviewStatus: 'reviewed', questionId: 'example-question' });
    expect(() => questionSpecificAnalysisSchema.parse({ ...record, inference: { ...record.inference, alternatives: [] } })).toThrow();
    expect(() => questionSpecificAnalysisSchema.parse({ ...record, anchors: { notPassing: '', passing: 'x', excellent: 'x', exceptional: 'x' } })).toThrow();
  });

  it('provides paired, reviewed analyses for the twelve editorial pilot questions', () => {
    const parsed = analyses.map((entry) => questionSpecificAnalysisSchema.parse(entry));
    const pairs = new Map<string, Set<string>>();
    for (const analysis of parsed) pairs.set(analysis.questionId, new Set([...(pairs.get(analysis.questionId) ?? []), analysis.locale]));
    expect(pairs.size).toBe(12);
    for (const [id, locales] of pairs) expect([...locales].sort(), id).toEqual(['en', 'zh-CN']);
    expect(parsed).toHaveLength(24);
  });
});
