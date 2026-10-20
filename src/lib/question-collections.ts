import type { QuestionRecord } from './content-model';
import type { Bilingual } from './taxonomy';

export type CuratedQuestionSet = {
  id: string;
  kind: 'question-set';
  reviewedCore?: boolean;
  title: Bilingual;
  purpose: Bilingual;
  audience: Bilingual;
  entries: { questionId: string; rationale: Bilingual }[];
};

export type CandidatePrompt = {
  id: string;
  question: Bilingual;
  purpose: Bilingual;
  decisionUse: Bilingual;
  followUp?: Bilingual;
};

export type CandidatePromptGroup = {
  id: string;
  title: Bilingual;
  prompts: CandidatePrompt[];
};

export type CandidateQuestionGuide = {
  id: string;
  kind: 'candidate-guide';
  title: Bilingual;
  purpose: Bilingual;
  audience: Bilingual;
  sections: CandidatePromptGroup[];
};

export type QuestionCollection = CuratedQuestionSet | CandidateQuestionGuide;

const b = (zh: string, en: string): Bilingual => ({ zh, en });
const questionSet = (
  id: string,
  title: Bilingual,
  purpose: Bilingual,
  audience: Bilingual,
  entries: CuratedQuestionSet['entries'],
  reviewedCore = false,
): CuratedQuestionSet => ({ id, kind: 'question-set', title, purpose, audience, entries, ...(reviewedCore ? { reviewedCore: true } : {}) });
const candidateGuide = (
  id: string,
  title: Bilingual,
  purpose: Bilingual,
  audience: Bilingual,
  sections: CandidatePromptGroup[],
): CandidateQuestionGuide => ({ id, kind: 'candidate-guide', title, purpose, audience, sections });
const entry = (questionId: string, zh: string, en: string) => ({ questionId, rationale: b(zh, en) });

