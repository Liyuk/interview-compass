import { describe, expect, it } from 'vitest';
import type { QuestionRecord } from '../src/lib/content-model';
import { questionEvaluation } from '../src/lib/question-evaluation';
import { buildPracticePrompt } from '../src/lib/practice-prompt';

const question: QuestionRecord = {
  questionId: 'tradeoff-service-reliability',
  kind: 'question',
  status: 'published',
  locale: 'zh-CN',
  title: '如何在交付速度与可靠性之间取舍？',
  question: '一次重要发布中，团队同时面临交付压力和可靠性风险，你会如何做决定？',
  intent: '考察能否识别目标冲突、明确风险承担者并设计验证方式。',
  signals: ['明确目标和风险阈值', '说明本人决策与验证证据'],
  primaryCapability: 'value-judgment.prioritization',
  topics: ['reliability'],
  roles: ['engineering'],
  responsibilityScopes: ['team'],
  careerTracks: ['individual-contributor'],
  scenarios: ['interview'],
  formats: ['behavioral'],
  followUps: ['当时有哪些可以回退的方案？'],
  source: [{ attribution: 'original' }],
};

describe('buildPracticePrompt', () => {
  const evaluation = questionEvaluation(question);

  it('includes the question framework, 1–4 anchors, and instructions to separate evidence from hypotheses', () => {
    const prompt = buildPracticePrompt({
      locale: 'zh-CN', question, evaluation,
      answer: '我先核对了发布窗口和故障回退方案。',
      understanding: '这题要我解释怎么在交付和可靠性之间作判断。',
      selfAssessment: ['supported', 'missing'],
      role: '高级工程师', stage: '资深', goal: '练习说明风险取舍',
    });

    expect(prompt).toContain(question.question);
    expect(prompt).toContain(question.intent);
    expect(prompt).toContain('明确目标和风险阈值');
    expect(prompt).toContain('1 · 不通过');
    expect(prompt).toContain('4 · 卓越');
    expect(prompt).toContain('区分回答明确表达的证据');
    expect(prompt).toContain('缺失的上下文');
    expect(prompt).toContain('不凭前后不一致推断造假');
    expect(prompt).toContain('不提供示范答案');
    expect(prompt).toContain('高级工程师');
    expect(prompt).toContain('资深');
    expect(prompt).toContain('我先核对了发布窗口和故障回退方案。');
    expect(prompt).toContain('这题要我解释怎么在交付和可靠性之间作判断。');
    expect(prompt).toContain('— 自查: 有具体事实');
    expect(prompt).toContain('— 自查: 还需补充');
  });

  it('omits blank optional context and preserves multilingual answer text without trimming', () => {
    const answer = '  先观察线上错误率，再回滚。\nI asked the team to verify the baseline.  ';
    const prompt = buildPracticePrompt({ locale: 'zh-CN', question, evaluation, answer, role: '  ', stage: '', goal: undefined });

    expect(prompt).toContain(answer);
    expect(prompt).not.toContain('岗位：');
    expect(prompt).not.toContain('阶段：');
    expect(prompt).not.toContain('训练目标：');
  });

  it('uses the selected question locale for the analysis instructions', () => {
    const englishQuestion = { ...question, locale: 'en' as const, question: 'How would you balance delivery speed and reliability?' };
    const prompt = buildPracticePrompt({
      locale: 'en', question: englishQuestion,
      evaluation: questionEvaluation(englishQuestion), answer: 'I checked rollback readiness.',
    });

    expect(prompt).toContain('How would you balance delivery speed and reliability?');
    expect(prompt).toContain('Separate explicit evidence');
    expect(prompt).toContain('Do not provide a model answer');
  });
});
