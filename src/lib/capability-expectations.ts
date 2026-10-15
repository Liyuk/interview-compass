import { getStageProfile, stageIds, type StageId } from './capability-model';
import { domains, type Bilingual } from './taxonomy';

// Editorial responsibility-depth anchors. These are ordinal labels, not measured scores.
export const depthAnchors: { percent: number; name: Bilingual; description: Bilingual }[] = [
  { percent: 0, name: { zh: '非通用阶段要求', en: 'Not a general stage expectation' }, description: { zh: '不把这项能力作为该阶段的普遍门槛；岗位需要时仍应按具体责任评估。', en: 'Not a general expectation for this stage; assess it when the role carries this responsibility.' } },
  { percent: 10, name: { zh: '了解边界并参与', en: 'Understand boundaries and participate' }, description: { zh: '能识别相关责任与升级边界，在指导下参与，不独立承担结果。', en: 'Recognizes the responsibility and escalation boundary; participates with guidance without owning the outcome.' } },
  { percent: 25, name: { zh: '在指导下完成限定工作', en: 'Complete bounded work with guidance' }, description: { zh: '能解释基础概念、识别边界，并在指导下完成明确任务。', en: 'Explains fundamentals, recognizes boundaries, and completes defined work with guidance.' } },
  { percent: 50, name: { zh: '独立承担常见责任', en: 'Own routine responsibilities independently' }, description: { zh: '独立处理常见问题，说明取舍并验证结果。', en: 'Handles routine problems independently, explains trade-offs, and verifies results.' } },
  { percent: 75, name: { zh: '承担复杂责任并扩大影响', en: 'Handle complex work and broaden influence' }, description: { zh: '处理模糊或跨团队问题，改善共同实践并帮助他人承担责任。', en: 'Handles ambiguous or cross-team problems, improves shared practices, and enables others to own work.' } },
  { percent: 100, name: { zh: '对组织能力负责', en: 'Own organizational capability' }, description: { zh: '对组织或关键领域能力建设负责，建立校准机制并培养其他负责人。', en: 'Owns capability building for an organization or critical domain, establishes calibration, and develops other owners.' } },
];
const row = (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): Record<string, number> => ({
  professional: a, 'domain-modeling': b, 'value-direction': c, delivery: d,
  collaboration: e, 'people-organization': f, 'learning-adaptation': g, 'work-responsibility': h,
});
export const expectations: Record<StageId, Record<string, number>> = {
  'junior-engineer': row(50, 10, 10, 50, 10, 0, 25, 25),
  'mid-level-engineer': row(50, 25, 25, 75, 25, 10, 50, 50),
  'senior-engineer': row(75, 50, 50, 75, 75, 50, 75, 75),
  'staff-engineer': row(100, 75, 75, 75, 100, 75, 75, 75),
  'engineering-manager': row(50, 50, 75, 75, 75, 100, 50, 75),
  'manager-of-managers': row(25, 75, 100, 75, 100, 100, 75, 100),
};
export const stageDepthNotes: Record<StageId, Bilingual> = {
  'junior-engineer': { zh: '重心是把明确的问题做对、交付并验证；F 不作为通用阶段门槛。诚信、安全和如实汇报始终是底线。', en: 'Focuses on solving, delivering, and verifying clearly scoped work. F is not a general stage requirement. Integrity, safety, and truthful reporting remain baseline obligations.' },
  'mid-level-engineer': { zh: '重心是独立负责模块并稳定交付；F 只要求在岗位适用时参与带教或同伴支持，不承担完整人员管理责任。', en: 'Focuses on independently owning a component and delivering reliably. F means mentoring or peer support when relevant, not full people-management responsibility.' },
  'senior-engineer': { zh: '在复杂交付之外，扩大跨团队沟通、辅导和授权影响；F 可体现为帮助他人独立承担工作，不预设绩效管理权限。', en: 'Expands cross-team communication, coaching, and delegation alongside complex delivery. F can mean enabling others to own work without assuming performance-management authority.' },
  'staff-engineer': { zh: '以专业深度和领域影响为主，通过共享实践、跨团队协作和负责人培养扩大长期影响；不要求直属团队。', en: 'Leads through professional depth and domain influence, scaling long-term impact through shared practices, collaboration, and developing owners without requiring direct reports.' },
  'engineering-manager': { zh: 'F 是核心责任：对团队人才、绩效、发展、授权和健康负责。B 要理解团队业务与领域模型；A 侧重专业判断、风险评审和有效授权，不以个人编码深度衡量。', en: 'F is a core responsibility: owns team talent, performance, development, delegation, and health. B requires understanding the team’s business and domain model. A focuses on professional judgment, risk review, and sound delegation, not individual coding depth.' },
  'manager-of-managers': { zh: '在 F 的团队责任之上，通过管理者建设组织能力、校准管理质量与继任；比一线工程管理更关注跨团队业务组合、组织设计和资源方向。A 以组织级专业治理为主，不要求逐项技术精通。', en: 'Builds organizational capability through managers, calibrating management quality and succession. Compared with first-line engineering management, the role focuses more on cross-team business portfolios, organization design, and resource direction. A concerns organization-level technical governance, not mastery of every specialty.' },
};