export const questionCollections: readonly QuestionCollection[] = [
  questionSet('general-interview', b('通用面试', 'General interview'),
    b('用八道跨领域问题先检查回答经历、拆解问题、说明取舍和复盘的基本功。', 'Use eight cross-domain prompts to practice explaining experience, decomposing problems, making trade-offs, and reflecting.'),
    b('第一次使用题库或希望快速热身的候选人。', 'Candidates exploring the library or looking for a short warm-up.'), [
      entry('a-coding-abstraction-defensive-edge-cases', '从边界条件和真实失误讲起，检查能否把抽象方法落到实现。', 'Starts with edge cases and a real mistake to connect reasoning to implementation.'),
      entry('b-business-context-user-task-chain', '确认能否讲清服务对象、业务链路和自身工作的影响。', 'Checks whether the person can connect users, business flow, and their work.'),
      entry('bulk-c-metrics-03', '练习同时看主指标和反向指标，并解释结果取舍。', 'Practices weighing a primary metric against counter-metrics.'),
      entry('wave17-delivery-010', '检查跨团队交付中的拆解、依赖与责任边界。', 'Examines decomposition, dependencies, and ownership in cross-team delivery.'),
      entry('bulk-e-cross-team-decision-deadlock', '观察如何定位僵局并推动明确决策。', 'Explores how the candidate diagnoses and resolves a cross-team deadlock.'),
      entry('c-prioritization-top-three-stop-two', '练习按目标和容量比较优先级，也说明暂缓事项及停止条件。', 'Practices ranking work against goals and capacity, including deferrals and stop conditions.'),
      entry('bulk-g-recovery-after-public-mistake', '用真实挫折观察复盘、恢复和后续改进。', 'Uses a setback to examine reflection, recovery, and follow-through.'),
      entry('h-attribution-team-vs-personal', '说明团队结果中的个人贡献，并避免夸大归因。', 'Clarifies individual contribution without overstating attribution.'),
    ]),
  questionSet('core-candidate-preparation', b('候选人准备 · 核心题', 'Candidate preparation · Core questions'),
    b('从技术判断、业务语境、责任取舍到贡献复盘，练习说明事实、本人行动和可核验结果。', 'Practice explaining facts, personal actions, and verifiable outcomes across technical judgment, business context, responsibility, and reflection.'),
    b('准备面试或晋升的工程师。', 'Engineers preparing for an interview or promotion.'), [
      entry('a-databases-read-replica-stale-read', '先说明一致性目标，再解释读副本陈旧数据的取舍。', 'Start with consistency expectations, then explain the trade-offs of stale replica reads.'),
      entry('b-business-context-whole-then-part', '从用户任务链路建立整体业务理解，再定位局部问题。', 'Build a whole-flow understanding of the user task before diagnosing one part.'),
      entry('d-capacity-resources-and-scope', '说明资源和责任范围怎样共同影响可交付结果。', 'Explain how resources and responsibility scope shape deliverable outcomes.'),
      entry('e-communication-risk-update-without-certainty', '在事实不完整时说明已知、未知、行动和更新节点。', 'Separate knowns, unknowns, actions, and update timing when facts are incomplete.'),
      entry('bulk-g-recovery-after-public-mistake', '复盘公开失误后的承担、修复和后续改变。', 'Reflect on ownership, repair, and subsequent changes after a visible mistake.'),
      entry('h-attribution-ai-assisted-work-disclosure', '准确说明工具协助、个人判断、验证和结果责任。', 'Clarify tool assistance, personal judgment, verification, and outcome responsibility.'),
    ], true),
  questionSet('core-interviewer-evidence', b('面试官校准 · 核心题', 'Interviewer calibration · Core questions'),
    b('用一组已逐题复核的问题练习验证简历主张、追问实际行动、校准证据，并减少印象判断。', 'Use question-by-question reviewed prompts to verify claims, probe actual actions, calibrate evidence, and reduce impression-based judgments.'),
    b('设计结构化面试或校准招聘判断的面试官。', 'Interviewers designing structured interviews or calibrating hiring decisions.'), [
      entry('a-ai-engineering-eval-disagreement', '校准对 AI 工程评估的分歧，先找证据与标准差异。', 'Calibrate disagreement in AI engineering evaluations by examining evidence and standards.'),
      entry('a-ai-engineering-resume-claim-verification', '把简历中的 AI 项目主张拆成可验证的责任和证据。', 'Turn AI project claims on a résumé into verifiable responsibility and evidence.'),
      entry('a-ai-engineering-agent-duplicate-side-effect', '用重复副作用情境检验候选人对代理可靠性的判断。', 'Use duplicate side effects to examine judgment about agent reliability.'),
      entry('exp1500-f-022', '围绕岗位要求与观察证据校准面试官的不同结论。', 'Calibrate differing interviewer conclusions against role requirements and observed evidence.'),
      entry('g-structured-reflection-project-failure', '追问失败项目中的决策、归因和后续学习。', 'Probe decisions, attribution, and learning in a failed project.'),
      entry('h-attribution-team-vs-personal', '要求候选人区分个人贡献和团队共同结果。', 'Ask candidates to distinguish personal contribution from shared team outcomes.'),
    ], true),
  questionSet('core-manager-evaluation', b('管理者评估与带团队 · 核心题', 'Manager evaluation and team leadership · Core questions'),
    b('围绕团队责任、人员发展、授权与继任，检验管理判断如何转成清楚的机制和结果。', 'Examine how management judgment becomes clear mechanisms and outcomes across team responsibility, development, delegation, and succession.'),
    b('承担一线管理、组织设计或管理者发展的负责人。', 'Leaders responsible for frontline management, team design, or manager development.'), [
      entry('f-frontline-management-absence-test', '检验团队机制在负责人暂时缺席时是否仍能运转。', 'Check whether team mechanisms continue to work when the lead is temporarily absent.'),
      entry('f-frontline-management-conflict-with-report', '处理与下属的冲突时区分事实、影响和管理责任。', 'Separate facts, impact, and management responsibility in conflict with a report.'),
      entry('f-growth-development-coach-new-lead', '为新任负责人设置循序渐进的责任和成长证据。', 'Set progressive responsibility and growth evidence for a new lead.'),
      entry('f-delegation-succession-decision-rights', '把决定权限、上下文、边界和升级条件同步交代清楚。', 'Align decision authority with context, boundaries, and escalation conditions.'),
      entry('f-delegation-succession-frontline-leaver', '关键负责人离开时兼顾连续性、交接负担和团队支持。', 'Balance continuity, handoff load, and team support when a key lead leaves.'),
      entry('f-delegation-succession-internal-external-fairness', '用责任需求和时间约束公平比较内部培养与外部招聘。', 'Compare internal development and external hiring fairly against responsibility needs and timing.'),
    ], true),
  questionSet('technical-selected', b('技术精选', 'Technical essentials'),
    b('从基础、编码、调试、系统设计到工程体系和 AI，按解决问题的顺序练习。', 'Practice in sequence from fundamentals and coding through debugging, system design, engineering systems, and AI.'),
    b('工程、前端、后端、客户端、数据和 AI 工程岗位候选人。', 'Candidates in engineering, frontend, backend, mobile, data, and AI engineering.'), [
      entry('a-computer-science-process-vs-thread', '用并发基础问题检验概念边界和场景化取舍。', 'Checks concurrency fundamentals and contextual trade-offs.'),
      entry('a-computer-science-transaction-isolation', '从事务异常理解数据库基础与并发影响。', 'Connects database fundamentals with concurrent behavior.'),
      entry('a-coding-abstraction-lru-cache-sketch', '从编码、复杂度和测试设计观察实现能力。', 'Examines implementation, complexity, and test design.'),
      entry('a-debugging-api-works-locally-frontend-disagrees', '检查是否能从协作双方的证据定位接口问题。', 'Tests how the candidate uses evidence from both sides to debug an integration.'),
      entry('a-databases-read-replica-stale-read', '练习定义一致性预期并解释架构边界。', 'Practices defining consistency expectations and architectural boundaries.'),
      entry('a-system-design-cross-system-consistency', '从跨系统一致性开始讨论方案、失败路径和取舍。', 'Explores options, failure paths, and trade-offs in cross-system consistency.'),
      entry('a-engineering-systems-schema-deploy-rollback', '检查发布顺序、兼容性和回退策略。', 'Examines rollout order, compatibility, and rollback strategy.'),
      entry('a-ai-engineering-model-change-release', '用模型升级场景讨论分群风险、发布判断和回退。', 'Uses a model change to examine segment risk, release decisions, and rollback.'),
      entry('a-monorepo-build-graph-invalidation', '补足大仓库构建图和选择性验证能力。', 'Covers build graphs and selective validation in a large monorepo.'),
    ]),
  questionSet('interviewer-evidence', b('面试官取证', 'Interviewer evidence'),
    b('练习从主问到追问收集岗位相关事实，再把事实与推论分开。', 'Practice collecting job-related facts through lead and follow-up questions, then separating facts from inference.'),
    b('面试官、招聘负责人和需要设计面试流程的管理者。', 'Interviewers, hiring leads, and managers designing interview loops.'), [
      entry('h-attribution-team-vs-personal', '追问本人问题定义、关键决定和团队分工，核实结果归因。', 'Probe problem framing, decisions, and team contributions to clarify attribution.'),
      entry('exp1500-f-022', '用于校准不同面试官之间对证据的理解。', 'Helps interviewers calibrate what counts as evidence.'),
      entry('wave16-people-043', '检查岗位画像能否转成具体、可区分的观察点。', 'Tests whether a role profile can be translated into observable distinctions.'),
      entry('f-hiring-lead-leveling-evidence', '围绕责任范围而非头衔或表达自信收集定级证据。', 'Collects leveling evidence from scope rather than titles or confidence.'),
      entry('a-ai-engineering-resume-claim-verification', '把宽泛经历主张转成可追问、可核验的事实。', 'Turns a broad experience claim into verifiable facts and probes.'),
      entry('a-ai-engineering-eval-disagreement', '讨论评价标准、标注差异和系统信号之间的不同解释。', 'Separates evaluation disagreement, rubric ambiguity, and system behavior.'),
      entry('bulk1000-h-093-v1', '通过责任边界和关键依赖追问结果的实际归因。', 'Probes attribution through ownership boundaries and dependencies.'),
      entry('exp1500-f-028', '讨论如何在证据不足时给出可行动且不过度承诺的反馈。', 'Practices useful feedback when evidence for advancement is incomplete.'),
    ]),
  questionSet('promotion-dialogue', b('晋升对话', 'Promotion conversation'),
    b('覆盖目标责任范围、持续证据、影响归因、评审校准和下一步发展。', 'Cover target scope, sustained evidence, attribution, calibration, and development.'),
    b('准备晋升评审的专业贡献者、一线管理者和管理管理者。', 'Individual contributors, frontline managers, and managers of managers preparing for promotion.'), [
      entry('bulk1000-f-081-v1', '从岗位责任范围检查晋升材料是否贴合目标阶段。', 'Checks whether promotion evidence matches the target scope.'),
      entry('bulk-g-growth-goal-without-promotion-slot', '把成长证据和组织名额分开讨论。', 'Separates development evidence from promotion-slot availability.'),
      entry('bulk-g-growth-path-specialist-vs-manager', '讨论不同职业轨道的选择，而非默认管理晋升。', 'Explores career-track choice without treating management as the default.'),
      entry('bulk-g-learning-from-rejected-promotion', '用评审反馈检验学习转化和行动闭环。', 'Examines how feedback becomes learning and action.'),
      entry('exp1500-f-028', '把证据缺口转成阶段化发展路径。', 'Turns evidence gaps into a staged development path.'),
      entry('f-mom-calibration-evidence', '练习跨团队人才标准校准和差异处理。', 'Practices calibration across teams without erasing context.'),
      entry('f-growth-development-inconsistent-performance', '讨论如何区分持续责任能力与偶发结果。', 'Distinguishes sustained responsibility from isolated outcomes.'),
      entry('wave18-attrib-011', '补足团队影响背后的个人关键判断和行动证据。', 'Makes personal decisions and actions visible within team impact.'),
    ]),
  candidateGuide('candidate-due-diligence', b('岗位尽调', 'Role due diligence'),
    b('把反向提问当作双向选择的尽调：确认真实工作、责任条件和组织支持，再决定是否接受岗位或晋升机会。', 'Use reverse questions for mutual due diligence: clarify real work, responsibility conditions, and organizational support before deciding on a role or promotion.'),
    b('外部求职候选人，以及正在准备内部晋升对话的人。', 'External candidates and people preparing for an internal promotion conversation.'), [
      {
        id: 'external-role', title: b('外部求职', 'External role'), prompts: [
          { id: 'role-success', question: b('如果我加入，前 3–6 个月最希望我解决什么问题？你会用哪些结果判断做得好？', 'What problem would you most want me to solve in the first three to six months, and what outcomes would show that I am succeeding?'), purpose: b('明确岗位的近期目标和成功证据。', 'Clarify near-term goals and evidence of success.'), decisionUse: b('判断目标是否具体、可影响，并与岗位描述一致。', 'Assess whether goals are concrete, influenceable, and consistent with the role description.'), followUp: b('可以举一个现在团队正在面对的例子吗？', 'Could you share a current example the team is working on?') },
          { id: 'actual-work', question: b('团队最近一个季度最常做的工作和最难的工作分别是什么？', 'What work has occupied the team most often this quarter, and what has been the hardest?'), purpose: b('了解日常工作与真正的难点。', 'Understand day-to-day work and its real challenges.'), decisionUse: b('判断工作内容是否符合自己的兴趣、技能和预期。', 'Compare the actual work with your interests, skills, and expectations.') },
          { id: 'decision-rights', question: b('这个岗位通常可以独立决定什么？哪些决定需要其他角色共同参与？', 'What decisions can this role make independently, and which require other roles to participate?'), purpose: b('厘清授权范围和协作边界。', 'Clarify authority and collaboration boundaries.'), decisionUse: b('判断责任、权限与预期结果是否匹配。', 'Check whether accountability, authority, and expected outcomes align.') },
          { id: 'dependencies', question: b('这个岗位最依赖哪些团队或系统？出现资源或优先级冲突时通常怎样处理？', 'Which teams or systems does this role depend on most, and how are resource or priority conflicts usually handled?'), purpose: b('理解交付依赖和冲突处置机制。', 'Understand delivery dependencies and how conflicts are handled.'), decisionUse: b('判断目标是否依赖候选人无法影响的关键条件。', 'Identify critical conditions outside the candidate’s influence.') },
          { id: 'manager-feedback', question: b('入职后的预期通常怎样校准？经理会用什么节奏提供反馈？', 'How are expectations usually calibrated after someone joins, and how often does the manager provide feedback?'), purpose: b('了解管理支持和早期纠偏方式。', 'Understand management support and early course correction.'), decisionUse: b('判断自己能否及时发现偏差并获得必要支持。', 'Assess whether you can identify misalignment early and get support.') },
          { id: 'team-disagreement', question: b('能举一个团队最近出现不同意见并最终作出决定的例子吗？', 'Could you share a recent example of disagreement on the team and how a decision was reached?'), purpose: b('了解团队如何处理分歧和作出决定。', 'Learn how the team handles disagreement and makes decisions.'), decisionUse: b('用具体行为了解协作方式，不用抽象的“文化匹配”标签下结论。', 'Use concrete behavior to understand collaboration instead of relying on vague culture-fit labels.') },
          { id: 'business-assumptions', question: b('团队当前最重要的业务假设或风险是什么？会依据什么信号重新评估？', 'What are the team’s most important business assumptions or risks, and what signals would cause them to be reassessed?'), purpose: b('了解业务方向和不确定性。', 'Understand business direction and uncertainty.'), decisionUse: b('判断自己是否理解并愿意在这些约束下工作。', 'Decide whether you understand and can work within these conditions.') },
          { id: 'working-conditions', question: b('这个岗位的值班、发布、紧急响应或跨时区协作实际是什么节奏？', 'What are the actual expectations for on-call work, releases, urgent response, or cross-time-zone collaboration?'), purpose: b('核实工作方式和持续性约束。', 'Verify work patterns and ongoing constraints.'), decisionUse: b('对照自己的生活安排和可持续工作边界。', 'Compare the conditions with your schedule and sustainable work boundaries.') },
        ],
      },
      {
        id: 'promotion', title: b('晋升沟通', 'Promotion conversations'), prompts: [
          { id: 'target-scope', question: b('相较当前阶段，目标阶段最核心的责任变化是什么？哪些责任需要已经持续承担？', 'Compared with my current stage, what is the core change in responsibility, and which responsibilities must already be sustained?'), purpose: b('明确晋升对应的责任变化。', 'Clarify the change in responsibility expected for promotion.'), decisionUse: b('判断目标范围是否清晰，而不是只对照职级名称。', 'Check whether the target scope is clear rather than relying on level labels.') },
          { id: 'review-evidence', question: b('评审会看哪些结果和行为证据？通常覆盖多长时间，怎样判断结果是持续的？', 'Which outcomes and behaviors will the review examine, over what time period, and how is sustained performance assessed?'), purpose: b('确认材料范围、时间窗口和持续性标准。', 'Confirm the evidence set, time window, and expectations for sustained performance.'), decisionUse: b('规划能覆盖评审周期的可核验材料。', 'Plan verifiable evidence across the review period.') },
          { id: 'calibration-process', question: b('评审由哪些角色参与？不同团队、项目和专业轨道之间怎样校准责任范围？', 'Who participates in the review, and how are responsibility scopes calibrated across teams, projects, and career tracks?'), purpose: b('了解决策责任和校准口径。', 'Understand decision ownership and calibration.'), decisionUse: b('判断过程是否有明确责任人和可解释的比较方式。', 'Assess whether the process has clear owners and explainable comparisons.') },
          { id: 'evidence-gap', question: b('以目前看到的材料，最关键的证据缺口是什么？什么样的实际工作能补足它？', 'Based on the evidence so far, what is the most important gap, and what real work would help fill it?'), purpose: b('把反馈落到可观察的缺口和工作上。', 'Translate feedback into an observable gap and real work.'), decisionUse: b('判断下一步是否可行动、可验证，而非依赖猜测。', 'Check whether the next step is actionable and verifiable.') },
          { id: 'support-needed', question: b('承担这些目标责任需要什么授权、资源或辅导？由谁在什么时候提供？', 'What authority, resources, or coaching would be needed for this scope, and who would provide them by when?'), purpose: b('明确组织承诺与支持责任。', 'Clarify organizational commitments and support ownership.'), decisionUse: b('判断责任增长是否有相应条件，不把结构性缺口全归因于个人。', 'Check whether expanded responsibility comes with the needed conditions.') },
          { id: 'counterevidence', question: b('评审会怎样讨论结果不一致、未达预期或反向证据？哪些背景会改变对这些材料的解释？', 'How does the review consider inconsistent results, missed expectations, or contrary evidence, and what context could change their interpretation?'), purpose: b('了解评审如何处理复杂证据和替代解释。', 'Understand how the review handles mixed evidence and alternative explanations.'), decisionUse: b('帮助双方基于事实讨论风险与改进，而非隐藏不利事实。', 'Support a fact-based discussion of risk and improvement rather than hiding contrary evidence.') },
          { id: 'decision-timing', question: b('评审结论通常在什么时候形成？如果本轮还不够，何时用哪些证据再次复盘？', 'When is the review decision usually made? If the evidence is not yet sufficient, when and against what evidence will progress be revisited?'), purpose: b('确认时间点和后续复核机制。', 'Confirm timing and a follow-up review mechanism.'), decisionUse: b('判断路径是否有明确节点，避免无限期承担更大职责。', 'Check that the path has clear checkpoints rather than indefinite expanded responsibility.') },
          { id: 'role-transition', question: b('晋升后哪些责任会新增或移交？如何判断新职责在过渡期后已经稳定？', 'Which responsibilities will be added or handed off after promotion, and how will a successful transition be assessed?'), purpose: b('了解正式晋升后的责任迁移。', 'Understand how responsibilities change after promotion.'), decisionUse: b('评估新范围是否有明确边界和过渡安排。', 'Assess whether the new scope has clear boundaries and a transition plan.') },
        ],
      },
    ]),
];

