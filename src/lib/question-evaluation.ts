import analyses from '../data/question-specific-analyses.json';
import { questionSpecificAnalysisSchema, type QuestionSpecificAnalysis } from './content-model';
import type { Locale } from './taxonomy';

export type EvaluationInput = {
  questionId: string;
  locale: Locale;
  question: string;
  intent: string;
  primaryCapability: string;
  signals: string[];
  followUps?: string[];
};

export type EvaluationLevel = { score: 1 | 2 | 3 | 4; id: string; label: string; meaning: string; reference: string };

const analysisByKey = new Map<string, QuestionSpecificAnalysis>(
  analyses.map((entry) => {
    const parsed = questionSpecificAnalysisSchema.parse(entry);
    return [`${parsed.questionId}:${parsed.locale}`, parsed];
  }),
);

export function getQuestionSpecificAnalysis(questionId: string, locale: Locale) {
  return analysisByKey.get(`${questionId}:${locale}`);
}

export function questionEvaluation(record: EvaluationInput) {
  const en = record.locale === 'en';
  const specific = getQuestionSpecificAnalysis(record.questionId, record.locale);
  const levels: EvaluationLevel[] = en ? [
    { score: 1, id: 'not-pass', label: '1 · Not passing', meaning: 'Core concepts or basic facts are unclear; the reasoning or account of events cannot be followed. For experience questions, the person cannot distinguish their own actions and responsibility. Confirmed deliberate fabrication is not passing; inconsistency or missing detail alone is a reason to verify, not proof of dishonesty.', reference: specific?.anchors.notPassing ?? 'Cannot explain the question’s relevant concepts, facts, or reasoning in a way that can be checked.' },
    { score: 2, id: 'pass', label: '2 · Passing', meaning: 'Explains the basic concepts and approach clearly and gives credible evidence of having done the work or being able to reason through it.', reference: specific?.anchors.passing ?? 'Explains a reasonable basic approach and supports it with relevant experience or a coherent, checkable line of reasoning.' },
    { score: 3, id: 'excellent', label: '3 · Excellent', meaning: 'Gives a structured account, reflects clearly on what worked and what did not, weighs benefits against costs or risks, and offers an insight or practice above the ordinary expectation for the role and level.', reference: specific?.anchors.excellent ?? 'Shows structured reasoning, relevant comparisons, trade-offs, and a useful insight above the usual expectation for the role and scope.' },
    { score: 4, id: 'exceptional', label: '4 · Exceptional', meaning: 'Shows an outcome or practice at an exceptional, field-leading level for the relevant scope. The impact is measurable, independently supportable, and credibly attributable to the person’s decisions and work.', reference: specific?.anchors.exceptional ?? 'Provides independently checkable evidence of exceptional impact for the relevant scope and explains contribution, attribution limits, and conditions.' },
  ] : [
    { score: 1, id: 'not-pass', label: '1 · 不通过', meaning: '核心概念或基本事实讲不清，推理或经历叙述无法理解；经历题说不清自己的行动和责任。经核实的故意造假属于不通过；前后不一致或细节不足本身只说明需要核验，不能直接当作造假。', reference: specific?.anchors.notPassing ?? '无法讲清本题相关概念、事实或推理过程，也无法提供可核验的依据。' },
    { score: 2, id: 'pass', label: '2 · 通过', meaning: '能讲清基本概念和思路，并提供可信证据，说明自己做过这件事，或能据此完成合理推演。', reference: specific?.anchors.passing ?? '能说明合理的基本思路，并以相关经历或连贯、可核验的推理支持判断。' },
    { score: 3, id: 'excellent', label: '3 · 优秀', meaning: '能结构化地讲述和复盘，说明做得好与不好的部分，权衡收益、成本或风险，并给出高于该岗位和级别常见要求的实践亮点或经验洞见。', reference: specific?.anchors.excellent ?? '展现结构化推理、与题目相关的比较和取舍，并提出高于岗位与责任范围常见要求的洞见。' },
    { score: 4, id: 'exceptional', label: '4 · 卓越', meaning: '在相应岗位、级别和责任范围内达到行业领先的结果或实践；影响可度量、可核验，并能合理归因于候选人的判断与行动。', reference: specific?.anchors.exceptional ?? '提供在相应责任范围内达到卓越影响的可核验证据，并说明个人贡献、归因边界和成立条件。' },
  ];

  return {
    specific: Boolean(specific),
    reviewLabel: en
      ? (specific ? 'Question-specific analysis · reviewed' : 'Shared reading guide · question-specific review pending')
      : (specific ? '逐题分析 · 已复核' : '共用阅读框架 · 逐题分析待校准'),
    reviewNote: en
      ? (specific ? 'This question has an edited analysis. Use it as a prompt for evidence, not as an automatic score.' : 'The sections below are shared prompts, not verified conclusions about this question. Restate the concrete problem and check which prompts actually apply; do not infer a candidate trait from this guide.')
      : (specific ? '本题已有编辑复核的专属分析；它用于引导取证，不会自动给出分数。' : '以下是通用追问提示，不代表已经核实本题的专属结论。请先用自己的话明确本题要解决的问题，再判断哪些提示适用；不能据此推断候选人的特质。'),
    title: en ? 'Assessment guide' : '评估参考',
    note: en
      ? 'Use these as evidence anchors for this capability, not as an automatic score or an overall judgment of a person. Calibrate expectations to the role, level, and scope. A score of 2 is the usual baseline; excellent evidence in one or two dimensions is meaningful, while exceptional evidence is rare.'
      : '这是单题证据参考，不是自动打分，也不构成对一个人的整体结论。请按岗位、阶段和责任范围校准要求。通常以 2 分“通过”为基线；一两个维度达到 3 分“优秀”就有价值，4 分“卓越”应当少见。',
    objectiveTitle: en ? 'Objective problem to resolve or clarify' : '需要解决或厘清的客观问题',
    objective: specific?.objectiveProblem ?? (en ? 'Question-specific objective analysis has not been reviewed yet. First restate the decision, uncertainty, or task that this prompt asks you to resolve.' : '本题的专属客观问题尚未复核。请先用自己的话说明题目要求解决的决定、不确定性或具体任务。'),
    intentTitle: en ? 'What it examines' : '考察意图',
    intent: record.intent,
    inferenceTitle: en ? 'What else the answer may imply' : '回答还可能说明什么',
    inference: specific
      ? `${specific.inference.hypothesis} ${en ? 'Alternative interpretations to check:' : '还需核实的其他解释：'} ${specific.inference.alternatives.join(en ? ' ' : '；')}`
      : (en ? 'No question-specific inference has been reviewed. Treat the stated intent as a hypothesis, and check alternative explanations against the person’s role, opportunity, responsibility, and evidence.' : '本题尚无经过复核的专属推论。把考察意图当作待验证假设，结合角色、机会、责任边界和事实核查其他解释。'),
    comparisonsTitle: en ? 'Comparisons to consider' : '可以比较的思路',
    comparisons: specific?.comparisons ?? [],
    contextTitle: en ? 'Context worth asking for' : '值得补充询问的上下文',
    contextQuestions: en ? [
      ...(specific?.contextQuestions ?? []), ...(record.followUps ?? []),
      'What goal, baseline, constraints, and responsibility boundary applied?',
      'What options were available, and what evidence or dependencies shaped the choice?',
      'Who was affected, what changed, and over what time window?',
      'How was the result verified, and what alternative explanation or downside was considered?',
    ] : [
      ...(specific?.contextQuestions ?? []), ...(record.followUps ?? []),
      '当时的目标、基线、约束和责任边界是什么？',
      '有哪些可选方案？什么证据或依赖影响了选择？',
      '影响了谁，发生了什么变化，观察窗口有多长？',
      '结果如何验证？考虑过哪些其他解释或负面影响？',
    ],
    decisionTitle: en ? 'Decision after context' : '基于上下文的决策',
    decision: specific?.decisionRule ?? (en ? 'After establishing context, compare plausible options against the stated goal and constraints. Make the decision rule explicit, note uncertainty and reversible steps, and say what evidence would change the choice.' : '补足上下文后，比较符合题意的多种方案与目标、约束。说清决策口径、不确定性和可逆步骤，并说明什么证据会改变选择。'),
    benefitsTitle: en ? 'Benefits created' : '方案收益',
    benefits: specific?.benefits ?? (en ? ['Which part of the stated objective does each option address, and who benefits?', 'What observable outcome, baseline, and time window would show improvement?'] : ['不同方案分别解决了目标中的哪一部分，谁会因此受益？', '用什么可观察结果、基线和时间窗口判断是否有所改善？']),
    costsTitle: en ? 'Costs and risks' : '方案成本与风险',
    costs: specific?.costs ?? (en ? ['What direct, ongoing, and opportunity costs would each option introduce, and who carries them?', 'What could fail, become harder to change, or affect other people; what evidence would justify the risk?'] : ['不同方案会产生哪些直接成本、持续成本和机会成本，分别由谁承担？', '可能出现什么失败、调整困难或对他人的影响？什么证据足以支持接受这些风险？']),
    highlightEvidence: specific?.highlightEvidence ?? [],
    levels,
  };
}
