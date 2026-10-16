import type { QuestionRecord } from './content-model';
import type { questionEvaluation } from './question-evaluation';
import type { Locale } from './taxonomy';
import type { SelfCheckValue } from './practice-guide';

type QuestionEvaluation = ReturnType<typeof questionEvaluation>;

export type PracticePromptInput = {
  locale: Locale;
  question: Omit<QuestionRecord, 'status'>;
  evaluation: QuestionEvaluation;
  answer: string;
  understanding?: string;
  selfAssessment?: readonly SelfCheckValue[];
  role?: string;
  stage?: string;
  goal?: string;
};

function optionalContext(label: string, value: string | undefined) {
  return value?.trim() ? `- ${label}: ${value.trim()}` : undefined;
}

export function buildPracticePrompt(input: PracticePromptInput): string {
  const { locale, question, evaluation } = input;
  const en = locale === 'en';
  const context = [
    optionalContext(en ? 'Target role' : '目标岗位', input.role),
    optionalContext(en ? 'Target stage' : '目标阶段', input.stage),
    optionalContext(en ? 'Practice goal' : '训练目标', input.goal),
  ].filter(Boolean);
  const selfAssessment = question.signals.map((signal, index) => {
    const status = input.selfAssessment?.[index] ?? 'unreviewed';
    const label = en
      ? status === 'supported' ? 'Evidence identified' : status === 'missing' ? 'Needs more evidence' : 'Not reviewed'
      : status === 'supported' ? '有具体事实' : status === 'missing' ? '还需补充' : '尚未自查';
    return `- ${signal} — ${en ? 'Self-check' : '自查'}: ${label}`;
  });

  if (en) {
    return [
      '# Interview Compass answer analysis',
      'Analyze the answer using the evidence framework below. Do not invent missing facts.',
      '',
      '## Question and context',
      `Question: ${question.question}`,
      `Objective problem: ${evaluation.objective}`,
      `Analysis review status: ${evaluation.reviewLabel}. ${evaluation.reviewNote}`,
      `Assessment intent: ${evaluation.intent}`,
      `Possible inference (a hypothesis to verify): ${evaluation.inference}`,
      ...(context.length ? ['Context:', ...context] : []),
      ...(input.understanding?.trim() ? [`Trainee’s understanding: ${input.understanding.trim()}`] : []),
      '',
      '## Evidence framework',
      `Observable signals: ${question.signals.map((signal) => `- ${signal}`).join('\n')}`,
      `Trainee self-check (a reflection, not a score):\n${selfAssessment.join('\n')}`,
      `Useful follow-ups: ${evaluation.contextQuestions.map((item) => `- ${item}`).join('\n')}`,
      ...(evaluation.comparisons.length ? [`Comparison dimensions:\n${evaluation.comparisons.map((item) => `- ${item.dimension}: ${item.guidance}`).join('\n')}`] : []),
      `Decision considerations: ${evaluation.decision}`,
      `Benefits to examine: ${evaluation.benefits.map((item) => `- ${item}`).join('\n')}`,
      `Costs and risks to examine: ${evaluation.costs.map((item) => `- ${item}`).join('\n')}`,
      '',
      '## 1–4 evidence anchors',
      ...evaluation.levels.map((level) => `- ${level.label}: ${level.meaning} Question-specific anchor: ${level.reference}`),
      '',
      '## Candidate response',
      input.answer,
      '',
      '## Required analysis',
      '1. Separate explicit evidence, missing context, and hypotheses. Refer to exact phrases or facts in the response.',
      '2. List the most useful follow-up questions first. If evidence is insufficient, say “not enough evidence yet” and do not force a score.',
      '3. Assess each observable signal separately against the 1–4 anchors. Give a score only when the response supports it, and explain the evidence and uncertainty.',
      '4. Explain strengths, trade-offs, unsupported claims, and one concrete next-practice step.',
      '5. Do not provide a model answer, rewrite the response into a script, diagnose personality, infer dishonesty from inconsistency, combine scores into an overall candidate score, or recommend hire/no-hire.',
    ].join('\n');
  }

  return [
    '# Interview Compass 回答分析',
    '请按以下证据框架分析回答，不得编造未提供的事实。',
    '',
    '## 题目与背景',
    `题目：${question.question}`,
    `客观问题：${evaluation.objective}`,
    `分析复核状态：${evaluation.reviewLabel}。${evaluation.reviewNote}`,
    `考察意图：${evaluation.intent}`,
    `可能的推论（需要核实的假设）：${evaluation.inference}`,
    ...(context.length ? ['补充背景：', ...context] : []),
    ...(input.understanding?.trim() ? [`练习者对题意的复述：${input.understanding.trim()}`] : []),
    '',
    '## 证据框架',
    `观察信号：\n${question.signals.map((signal) => `- ${signal}`).join('\n')}`,
    `练习者自查（仅供复盘，不是评分）：\n${selfAssessment.join('\n')}`,
    `值得追问的上下文：\n${evaluation.contextQuestions.map((item) => `- ${item}`).join('\n')}`,
    ...(evaluation.comparisons.length ? [`比较维度：\n${evaluation.comparisons.map((item) => `- ${item.dimension}：${item.guidance}`).join('\n')}`] : []),
    `决策考察：${evaluation.decision}`,
    `需要分析的收益：\n${evaluation.benefits.map((item) => `- ${item}`).join('\n')}`,
    `需要分析的成本与风险：\n${evaluation.costs.map((item) => `- ${item}`).join('\n')}`,
    '',
    '## 1–4 分证据锚点',
    ...evaluation.levels.map((level) => `- ${level.label}：${level.meaning} 本题参考：${level.reference}`),
    '',
    '## 候选人回答',
    input.answer,
    '',
    '## 分析要求',
    '1. 区分回答明确表达的证据、缺失的上下文和待验证假设；尽量引用回答中的具体事实或原句。',
    '2. 先列出最值得追问的问题。证据不足时明确写“证据不足，暂不评分”，不要强行判断。',
    '3. 按观察信号分别参照 1–4 分锚点；只有回答提供了足够依据才给分，并说明证据和不确定性。',
    '4. 指出回答的优势、取舍、缺少依据的结论，以及一个具体的下一步练习建议。',
    '5. 不提供示范答案，不把回答改写成背诵稿，不做人格诊断，不凭前后不一致推断造假，不合并成候选人总分，也不提出录用或淘汰建议。',
  ].join('\n');
}