export type ExpectationDomainId = (typeof domains)[number]['id'];
export interface ResponsibilityAnchor {
  behavior: Bilingual;
  evidence: Bilingual;
  standardIds: string[];
}

// The matrix number alone is not a behavior definition. Each cell names the
// stage-specific responsibility and a kind of evidence that could support it.
const anchor = (zh: string, en: string, evidenceZh: string, evidenceEn: string, ...standardIds: string[]): ResponsibilityAnchor => ({
  behavior: { zh, en }, evidence: { zh: evidenceZh, en: evidenceEn }, standardIds,
});
const responsibilityAnchors: Record<StageId, Record<ExpectationDomainId, ResponsibilityAnchor>> = {
  'junior-engineer': {
    professional: anchor('运用基础知识完成边界明确的任务；不确定时及时求助，并验证常见失败路径。', 'Uses foundational knowledge on bounded tasks, asks for help when uncertain, and checks common failure paths.', '任务边界、验证步骤、发现的问题和求助时机。', 'Task boundaries, verification steps, issues found, and when help was sought.', 'apply-foundations'),
    'domain-modeling': anchor('解释当前任务涉及的用户、业务对象、状态和数据含义。', 'Explains the users, business objects, states, and data meaning involved in the task.', '能否用实际对象和状态复述任务，而非只复述实现步骤。', 'Whether the task is restated through real objects and states, not only implementation steps.', 'explain-local-domain-model'),
    'value-direction': anchor('确认任务为什么做、完成条件是什么；发现目标不清时提出问题。', 'Confirms why the task matters and what completion means; asks when the goal is unclear.', '用户、预期变化、验收条件，以及澄清后发生的调整。', 'The user, intended change, acceptance conditions, and adjustments after clarification.', 'clarify-local-outcome'),
    delivery: anchor('按约定完成任务、验证产出并及时暴露阻塞。', 'Completes agreed work, verifies the output, and surfaces blockers early.', '交付承诺、验证记录、偏差上报和后续闭环。', 'Commitments, verification, surfaced deviations, and follow-through.', 'deliver-reliable-task'),
    collaboration: anchor('同步进展、阻塞和所需支持，遵循评审与协作边界。', 'Shares progress, blockers, and needed support while following review and collaboration boundaries.', '同步是否及时、信息是否可行动、反馈后如何调整。', 'Whether updates were timely and actionable, and how feedback changed the work.', 'communicate-status'),
    'people-organization': anchor('不是通用阶段门槛；具体岗位需要时，在指导下参与同伴支持，不承担组织建设结果。', 'Not a general stage requirement; when relevant, participates in peer support with guidance without owning organization-building outcomes.', '只核对岗位是否确有此职责，以及参与范围；缺少机会记为证据不足。', 'Check whether the role actually carries this duty and what the participation involved; lack of opportunity is insufficient evidence.', 'communicate-status', 'respect-working-boundaries'),
    'learning-adaptation': anchor('把反馈转成下一次任务里的可观察改进，并在遇到困难时及时求助。', 'Turns feedback into an observable improvement on the next task and seeks help when stuck.', '前后两次做法的差异、反馈来源与改进效果。', 'Changes between attempts, feedback source, and effect of the adjustment.', 'show-learning-transfer'),
    'work-responsibility': anchor('如实报告事实、错误、风险和个人贡献；共同底线在所有阶段成立。', 'Truthfully reports facts, errors, risks, and personal contribution; baseline obligations apply at every stage.', '面对错误或不确定性时的报告、升级和纠正记录。', 'Reporting, escalation, and correction when errors or uncertainty arise.', 'act-with-integrity'),
  },
  'mid-level-engineer': {
    professional: anchor('独立设计和维护模块，诊断常见问题并验证关键质量约束。', 'Independently designs and maintains a component, diagnoses routine issues, and verifies key quality constraints.', '设计取舍、故障定位过程、测试或运行反馈。', 'Design trade-offs, diagnosis, tests, and operational feedback.', 'own-component-design'),
    'domain-modeling': anchor('把模块业务规则映射为数据、状态与接口，并处理异常和兼容。', 'Maps component business rules to data, states, and interfaces, including exceptions and compatibility.', '规则到模型/接口的映射、迁移考虑和异常用例。', 'Mapping from rules to models/interfaces, migration considerations, and exception cases.', 'model-component-rules'),
    'value-direction': anchor('在明确目标内比较价值、成本和时效，形成局部计划并随反馈调整。', 'Within a clear goal, compares value, cost, and timing, then adjusts a local plan using feedback.', '方案比较、验收指标、暂停条件及计划调整依据。', 'Option comparisons, acceptance measures, stop conditions, and reasons for plan changes.', 'make-local-tradeoffs'),
    delivery: anchor('端到端负责功能或模块，从拆解、依赖协调到上线反馈和修复验证。', 'Owns a feature or component end to end, from decomposition and dependency coordination to release feedback and verified fixes.', '里程碑、依赖、发布结果、回滚/修复和反馈闭环。', 'Milestones, dependencies, release outcomes, rollback/fixes, and feedback follow-through.', 'operate-component-lifecycle'),
    collaboration: anchor('对齐产品、设计和上下游伙伴的依赖与验收，处理日常分歧。', 'Aligns dependencies and acceptance with product, design, and upstream/downstream partners; resolves routine disagreements.', '具体协作对象、分歧事实、约定和交接结果。', 'Partners, facts behind disagreements, agreements, and handoff outcomes.', 'coordinate-feature-delivery'),
    'people-organization': anchor('岗位适用时参与带教、评审或分享；不默认承担招聘、绩效和人员管理。', 'When relevant, contributes through mentoring, review, or sharing; hiring, performance, and people management are not assumed.', '职责授权、支持对象、具体投入与对方独立性的变化。', 'Authority, who was supported, actual contribution, and changes in the other person’s independence.', 'improve-peer-work'),
    'learning-adaptation': anchor('用工作效果验证新方法是否可迁移；假设不成立时调整方法和投入。', 'Checks whether a new method transfers through work outcomes and changes approach or investment when assumptions fail.', '尝试、反馈、结果和停止重复投入的依据。', 'Attempts, feedback, outcomes, and reasons for changing repeated effort.', 'adapt-with-new-evidence'),
    'work-responsibility': anchor('对负责模块兑现承诺、尽早暴露风险，并如实说明本人和协作者的贡献。', 'Keeps commitments for owned components, surfaces risks early, and accurately describes personal and collaborators’ contributions.', '风险上报时点、承诺变更、责任归属及纠正行动。', 'Risk timing, changed commitments, ownership, and corrective action.', 'build-trust-through-followthrough'),
  },
  'senior-engineer': {
    professional: anchor('在模糊或跨模块问题中比较方案，处理关键约束并验证演进效果。', 'Compares options in ambiguous or cross-component problems, resolves key constraints, and verifies evolution outcomes.', '约束、备选方案、验证结果与后续演进信号。', 'Constraints, alternatives, validation, and signals guiding later evolution.', 'design-across-domain-boundaries'),
    'domain-modeling': anchor('澄清跨模块概念、规则与责任边界，推动一致且可解释的模型演进。', 'Clarifies cross-component concepts, rules, and ownership boundaries, then drives coherent, explainable model evolution.', '出现过的语义冲突、决策权、口径和兼容方案。', 'Semantic conflicts, decision rights, definitions, and compatibility choices.', 'evolve-business-models'),
    'value-direction': anchor('定义项目问题和结果假设，提出优先级、阶段投入与转向建议；资源决策按授权承担。', 'Frames project problems and outcome hypotheses, proposes priorities and phases, and recommends pivots; resource decisions follow actual authority.', '提出建议与最终决策的区分、指标、投入和转向条件。', 'Distinction between recommendation and decision, measures, investment, and pivot conditions.', 'own-business-planning', 'stop-low-value-work'),
    delivery: anchor('推动复杂项目跨模块交付，管理风险和变更，并检验上线后的持续效果。', 'Drives complex cross-component delivery, manages risk and change, and checks sustained post-launch outcomes.', '风险处置、依赖变更、恢复策略及持续结果。', 'Risk handling, dependency changes, recovery plans, and sustained outcomes.', 'own-technical-roadmap'),
    collaboration: anchor('在无直接汇报关系时促成跨团队承诺、决策和冲突解决。', 'Secures cross-team commitments and decisions and resolves conflict without relying on reporting authority.', '利益与约束、异议如何处理、决策如何被执行。', 'Stakeholder interests and constraints, treatment of dissent, and how decisions were carried out.', 'align-multiple-partners'),
    'people-organization': anchor('通过辅导、评审和授权帮助他人独立负责更大问题；正式人事权限按岗位适用。', 'Uses coaching, review, and delegation to help others own larger problems; formal people authority depends on the role.', '他人承担范围的变化、持续反馈和可替代的专业影响证据。', 'How others’ ownership changed, ongoing feedback, and alternative evidence of professional influence.', 'mentor-through-delegation'),
    'learning-adaptation': anchor('在不确定条件下检验判断和反证，并把失败复盘转成后续可复用做法。', 'Tests judgments and disconfirming evidence under uncertainty, turning failure reviews into reusable follow-up practices.', '初始假设、反证、个人判断变化及后续实践变化。', 'Initial assumptions, counterevidence, changes in judgment, and later practice changes.', 'turn-failure-into-reusable-learning'),
    'work-responsibility': anchor('在复杂协作和压力下处理责任冲突、维护事实与归因，并推动纠偏。', 'Handles responsibility conflicts under pressure, protects factual attribution, and drives correction.', '权限边界、影响判断的风险、归因证据和纠偏结果。', 'Authority boundaries, risks affecting decisions, attribution evidence, and correction outcomes.', 'sustain-work-under-pressure'),
  },
  'staff-engineer': {
    professional: anchor('在关键领域提供深度判断，解决高影响问题，并让成果能被复用和持续演进。', 'Provides deep judgment in a critical domain, resolves high-impact problems, and makes results reusable and evolvable.', '领域约束、关键判断、复用范围及长期质量结果。', 'Domain constraints, key judgments, reuse, and long-term quality outcomes.', 'set-domain-technical-direction'),
    'domain-modeling': anchor('处理重要领域间的语义和数据契约，支持长期演进与正确决策。', 'Resolves semantics and data contracts across important domains to support sound decisions and long-term evolution.', '共同定义、冲突处理、兼容策略和采用后的反馈。', 'Shared definitions, conflict resolution, compatibility, and adoption feedback.', 'govern-domain-meaning'),
    'value-direction': anchor('把领域方向连接到长期价值，比较投入、机会成本和验证顺序；不要求拥有公司级商业组合。', 'Connects domain direction to long-term value and weighs investment, opportunity cost, and validation order; company-wide portfolio ownership is not assumed.', '领域目标、替代投入、阶段性验证和停止条件。', 'Domain goals, alternative investments, staged validation, and stop conditions.', 'connect-long-term-business-plan'),
    delivery: anchor('提升关键领域或跨团队交付与运行能力，降低对个人补位的依赖。', 'Improves delivery and operations in a critical domain or across teams, reducing reliance on individual heroics.', '机制采用情况、系统性瓶颈变化和团队独立运行证据。', 'Practice adoption, systemic bottleneck changes, and evidence teams can operate independently.', 'simplify-professional-practice'),
    collaboration: anchor('促成多个团队形成共同判断和采用路径，处理迁移成本与持续分歧。', 'Helps multiple teams reach shared judgments and adoption paths while addressing migration cost and lasting disagreement.', '参与方、决策权、迁移阻力及实际采用效果。', 'Participants, decision rights, adoption friction, and actual uptake.', 'influence-without-authority-at-scale'),
    'people-organization': anchor('以专业辅导、共享资产、标准建设或负责人培养扩大能力；直属团队和正式继任责任按授权适用。', 'Scales capability through specialist coaching, shared assets, standards, or developing owners; direct-team and formal succession duties depend on authority.', '辅导、共享实践、复杂解题、可复用资产等替代证据。', 'Alternative evidence such as coaching, shared practice, complex problem solving, and reusable assets.', 'grow-senior-capability'),
    'learning-adaptation': anchor('检验领域假设并传播有效方法，用后续决策验证认知更新。', 'Tests domain assumptions and shares useful methods, validating learning through later decisions.', '被修正的关键假设、外部证据和实践迁移结果。', 'Changed assumptions, external evidence, and transfer into practice.', 'model-learning-and-intellectual-honesty'),
    'work-responsibility': anchor('在高影响专业决策中守住事实、风险和归因边界，并提出可持续的纠偏方案。', 'Maintains factual, risk, and attribution boundaries in high-impact professional decisions and proposes sustainable corrections.', '风险升级、争议证据、利益冲突与持续纠偏。', 'Risk escalation, disputed evidence, conflicts of interest, and sustained correction.', 'hold-risk-boundaries-under-pressure'),
  },
  'engineering-manager': {
    professional: anchor('评审关键技术与质量风险，组织合适专家并做有效授权；不以个人编码深度替代管理责任。', 'Reviews key technical and quality risks, engages the right experts, and delegates well; personal coding depth does not substitute for management responsibility.', '关键决策如何引入专家、挑战假设并追踪风险关闭。', 'How experts were engaged, assumptions challenged, and risks followed through.', 'make-sound-domain-decisions'),
    'domain-modeling': anchor('理解团队业务链路、领域规则和数据口径，能检查影响团队结果的关键边界。', 'Understands the team’s business flow, domain rules, and data definitions, and checks boundaries that affect outcomes.', '对业务对象、数据口径和跨团队依赖的判断及影响。', 'Judgments about business objects, data definitions, dependencies, and their effects.', 'make-sound-domain-decisions'),
    'value-direction': anchor('把业务目标转成团队结果和容量取舍，与伙伴校准承诺和优先级。', 'Turns business goals into team outcomes and capacity choices, calibrating commitments and priorities with partners.', '目标、容量、护栏、取舍和伙伴确认的承诺。', 'Goals, capacity, guardrails, trade-offs, and partner-aligned commitments.', 'set-team-outcomes'),
    delivery: anchor('通过团队机制管理容量、依赖、质量与运行风险，持续纠偏而非个人补位。', 'Uses team mechanisms to manage capacity, dependencies, quality, and operational risk, correcting course without relying on personal heroics.', '运行节奏、风险处置、授权分工和团队结果。', 'Operating cadence, risk handling, delegation, and team outcomes.', 'allocate-capacity-for-value'),
    collaboration: anchor('管理伙伴预期、团队承诺和升级路径，保护直接反馈和有效协作。', 'Manages partner expectations, team commitments, and escalation paths while protecting candid feedback and effective collaboration.', '冲突决策、预期重设、反馈渠道及承诺兑现。', 'Conflict decisions, reset expectations, feedback channels, and fulfilled commitments.', 'align-stakeholders-for-team'),
    'people-organization': anchor('对招聘、绩效、发展、授权和团队健康承担明确的一线管理责任。', 'Owns first-line management responsibilities for hiring, performance, development, delegation, and team health.', '人员决策的事实依据、公平性、支持措施及后续检验。', 'Evidence, fairness, support, and follow-up checks behind people decisions.', 'hire-and-grow-team', 'address-performance-and-workload'),
    'learning-adaptation': anchor('基于团队信号检视管理机制，验证改变效果，并调整自己的管理行为。', 'Uses team signals to inspect management practices, validate changes, and adjust personal management behavior.', '团队反馈、尝试的管理调整、观察窗口和结果。', 'Team feedback, management changes, observation period, and outcomes.', 'learn-and-adjust-management'),
    'work-responsibility': anchor('在人事和资源决定中保持事实、公平和责任边界，并提供有效纠错渠道。', 'Maintains facts, fairness, and accountability in people and resource decisions, with effective correction paths.', '决定权限、适用标准、异议处理和纠偏结果。', 'Decision authority, applicable standards, dissent handling, and corrections.', 'protect-fairness-in-hard-decisions'),
  },
  'manager-of-managers': {
    professional: anchor('能与专家讨论关键技术选择，提出约束和风险问题并理解其业务后果；不要求亲自实现或逐项评审所有专业细节。', 'Can discuss critical technical choices with experts, raise constraints and risk questions, and understand business consequences without implementing or reviewing every specialty in depth.', '如何识别需要专家判断的问题、检验关键假设，并避免在证据不足时替专家背书。', 'How expert judgment is engaged, key assumptions are tested, and unsupported endorsement is avoided.', 'maintain-strategic-domain-judgment'),
    'domain-modeling': anchor('识别多个业务领域的结构性冲突，组织专家建立共同语义、数据口径和变更责任。', 'Identifies structural conflicts across domains and aligns experts on shared semantics, data definitions, and change ownership.', '跨域冲突、业务后果、共同定义及决策权安排。', 'Cross-domain conflicts, business consequences, shared definitions, and decision rights.', 'maintain-strategic-domain-judgment'),
    'value-direction': anchor('在授权范围内组合多个团队的方向与资源，根据结果调整组合；战略和预算权依实际授权。', 'Combines direction and resources across teams within delegated authority and adjusts the portfolio based on outcomes; strategy and budget authority depend on mandate.', '决策授权、组合选项、投入转移和业务结果。', 'Mandate, portfolio options, investment shifts, and business outcomes.', 'shape-org-outcomes'),
    delivery: anchor('校准跨团队交付和运行体系，处理系统性瓶颈、危机与组织过渡。', 'Calibrates cross-team delivery and operations, addressing systemic bottlenecks, crises, and organizational transitions.', '跨团队瓶颈、运行指标、危机处置和过渡连续性。', 'Cross-team bottlenecks, operating measures, crisis handling, and transition continuity.', 'lead-organization-transitions'),
    collaboration: anchor('让管理者和关键伙伴对方向、决策权、冲突升级与异议处理形成稳定机制。', 'Establishes reliable mechanisms with managers and key partners for direction, decision rights, escalation, and dissent.', '管理团队如何处理分歧、上行坏消息和落实共同决策。', 'How the leadership group handles dissent, bad news, and shared decisions.', 'align-leadership-system'),
    'people-organization': anchor('通过招聘、辅导和评估管理者，校准管理质量、组织边界、能力配置与继任风险。', 'Hires, coaches, and evaluates managers, calibrating management quality, organizational boundaries, capability allocation, and succession risk.', '经理成长与评估、多团队能力缺口、继任风险和组织结果。', 'Manager development and assessment, cross-team capability gaps, succession risks, and organizational outcomes.', 'develop-managers', 'plan-organization-capability'),
    'learning-adaptation': anchor('把多团队复盘和外部变化纳入组织决策，检查学习是否迁移为实践。', 'Brings multi-team reviews and external changes into organizational decisions and checks whether learning transfers into practice.', '重复出现的问题、机制变化、采用情况和复发率。', 'Recurring problems, mechanism changes, adoption, and recurrence.', 'renew-organizational-learning'),
    'work-responsibility': anchor('在授权范围内建立信息上行、权力约束和重大决定纠错机制。', 'Within delegated authority, establishes upward information flow, checks on power, and correction paths for consequential decisions.', '独立反馈来源、利益冲突约束、决定复核与纠偏。', 'Independent feedback, conflict-of-interest controls, decision review, and correction.', 'check-leadership-power'),
  },
};