function hasBilingualText(value: Bilingual | undefined) {
  return Boolean(value?.zh.trim() && value.en.trim());
}

export function validateQuestionCollections(collections: readonly QuestionCollection[], records: readonly QuestionRecord[]): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  const byQuestion = new Map<string, Set<string>>();
  const tierByQuestion = new Map<string, Set<string>>();
  for (const record of records) if (record.status === 'published') {
    const locales = byQuestion.get(record.questionId) ?? new Set<string>();
    locales.add(record.locale);
    byQuestion.set(record.questionId, locales);
    const tiers = tierByQuestion.get(record.questionId) ?? new Set<string>();
    tiers.add(record.qualityTier);
    tierByQuestion.set(record.questionId, tiers);
  }

  for (const collection of collections) {
    const fail = (message: string) => errors.push(`${collection.id}: ${message}`);
    if (ids.has(collection.id)) fail('duplicate collection ID');
    ids.add(collection.id);
    for (const field of ['title', 'purpose', 'audience'] as const) {
      if (!hasBilingualText(collection[field])) fail(`${field} needs Chinese and English text`);
    }
    if (collection.kind === 'question-set') {
      if (!collection.entries.length) fail('question set is empty');
      const seen = new Set<string>();
      for (const item of collection.entries) {
        if (seen.has(item.questionId)) fail(`duplicate question ID ${item.questionId}`);
        seen.add(item.questionId);
        if (!hasBilingualText(item.rationale)) fail(`entry ${item.questionId} needs a bilingual rationale`);
        const locales = byQuestion.get(item.questionId);
        for (const locale of ['zh-CN', 'en']) if (!locales?.has(locale)) fail(`missing ${locale} question ${item.questionId}`);
        if (collection.reviewedCore && !tierByQuestion.get(item.questionId)?.has('core')) fail(`reviewed core path includes non-core question ${item.questionId}`);
      }
    } else {
      if (!collection.sections.length) fail('candidate guide has no sections');
      for (const section of collection.sections) {
        if (!hasBilingualText(section.title)) errors.push(`${collection.id}/${section.id}: title needs Chinese and English text`);
        if (!section.prompts.length) errors.push(`${collection.id}/${section.id}: candidate prompt group is empty`);
        for (const prompt of section.prompts) {
          for (const field of ['question', 'purpose', 'decisionUse'] as const) {
            if (!hasBilingualText(prompt[field])) errors.push(`${collection.id}/${section.id}/${prompt.id}: ${field} needs Chinese and English text`);
          }
          if (prompt.followUp && !hasBilingualText(prompt.followUp)) errors.push(`${collection.id}/${section.id}/${prompt.id}: follow-up needs Chinese and English text`);
        }
      }
    }
  }
  return errors;
}

export function questionCollectionById(id: string) {
  return questionCollections.find((collection) => collection.id === id);
}
