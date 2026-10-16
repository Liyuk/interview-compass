import { getRoleStage, tierFrames } from './role-stage-model';
import { getRoleResponsibilityAnchor } from './role-stage-expectations';
import type { QuestionRecord } from './content-model';
import { capabilityLabel, facetLabel, type Locale } from './taxonomy';

export type StageQuestion = Pick<QuestionRecord, 'questionId' | 'primaryCapability' | 'roles' | 'signals' | 'formats'>;

export function questionStageGuidance(question: StageQuestion, roleId: string, stageId: string, locale: Locale) {
  if (!question.roles.includes(roleId)) throw new Error(`Role ${roleId} is not listed for question ${question.questionId}`);
  const stage = getRoleStage(roleId, stageId, locale);
  const frame = tierFrames[stage.tier];
  const en = locale === 'en';
  const local = (text: { zh: string; en: string }) => en ? text.en : text.zh;
  const formats = question.formats ?? [];
  const behavioral = formats.includes('behavioral') || formats.includes('artifact-review');
  const knowledge = formats.length === 1 && formats[0] === 'knowledge';
  const domain = question.primaryCapability.split('.')[0];
  const domainAnchor = getRoleResponsibilityAnchor(roleId, stageId, domain, locale);
  const answerMode = knowledge
    ? (en ? 'Knowledge question: verify concepts, assumptions, counterexamples, and reasoning. Do not require project outcomes or direct reports as proof of a correct explanation.' : '知识解释题：核验概念、前提、反例和推理；不能把项目结果或直属人数当作解释正确的必要证据。')
    : behavioral
      ? (en ? 'Use a real experience or artifact. Separate personal actions, collaborators, outcomes, and uncertainty. For mixed formats, first establish whether the response is experience or hypothetical reasoning.' : '使用真实经历或产物，分清本人行动、协作者、结果与未知。若题目同时含案例题型，先确认回答是在讲亲历还是推演。')
      : (en ? 'Hypothetical reasoning is valid: state assumptions, options, trade-offs, and a validation plan. Do not invent past actions or achieved outcomes. A validation plan is not evidence that results occurred.' : '允许基于明确假设进行推演，说明选项、取舍和验证计划；不得编造亲历行动或已经取得的结果。验证计划不能当作结果已经发生的证据。');
  return {
    roleId, stageId, stageName: stage.name, roleName: facetLabel('roles', roleId, locale), tier: stage.tier,
    reviewNote: en ? 'This is a rule-based reading framework combining the role stage, primary capability, and question signals. It is not a separately reviewed stage-specific answer or applicability verdict.' : '这是结合岗位阶段、主要能力与本题信号生成的阅读框架，不是逐题复核的分阶段答案，也不代表本题已被审核为适用于所有这些阶段。',
    focus: capabilityLabel(question.primaryCapability, locale),
    scope: local(frame.scope),
    process: local(frame.compare),
    result: knowledge
      ? (en ? 'Verify the explanation with definitions, examples, counterexamples, and boundary cases. Depth and transfer should match the target responsibility; project outcomes are not required for this knowledge explanation.' : '用定义、例子、反例和边界情况核验解释，深度及迁移范围与目标责任相称；本知识解释不要求项目业绩结果。')
      : local(frame.verify),
    boundary: local(frame.boundary),
    attribution: en ? 'Ask what the person actually decided, implemented, reviewed, or delegated. Inspect role-relevant artifacts and alternative explanations; do not infer hands-on work from fluent terminology or a large team result.' : '追问本人具体决定、实现、评审或授权了什么，用岗位产物和其他解释核验；不能凭术语熟练或团队大结果推定本人实际参与。',
    evidence: [{ text: domainAnchor.behavior, evidence: domainAnchor.evidence }],
    professionalEvidence: stage.professionalEvidence,
    signals: question.signals,
    answerMode,
    scoreNote: en ? 'Score the response within the target role and stage, not the stage itself. Entry-level responses can be excellent; senior titles and large projects do not raise scores automatically. Insufficient evidence means do not score.' : '在目标岗位和阶段内评价回答，不给阶段本身打分。初级岗位也可以优秀；高级头衔和大项目不会自动加分。证据不足时暂不评分。',
    scoreAnchors: [
      { score: 1, text: en ? 'Not passing: with adequate evidence, basic concepts or reasoning required for this responsibility are incorrect or incoherent. Missing opportunities or detail alone do not prove failure or dishonesty.' : '不通过：在证据充分时，仍不能解释本责任所需的基础概念或连贯推理。没有展示机会或细节不足本身不能证明不通过或造假。' },
      { score: 2, text: en ? 'Passing: explains the basic approach, authority boundaries, and validation expected at this stage, using credible experience or a coherent hypothetical analysis appropriate to the question.' : '通过：讲清本阶段所需的基本思路、权限边界和验证方式，以可信经历或符合题型的合理推演支撑。' },
      { score: 3, text: en ? 'Excellent: offers structured comparison and review, counterevidence, and a transferable insight beyond routine expectations at this stage; shows where the insight applies and fails.' : '优秀：在本阶段常见要求之外，给出结构化比较、复盘、反证和可迁移洞见，并解释洞见的适用与失效条件。' },
      { score: 4, text: en ? 'Exceptional: verifies leading practice or results within the relevant responsibility, with defensible personal attribution and limits. Hypothetical reasoning alone cannot establish achieved industry-leading outcomes; leave that claim unconfirmed.' : '卓越：在相应责任范围内论证可核验的领先实践或结果，并说明个人归因及条件。仅凭推演不能证明已经取得行业领先结果，缺少结果证据时不确认这项结论。' },
    ],
  };
}

export type QuestionStageGuidance = ReturnType<typeof questionStageGuidance>;

export function stageGuidancePrompt(guidance: QuestionStageGuidance, locale: Locale): string {
  const en = locale === 'en';
  return [
    en ? '## Target role and responsibility stage' : '## 目标岗位与责任阶段',
    `${guidance.roleName} · ${guidance.stageName}`,
    guidance.reviewNote,
    guidance.scoreNote,
    `${en ? 'Responsibility' : '责任'}: ${guidance.scope}`,
    `${en ? 'Judgment' : '判断'}: ${guidance.process}`,
    `${en ? 'Outcomes' : '结果'}: ${guidance.result}`,
    `${en ? 'Boundary' : '边界'}: ${guidance.boundary}`,
    guidance.answerMode, guidance.attribution,
    ...guidance.evidence.map(item => `- ${item.text} ${item.evidence}`),
    ...guidance.professionalEvidence.map(item => `- ${item}`),
    ...guidance.scoreAnchors.map(anchor => `- ${anchor.score}: ${anchor.text}`),
  ].join('\n');
}