export function getResponsibilityAnchor(stage: StageId, domain: ExpectationDomainId, locale: 'zh-CN' | 'en') {
  const item = responsibilityAnchors[stage]?.[domain];
  if (!item) throw new Error(`Missing responsibility anchor: ${stage}/${domain}`);
  return { behavior: locale === 'en' ? item.behavior.en : item.behavior.zh, evidence: locale === 'en' ? item.evidence.en : item.evidence.zh, standardIds: item.standardIds };
}

export function validateResponsibilityAnchors(): string[] {
  const errors: string[] = [];
  for (const stage of stageIds) for (const domain of domains) {
    const item = responsibilityAnchors[stage]?.[domain.id as ExpectationDomainId];
    if (!item) errors.push(`${stage}/${domain.id}: missing stage-specific behavior anchor`);
    else {
      for (const locale of ['zh', 'en'] as const) {
        if (!item.behavior[locale].trim()) errors.push(`${stage}/${domain.id}: missing ${locale} behavior anchor`);
        if (!item.evidence[locale].trim()) errors.push(`${stage}/${domain.id}: missing ${locale} evidence clue`);
      }
      if (!item.standardIds.length) errors.push(`${stage}/${domain.id}: missing linked stage standard`);
      else for (const standardId of item.standardIds) {
        const profile = getStageProfile(stage, 'zh-CN');
        if (!Object.values(profile.dimensions).flat().some((standard) => standard.id === standardId)) {
          errors.push(`${stage}/${domain.id}: linked standard ${standardId} does not exist`);
        }
      }
    }
  }
  return errors;
}

export function validateExpectations(matrix: typeof expectations = expectations): string[] {
  const errors: string[] = [];
  if (Object.keys(matrix).sort().join('|') !== [...stageIds].sort().join('|')) errors.push('Matrix must cover exactly six stages');
  const keys = domains.map(d => d.id).sort().join('|');
  for (const id of stageIds) {
    const values = matrix[id];
    if (!values || Object.keys(values).sort().join('|') !== keys) errors.push(`${id}: domains must match A–H`);
    for (const [domain, value] of Object.entries(values ?? {})) {
      if (!depthAnchors.some(anchor => anchor.percent === value)) errors.push(`${id}/${domain}: percentage needs a behavioral anchor`);
    }
  }
  return errors;
}
