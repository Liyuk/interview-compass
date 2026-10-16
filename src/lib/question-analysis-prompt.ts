import type { QuestionRecord } from './content-model';
import type { Locale } from './taxonomy';
import { questionStageGuidance, stageGuidancePrompt } from './question-stage-guidance';

type Evaluation = ReturnType<typeof import('./question-evaluation').questionEvaluation>;

export function buildQuestionAnalysisPrompt({ locale, question, evaluation, target }: {
  locale: Locale;
  question: QuestionRecord;
  evaluation: Evaluation;
  target?: { roleId: string; stageId: string };
}) {
  const en = locale === 'en';
  const lines = en ? [
    '# Interview Compass response analysis',
    'Analyze the candidate response using only evidence provided. Do not invent facts.',
    '',
    '## Question and review status',
    `Question: ${question.question}`,
    `Analysis review status: ${evaluation.reviewLabel}. ${evaluation.reviewNote}`,
    `Objective problem: ${evaluation.objective}`,
    `Assessment intent: ${evaluation.intent}`,
    `Possible inference (a hypothesis to verify): ${evaluation.inference}`,
    '',
    '## Evidence framework',
    'Observable signals:',
    ...question.signals.map((item) => `- ${item}`),
    'Context worth asking for:',
    ...evaluation.contextQuestions.map((item) => `- ${item}`),
    'Comparison dimensions:',
    ...evaluation.comparisons.map((item) => `- ${item.dimension}: ${item.guidance}`),
    `Decision after context: ${evaluation.decision}`,
    'Benefits to examine:',
    ...evaluation.benefits.map((item) => `- ${item}`),
    'Costs and risks to examine:',
    ...evaluation.costs.map((item) => `- ${item}`),
    '',
    '## 1–4 evidence anchors',
    ...evaluation.levels.map((item) => `- ${item.label}: ${item.meaning} Question-specific reference: ${item.reference}`),
    '',
    '## Analysis instructions',
    '1. Separate explicit evidence, missing context, and hypotheses. Cite exact words or facts from the response.',
    '2. List the most important follow-up questions first. If there is not enough evidence, state “insufficient evidence; do not score.”',
    '3. Assess each relevant signal against the 1–4 anchors only when supported; explain evidence and uncertainty.',
    '4. Discuss comparison choices, causal reasoning, trade-offs, and the candidate’s actual participation where relevant. Identify strengths, unsupported conclusions, and one concrete next practice.',
    '5. Do not provide a sample answer, rewrite the response as a script, diagnose personality, infer dishonesty from inconsistency alone, combine scores into an overall score, or recommend hiring/rejection.',
    '',
    'If the response is not provided, ask the candidate to paste their response first; do not analyze or score the question alone.',
    'Do not write a sample answer.',
  ] : [
    '# Interview Compass 回答分析',
    '请只依据用户提供的证据分析回答，不得编造事实。',
    '',
    '## 题目与背景',
    `题目：${question.question}`,
    `分析复核状态：${evaluation.reviewLabel}。${evaluation.reviewNote}`,
    `客观问题：${evaluation.objective}`,
    `考察意图：${evaluation.intent}`,
    `可能的推论（需要核实的假设）：${evaluation.inference}`,
    '',
    '## 证据框架',
    '观察信号：',
    ...question.signals.map((item) => `- ${item}`),
    '值得补充询问的上下文：',
    ...evaluation.contextQuestions.map((item) => `- ${item}`),
    '比较维度：',
    ...(evaluation.comparisons.length ? evaluation.comparisons.map((item) => `- ${item.dimension}：${item.guidance}`) : ['- 结合目标、基线和约束，比较可行方案、替代方案及不做的代价；明确比较口径和差异。']),
    `基于上下文的决策：${evaluation.decision}`,
    '需要分析的收益：',
    ...evaluation.benefits.map((item) => `- ${item}`),
    '需要分析的成本与风险：',
    ...evaluation.costs.map((item) => `- ${item}`),
    '',
    '## 1–4 分证据锚点',
    ...evaluation.levels.map((item) => `- ${item.label}：${item.meaning} 本题参考：${item.reference}`),
    '',
    '## 分析要求',
    '1. 区分回答明确表达的证据、缺失的上下文和待验证假设；尽量引用回答中的具体事实或原句。',
    '2. 先列出最值得追问的问题。证据不足时明确写“证据不足，暂不评分”，不要强行判断。',
    '3. 按相关观察信号分别参照 1–4 分锚点；只有回答提供了足够依据才给分，并说明证据和不确定性。',
    '4. 结合题目分析多种方案的比较、因果推理、利弊取舍和回答者实际参与；指出优势、缺少依据的结论，以及一个具体的下一步练习建议。',
    '5. 不提供示范答案，不把回答改写成背诵稿，不做人格诊断，不凭前后不一致推断造假，不合并成整体分数，也不提出录用或淘汰建议。',
    '',
    '回答尚未提供时，请先请候选人粘贴回答；不要仅凭题目分析或评分。',
    '不要编写示范答案。',
  ];
  const prompt = lines.join('\n');
  return target ? `${prompt}\n\n${stageGuidancePrompt(questionStageGuidance(question, target.roleId, target.stageId, locale), locale)}` : prompt;
}
