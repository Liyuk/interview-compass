import { describe, expect, it } from 'vitest';
import { buildQuestionAnalysisPrompt } from '../src/lib/question-analysis-prompt';
import { questionEvaluation } from '../src/lib/question-evaluation';
import type { QuestionRecord } from '../src/lib/content-model';

const question: QuestionRecord = {
  questionId: 'a-ai-engineering-agent-duplicate-side-effect',
  kind: 'question',
  status: 'published',
  locale: 'zh-CN',
  title: '不确定操作是否成功时，代理怎样安全重试？',
  question: '一个代理调用退款接口超时后无法确定结果。你会怎样避免重复退款？',
  intent: '考察能否将模型决策与有副作用的操作隔离，并设计安全的恢复方式。',
  signals: ['区分只读与有副作用的工具', '用幂等键或状态查询处理不确定结果'],
  primaryCapability: 'professional.ai-engineering',
  topics: ['ai-engineering'],
  roles: ['ai-engineer'],
  responsibilityScopes: ['system'],
  careerTracks: ['individual-contributor'],
  scenarios: ['interview'],
  formats: ['case'],
  followUps: ['如果合作方不支持幂等请求，你会怎样恢复？'],
  source: [{ attribution: 'original' }],
};

describe('question analysis prompt', () => {
  it('includes the bilingual question framework without an answer, self-check, or local context', () => {
    const prompt = buildQuestionAnalysisPrompt({ locale: 'zh-CN', question, evaluation: questionEvaluation(question) });
    expect(prompt).toContain(question.question);
    expect(prompt).toContain(question.intent);
    expect(prompt).toContain('分析复核状态');
    expect(prompt).toContain('幂等键');
    expect(prompt).toContain('1 · 不通过');
    expect(prompt).toContain('4 · 卓越');
    expect(prompt).toContain('回答尚未提供时');
    expect(prompt).toContain('不要编写示范答案');
    expect(prompt).not.toContain('候选人回答：');
    expect(prompt).not.toContain('自查：');
    expect(prompt).not.toContain('目标岗位：');
  });

  it('asks the external model to request a response before evaluating in English', () => {
    const english: QuestionRecord = { ...question, locale: 'en', question: 'How do you avoid duplicate refunds after an uncertain timeout?', intent: 'Assess whether you isolate model decisions from side effects.', signals: ['Distinguishes read-only tools from side-effecting tools', 'Uses idempotency or status lookup for uncertain outcomes'], followUps: ['If the partner does not support idempotency, how would you recover?'] };
    const prompt = buildQuestionAnalysisPrompt({ locale: 'en', question: english, evaluation: questionEvaluation(english) });
    expect(prompt).toContain(english.question);
    expect(prompt).toContain('Analysis review status');
    expect(prompt).toContain('1 · Not passing');
    expect(prompt).toContain('4 · Exceptional');
    expect(prompt).toContain('If the response is not provided');
    expect(prompt).toContain('Do not write a sample answer');
    expect(prompt).not.toMatch(/[\u3400-\u9fff]/);
  });
});
