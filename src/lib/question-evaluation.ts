import { capabilityLabel, type Locale } from './taxonomy';

export type EvaluationInput = {
  locale: Locale;
  question: string;
  intent: string;
  primaryCapability: string;
  signals: string[];
  followUps?: string[];
};

export type EvaluationLevel = { score: 1 | 2 | 3 | 4; id: string; label: string; meaning: string; reference: string };

export function questionEvaluation(record: EvaluationInput) {
  const en = record.locale === 'en';
  const [firstSignal, secondSignal] = record.signals;
  const capability = capabilityLabel(record.primaryCapability, record.locale);
  const levels: EvaluationLevel[] = en ? [
    {
      score: 1, id: 'not-pass', label: '1 · Not passing',
      meaning: 'Core concepts or basic facts are unclear; the reasoning or account of events cannot be followed. For experience questions, the person cannot distinguish their own actions and responsibility. Confirmed deliberate fabrication is not passing; inconsistency or missing detail alone is a reason to verify, not proof of dishonesty.',
      reference: `For this question, the response cannot explain or support the key signal “${firstSignal}” with a coherent line of reasoning or verifiable facts.`,
    },
    {
      score: 2, id: 'pass', label: '2 · Passing',
      meaning: 'Explains the basic concepts and approach clearly and gives credible evidence of having done the work or being able to reason through it.',
      reference: `At minimum, the response explains “${firstSignal}” and connects it to a concrete action, example, or reasoned step that fits the question.`,
    },
    {
      score: 3, id: 'excellent', label: '3 · Excellent',
      meaning: 'Gives a structured account, reflects clearly on what worked and what did not, weighs benefits against costs or risks, and offers an insight or practice above the ordinary expectation for the role and level.',
      reference: `A strong response connects multiple signals—${[firstSignal, secondSignal].filter(Boolean).map((signal) => `“${signal}”`).join(' and ')}—to context, trade-offs, evidence, and a specific learning or insight.`,
    },
    {
      score: 4, id: 'exceptional', label: '4 · Exceptional',
      meaning: 'Shows an outcome or practice at an exceptional, field-leading level for the relevant scope. The impact is measurable, independently supportable, and credibly attributable to the person’s decisions and work.',
      reference: `For this question, exceptional evidence shows that the person turned “${firstSignal}” into an unusually strong, verifiable result and can explain their own contribution and the conditions that made it possible.`,
    },
  ] : [
    {
      score: 1, id: 'not-pass', label: '1 · 不通过',
      meaning: '核心概念或基本事实讲不清，推理或经历叙述无法理解；经历题说不清自己的行动和责任。经核实的故意造假属于不通过；前后不一致或细节不足本身只说明需要核验，不能直接当作造假。',
      reference: `针对本题，回答无法围绕“${firstSignal}”给出连贯的推理或可核实事实。`,
    },
    {
      score: 2, id: 'pass', label: '2 · 通过',
      meaning: '能讲清基本概念和思路，并提供可信证据，说明自己做过这件事，或能据此完成合理推演。',
      reference: `至少能解释“${firstSignal}”，并把它联系到符合题意的具体行动、实例或推理步骤。`,
    },
    {
      score: 3, id: 'excellent', label: '3 · 优秀',
      meaning: '能结构化地讲述和复盘，说明做得好与不好的部分，权衡收益、成本或风险，并给出高于该岗位和级别常见要求的实践亮点或经验洞见。',
      reference: `较强的回答会把多个信号——${[firstSignal, secondSignal].filter(Boolean).map((signal) => `“${signal}”`).join('、')}——和具体上下文、取舍、证据及明确的经验提炼联系起来。`,
    },
    {
      score: 4, id: 'exceptional', label: '4 · 卓越',
      meaning: '在相应岗位、级别和责任范围内达到行业领先的结果或实践；影响可度量、可核验，并能合理归因于候选人的判断与行动。',
      reference: `针对本题，卓越证据应体现候选人把“${firstSignal}”转化为显著超出常见水平、可验证且可归因的结果，并能说清个人贡献及结果成立的条件。`,
    },
  ];

  return {
    title: en ? 'Assessment guide' : '评估参考',
    note: en
      ? 'Use these as evidence anchors for this capability, not as an automatic score or an overall judgment of a person. Calibrate expectations to the role, level, and scope. A score of 2 is the usual baseline; excellent evidence in one or two dimensions is meaningful, while exceptional evidence is rare.'
      : '这是针对本题能力的证据锚点，不是自动打分，也不构成对一个人的整体结论。请按岗位、级别和责任范围校准要求。通常以 2 分“通过”为基线；一两个维度达到 3 分“优秀”就有价值，4 分“卓越”应当少见。',
    objectiveTitle: en ? 'Objective problem in the scenario' : '题面情境中的客观问题',
    objective: en
      ? `What needs to be resolved in the situation described is: ${record.question}`
      : `题面情境中需要解决的客观问题是：${record.question}`,
    intentTitle: en ? 'What it examines' : '考察意图',
    intent: record.intent,
    inferenceTitle: en ? 'What else the answer may imply' : '回答还可能说明什么',
    inference: en
      ? `Beyond the immediate response, look for evidence about how the person applies ${capability} across situations. Treat this as a hypothesis to verify with context and follow-up, not a conclusion from one answer.`
      : `除了直接回答，还可以观察候选人是否能在不同情境中运用“${capability}”。这只是需要用上下文和追问核实的推论，不能凭单道题下整体结论。`,
    contextTitle: en ? 'Context worth asking for' : '值得补充询问的上下文',
    contextQuestions: en ? [
      'What goal, baseline, constraints, and responsibility boundary applied?',
      'What options were available, and what evidence or dependencies shaped the choice?',
      'Who was affected, what changed, and over what time window?',
      'How was the result verified, and what alternative explanation or downside was considered?',
      ...(record.followUps ?? []),
    ] : [
      '当时的目标、基线、约束和责任边界是什么？',
      '有哪些可选方案？什么证据或依赖影响了选择？',
      '影响了谁，发生了什么变化，观察窗口有多长？',
      '结果如何验证？考虑过哪些其他解释或负面影响？',
      ...(record.followUps ?? []),
    ],
    decisionTitle: en ? 'Decision after context' : '基于上下文的决策',
    decision: en
      ? 'After establishing the context, compare options against the stated goal and constraints. Make the decision rule explicit, identify uncertainty and reversible steps, then state what evidence would confirm or change the decision.'
      : '补足上下文后，再按目标和约束比较选项。说清决策口径、不确定性和可逆步骤，并说明什么证据会验证或改变这个决定。',
    benefitsTitle: en ? 'Benefits created' : '方案收益',
    benefits: en ? [
      'What objective or user need does the option resolve, and for whom?',
      'What measurable outcome, learning, or future flexibility could it create?',
    ] : [
      '这个方案解决了什么客观问题或用户需要，谁会受益？',
      '它可能带来哪些可度量结果、认知增量或后续灵活性？',
    ],
    costsTitle: en ? 'Costs and risks' : '方案成本与风险',
    costs: en ? [
      'What direct, ongoing, and opportunity costs does it introduce, and who carries them?',
      'What could fail or become harder to change, and what evidence would justify accepting that risk?',
    ] : [
      '它会产生哪些直接成本、持续成本和机会成本，分别由谁承担？',
      '哪些事情可能失败或更难改变？什么证据足以支持接受这些风险？',
    ],
    levels,
  };
}
