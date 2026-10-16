import { describe, expect, it } from 'vitest';
import type { QuestionRecord } from '../src/lib/content-model';
import { validateQuestionCollections, type QuestionCollection } from '../src/lib/question-collections';

const question = (locale: 'zh-CN' | 'en', id = 'measure-outcome'): QuestionRecord => ({
  questionId: id,
  kind: 'question',
  status: 'published',
  locale,
  title: 'Measure outcomes',
  question: 'How would you establish and measure the outcome?',
  intent: 'Tests whether outcome evidence is explicit.',
  signals: ['Defines a baseline'],
  primaryCapability: 'value-direction.business-outcomes',
  topics: [], roles: [], responsibilityScopes: [], careerTracks: [], scenarios: [], formats: [],
  source: [{ attribution: 'original' }],
});

const sets: QuestionCollection[] = [
  {
    id: 'general-interview',
    kind: 'question-set',
    title: { zh: '通用面试', en: 'General interview' },
    purpose: { zh: '覆盖常见能力。', en: 'Cover common capabilities.' },
    audience: { zh: '候选人', en: 'Candidates' },
    entries: [{ questionId: 'measure-outcome', rationale: { zh: '用于验证结果。', en: 'Checks outcome evidence.' } }],
  },
  {
    id: 'candidate-due-diligence',
    kind: 'candidate-guide',
    title: { zh: '岗位尽调', en: 'Role due diligence' },
    purpose: { zh: '支持双向选择。', en: 'Support a mutual decision.' },
    audience: { zh: '候选人', en: 'Candidates' },
    sections: [{
      id: 'external-role',
      title: { zh: '外部求职', en: 'External role' },
      prompts: [{
        id: 'success-outcomes',
        question: { zh: '加入后六个月，什么结果说明我做得好？', en: 'What outcomes would show success after six months?' },
        purpose: { zh: '确认成功标准。', en: 'Clarify the success criteria.' },
        decisionUse: { zh: '判断目标是否清楚且可影响。', en: 'Assess whether goals are clear and influenceable.' },
      }],
    }],
  },
];
const generalSet = sets.find((set) => set.kind === 'question-set')!;
const candidateGuide = sets.find((set) => set.kind === 'candidate-guide')!;

describe('validateQuestionCollections', () => {
  it('accepts bilingual question sets and separately modeled candidate guides', () => {
    expect(validateQuestionCollections(sets, [question('zh-CN'), question('en')])).toEqual([]);
  });

  it('rejects duplicate question references and unknown question IDs', () => {
    const invalid = [{
      ...generalSet,
      entries: [
        { questionId: 'measure-outcome', rationale: { zh: '验证结果。', en: 'Check outcomes.' } },
        { questionId: 'measure-outcome', rationale: { zh: '再次验证结果。', en: 'Check outcomes again.' } },
        { questionId: 'missing-question', rationale: { zh: '缺失题目。', en: 'Missing question.' } },
      ],
    }] satisfies QuestionCollection[];

    expect(validateQuestionCollections(invalid, [question('zh-CN'), question('en')])).toEqual([
      'general-interview: duplicate question ID measure-outcome',
      'general-interview: missing zh-CN question missing-question',
      'general-interview: missing en question missing-question',
    ]);
  });

  it('rejects incomplete bilingual copy and empty candidate prompt sections', () => {
    const invalid: QuestionCollection[] = [
      { ...generalSet, purpose: { zh: '', en: 'Purpose' } },
      { ...candidateGuide, sections: [{ id: 'empty', title: { zh: '空', en: 'Empty' }, prompts: [] }] },
    ];
    const errors = validateQuestionCollections(invalid, [question('zh-CN'), question('en')]);

    expect(errors).toContain('general-interview: purpose needs Chinese and English text');
    expect(errors).toContain('candidate-due-diligence/empty: candidate prompt group is empty');
  });
});
