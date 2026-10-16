import { isAudienceRole } from '../content/role-stages/registry.ts';
export type Locale = 'zh-CN' | 'en';

export type Bilingual = { zh: string; en: string };

export const pick = (text: Bilingual, locale: Locale): string => (locale === 'en' ? text.en : text.zh);

export type Leaf = { id: string; name: Bilingual; description: Bilingual; placement: Bilingual; boundary: Bilingual; status: 'active' | 'planned' };
export type Band = 'judgment' | 'delivery-organization' | 'growth';
export type Domain = { id: string; letter: string; band: Band; name: Bilingual; description: Bilingual; leaves: readonly Leaf[] };

const guidance: Record<string, { placement: Bilingual; boundary: Bilingual }> = {
  'computer-science': { placement: { zh: '收录解释算法、语言、操作系统、网络、数据库等底层原理的问题。', en: 'Include questions that test algorithms, languages, operating systems, networks, or database fundamentals.' }, boundary: { zh: '若重点是把原理用于架构取舍，归入系统设计；若重点是写出代码，归入编码与抽象。', en: 'Use system design when the main evidence is an architectural trade-off, and coding when it is implementation.' } },
  'coding-abstraction': { placement: { zh: '收录编码实现、代码阅读、抽象设计与复杂度推理。', en: 'Include implementation, code reading, abstraction, and complexity reasoning.' }, boundary: { zh: '诊断既有故障归调试；解释语言或算法原理归计算机基础。', en: 'Use debugging for diagnosing existing failures and computer science for explaining underlying principles.' } },
  debugging: { placement: { zh: '收录从异常现象定位原因、验证假设并修复的问题。', en: 'Include questions about tracing symptoms, validating hypotheses, and fixing faults.' }, boundary: { zh: '预先设计容量与故障策略归系统设计；构建测试和发布门禁归质量、安全与防护。', en: 'Use system design for planned capacity and failure behavior, and quality/security for test or release controls.' } },
  'system-design': { placement: { zh: '收录澄清约束后设计组件、数据流、容量、故障与权衡的问题。', en: 'Include questions that design components, data flows, capacity, and failure behavior under constraints.' }, boundary: { zh: '具体实现代码归编码；测试策略、安全控制和可靠性门禁归质量、安全与防护。', en: 'Use coding for implementation and quality/security for test strategy, security controls, and reliability gates.' } },
  'engineering-systems': { placement: { zh: '收录构建、发布、仓库、开发环境和工程协作基础设施。', en: 'Include build, release, repository, development-environment, and engineering workflow infrastructure.' }, boundary: { zh: '题目主要考察测试策略或防护控制时归质量、安全与防护；系统运行架构归系统设计。', en: 'Use quality/security when test strategy or protective controls are primary, and system design for runtime architecture.' } },
  'ai-engineering': { placement: { zh: '收录把模型接入产品的检索、提示、工具调用、代理与推理服务实现。', en: 'Include implementation of retrieval, prompting, tool use, agents, and inference services in products.' }, boundary: { zh: '若核心是评估责任、治理、风险审批或人工监督，优先归对应的质量防护、交付或责任能力。', en: 'When the core evidence is evaluation ownership, governance, risk approval, or human oversight, use the relevant quality, delivery, or responsibility capability.' } },
  'product-discovery-design': { placement: { zh: '收录用户研究、研究招募、访谈方法、信息架构、交互与体验验证的专业实践。', en: 'Include craft practice in user research, recruitment, interviewing, information architecture, interaction, and experience validation.' }, boundary: { zh: '判断问题是否值得解决、方案是否创造价值归 C 产品判断；设计资源取舍也仍按主要判断目标归 C。', en: 'Use C product judgment for deciding whether a problem or solution creates value, including design trade-offs.' } },
  'quality-security-safety': { placement: { zh: '收录测试策略、质量门禁、威胁建模、安全隐私控制和可靠性工程。', en: 'Include test strategy, quality gates, threat modeling, security and privacy controls, and reliability engineering.' }, boundary: { zh: '只讨论架构中的单项安全权衡归系统设计；凭证迁移流程主要考察工程体系时归工程体系。', en: 'Use system design for a security trade-off inside a broader architecture, and engineering systems when credential migration workflow is primary.' } },
  'ai-evaluation-governance': { placement: { zh: '收录 AI 系统评估设计、发布治理、风险分级、人工监督与责任追溯。', en: 'Include AI evaluation design, release governance, risk tiers, human oversight, and accountability.' }, boundary: { zh: '模型接入、检索、提示和工具实现归 AI 工程；治理判断是题目主要证据时归本叶。具体安全控制可关联质量安全、交付或责任能力。', en: 'Use AI engineering for model integration, retrieval, prompting, and tool implementation; use this leaf when governance judgment is primary. Specific controls may also involve quality, delivery, or responsibility capabilities.' } },
  'business-context': { placement: { zh: '收录业务如何运作、参与者是谁、价值与约束从何而来的问题。', en: 'Include questions about how a business works, who participates, and where its value and constraints come from.' }, boundary: { zh: '若需比较市场结构、竞争、单位经济或商业模式并作选择，归 C 市场与经济判断。', en: 'Use C market/economic judgment when the task is to assess market structure, competition, unit economics, or business models.' } },
  'product-project-model': { placement: { zh: '收录表达产品、项目、领域对象、边界、状态与关系的问题。', en: 'Include questions that model products, projects, domain objects, boundaries, states, and relationships.' }, boundary: { zh: '对象与规则如何表示归 B；值不值得做及结果如何取舍归 C。', en: 'Use B for representing objects and rules, and C for whether work is worth doing and how to trade off outcomes.' } },
  'commercial-rules': { placement: { zh: '收录定价、计费、退款、分成、结算和账务规则的表达与映射。', en: 'Include the representation and mapping of pricing, billing, refunds, revenue share, settlement, and accounting rules.' }, boundary: { zh: '判断市场是否有吸引力、价格策略是否划算归 C 市场与经济判断。', en: 'Use C market/economic judgment to assess market attractiveness or whether a pricing strategy pays off.' } },
  'data-model': { placement: { zh: '收录实体关系、粒度、数据质量、存储映射和数据生命周期。', en: 'Include entity relationships, grain, data quality, storage mapping, and data lifecycle.' }, boundary: { zh: '特征定义和时间窗口归特征模型；业务指标的因果解释归 C 指标与因果。', en: 'Use feature model for feature definitions and time windows, and C metrics/causality for interpreting business metrics.' } },
  'feature-model': { placement: { zh: '收录特征口径、事件时间、窗口、回填与可复算定义。', en: 'Include feature definitions, event time, windows, backfills, and reproducible computation.' }, boundary: { zh: '通用实体表结构归数据模型；业务指标目标和因果结论归 C。', en: 'Use data model for general entity schemas and C for business metric goals and causal conclusions.' } },
  'model-evolution': { placement: { zh: '收录规则、模式或数据模型变化时的版本、迁移、兼容与历史处理。', en: 'Include versioning, migration, compatibility, and history when rules, schemas, or data models change.' }, boundary: { zh: '新模型本身怎样设计归 B 对应模型叶子；迁移执行协调归 D。', en: 'Use the corresponding B model leaf for designing a new model and D for coordinating migration execution.' } },
  'product-judgment': { placement: { zh: '收录识别真实用户问题、评估方案价值和产品体验目标的问题。', en: 'Include questions about real user problems, solution value, and product experience goals.' }, boundary: { zh: '研究方法和设计工艺归 A 产品发现与体验设计；优先顺序归优先级与取舍。', en: 'Use A product discovery/design for research methods and design craft, and prioritization for sequencing.' } },
  prioritization: { placement: { zh: '收录多项需求或机会竞争容量时的顺序、延后与放弃判断。', en: 'Include sequencing, deferral, and stopping decisions when work competes for capacity.' }, boundary: { zh: '长期目标和阶段安排归规划；具体资源分配执行归 D 容量与依赖。', en: 'Use planning for long-term direction and phases, and D capacity/dependencies for operational allocation.' } },
  planning: { placement: { zh: '收录把方向变成月度、季度或年度目标、假设、阶段与不做清单。', en: 'Include turning direction into monthly, quarterly, or yearly goals, assumptions, phases, and explicit exclusions.' }, boundary: { zh: '选择先做哪项归优先级；跨团队进度、风险与承诺跟踪归 D 项目与 PMO。', en: 'Use prioritization to choose what comes first and D project/PMO for cross-team delivery tracking.' } },
  'metrics-causality': { placement: { zh: '收录指标口径、对照、归因、实验与因果证据强度。', en: 'Include metric definitions, comparisons, attribution, experiments, and causal evidence.' }, boundary: { zh: '关注目标结果、基线、护栏与后续决策的验证归业务结果与验证。', en: 'Use business outcomes/validation when the focus is goals, baselines, guardrails, and decisions after measurement.' } },
  'investment-choices': { placement: { zh: '收录时间、人员、技术债、平台或研究投入的机会成本判断。', en: 'Include opportunity-cost decisions about time, people, technical debt, platforms, or research investment.' }, boundary: { zh: '不同方案先后顺序归优先级；市场结构与单位经济判断归市场与经济判断。', en: 'Use prioritization for ordering options and market/economic judgment for market structure and unit economics.' } },
  'market-economic-judgment': { placement: { zh: '收录市场结构、用户分层、竞争、商业模式与单位经济的分析和选择。', en: 'Include analysis and choices involving market structure, segments, competition, business models, and unit economics.' }, boundary: { zh: '计费、退款和结算机制归 B 商业规则；指标口径与归因归指标与因果。', en: 'Use B commercial rules for billing, refunds, and settlement, and metrics/causality for definitions and attribution.' } },
  'business-outcomes': { placement: { zh: '收录明确目标、基线和护栏，并验证工作是否产生用户或经营结果的问题。', en: 'Include questions that set goals, baselines, and guardrails, then verify user or business outcomes.' }, boundary: { zh: '指标计算、实验设计与归因方法归指标与因果；目标结果和后续决策归本叶。', en: 'Use metrics/causality for calculation, experiment design, and attribution methods; use this leaf for target outcomes and follow-up decisions.' } },
  decomposition: { placement: { zh: '收录把模糊目标拆成问题、假设、任务和可验证里程碑。', en: 'Include breaking vague goals into problems, hypotheses, tasks, and verifiable milestones.' }, boundary: { zh: '决定目标是否值得做归 C；跨团队计划与状态治理归项目与 PMO。', en: 'Use C to judge whether a goal is worthwhile and project/PMO for cross-team planning and status control.' } },
  'capacity-planning': { placement: { zh: '收录人力、预算、依赖和突发负荷如何匹配交付承诺。', en: 'Include matching staffing, budget, dependencies, and interrupt load to delivery commitments.' }, boundary: { zh: '选择哪项工作更有价值归 C；团队长期结构和职责配置归 F 团队设计。', en: 'Use C for which work is more valuable and F team design for long-term structure and responsibilities.' } },
  'project-management': { placement: { zh: '收录项目节奏、状态、风险、变更、依赖与 PMO 协调。', en: 'Include project cadence, status, risk, change, dependencies, and PMO coordination.' }, boundary: { zh: '任务如何拆小归问题拆解；持续运行服务的处置归运营执行或可靠性。', en: 'Use problem decomposition for task breakdown and operations or reliability for ongoing service work.' } },
  'operational-execution': { placement: { zh: '收录持续运营、策略执行、日常机制与问题闭环。', en: 'Include ongoing operations, strategy execution, operating mechanisms, and issue closure.' }, boundary: { zh: '阶段性跨团队项目治理归项目与 PMO；事故诊断、止损和恢复归可靠性与事故。', en: 'Use project/PMO for time-bounded cross-team delivery and reliability/incidents for incident diagnosis and recovery.' } },
  'reliability-incidents': { placement: { zh: '收录观测、事故响应、止损、恢复与复盘行动。', en: 'Include observability, incident response, containment, recovery, and post-incident actions.' }, boundary: { zh: '预先设计质量门禁或安全控制归 A 质量、安全与防护；业务运营策略归运营执行。', en: 'Use A quality/security for planned quality gates or controls and operational execution for business operating strategy.' } },
  communication: { placement: { zh: '收录把信息、判断、背景和依据讲清楚以便他人行动的问题。', en: 'Include making information, judgment, context, and evidence clear enough for others to act.' }, boundary: { zh: '目标冲突的解决归冲突处理；系统性澄清、证据探询可从提问专题进入。', en: 'Use conflict navigation for competing goals; use the questioning path for systematic clarification and evidence seeking.' } },
  'conflict-navigation': { placement: { zh: '收录识别分歧目标、事实、权责并推动解决。', en: 'Include identifying conflicting goals, facts, and decision rights, then moving toward resolution.' }, boundary: { zh: '围绕条件达成交换承诺归协商；没有分歧但需推动支持归干系人影响。', en: 'Use negotiation for exchanging commitments and stakeholder influence for building support without a direct conflict.' } },
  negotiation: { placement: { zh: '收录在约束与利益差异下达成明确、可执行的承诺。', en: 'Include reaching explicit, executable commitments under constraints and differing interests.' }, boundary: { zh: '核心是关系和支持建立归干系人影响；核心是价值冲突处置归冲突处理。', en: 'Use stakeholder influence when support is the core and conflict navigation when resolving competing interests is central.' } },
  'stakeholder-influence': { placement: { zh: '收录没有直接管理权时建立共识、支持与决策影响。', en: 'Include building alignment, support, and decision influence without direct authority.' }, boundary: { zh: '明确交换条件并形成承诺归协商；具体表达清晰度归沟通表达。', en: 'Use negotiation for explicit exchanges and commitments, and communication for clarity of expression.' } },
  feedback: { placement: { zh: '收录给出、接收、校准反馈并跟踪行为变化。', en: 'Include giving, receiving, and calibrating feedback, then tracking behavior change.' }, boundary: { zh: '长期辅导和能力发展归 F 培养与成长；个人如何复盘学习归 G。', en: 'Use F growth/development for ongoing coaching and G for personal reflection and learning.' } },
  'frontline-management': { placement: { zh: '收录直接管理成员、设定预期、反馈并保障团队交付。', en: 'Include directly managing contributors, setting expectations, giving feedback, and enabling delivery.' }, boundary: { zh: '通过多位一线经理管理多个团队归二线管理；团队结构设计归团队设计。', en: 'Use manager-of-managers for leading through other managers and team design for organizational structure.' } },
  'manager-of-managers': { placement: { zh: '收录通过一线经理领导多个团队、校准管理质量和组织决策。', en: 'Include leading multiple teams through frontline managers and calibrating management quality and organizational decisions.' }, boundary: { zh: '直接带团队成员归一线管理；组织边界和团队职责重构归团队设计。', en: 'Use frontline management for directly leading contributors and team design for organizational boundaries and responsibilities.' } },
  'team-design': { placement: { zh: '收录团队边界、结构、职责、协作界面与能力配置。', en: 'Include team boundaries, structure, responsibilities, collaboration interfaces, and capability mix.' }, boundary: { zh: '短期排人排期归 D 容量与依赖；通过经理管理多个团队归二线管理。', en: 'Use D capacity/dependencies for short-term staffing and F manager-of-managers for leading multiple teams through managers.' } },
  hiring: { placement: { zh: '收录岗位定义、招聘取舍、面试设计与候选人判断。', en: 'Include role definition, hiring trade-offs, interview design, and candidate assessment.' }, boundary: { zh: '入职后辅导成长归培养与成长；招聘规划中的容量协调归 D。', en: 'Use growth/development for post-hire coaching and D for hiring capacity coordination.' } },
  'growth-development': { placement: { zh: '收录辅导、能力发展、绩效证据与成长路径。', en: 'Include coaching, capability development, performance evidence, and growth paths.' }, boundary: { zh: '个人把经验迁移到新问题归 G 学习迁移；岗位和团队能力供给归招聘或团队设计。', en: 'Use G learning transfer for an individual applying learning to a new problem and hiring/team design for capability supply.' } },
  'delegation-succession': { placement: { zh: '收录授权决策、责任边界、继任者培养与交接。', en: 'Include delegated decisions, responsibility boundaries, succession development, and handover.' }, boundary: { zh: '一般绩效辅导归培养与成长；组织层级和团队边界重设归团队设计。', en: 'Use growth/development for routine coaching and team design for structural changes.' } },
  'learning-transfer': { placement: { zh: '收录学习新知识、迁移方法并在新情境验证效果。', en: 'Include learning new material, transferring methods, and validating them in a new context.' }, boundary: { zh: '复盘一个已发生项目归结构化复盘；持续设定无人要求的目标归自驱。', en: 'Use structured reflection for reviewing a past project and self-direction for sustaining self-set goals.' } },
  'structured-reflection': { placement: { zh: '收录基于事实复盘决策、行动、影响和可改进之处。', en: 'Include reviewing decisions, actions, impact, and improvements based on evidence.' }, boundary: { zh: '若重点是承受挫折后恢复归韧性；若重点是提炼学习迁移归学习迁移。', en: 'Use resilience for recovery after setbacks and learning transfer for applying lessons elsewhere.' } },
  'resilience-recovery': { placement: { zh: '收录挫折、压力或失败后如何求助、恢复并重新行动。', en: 'Include seeking help, recovering, and acting again after setbacks, pressure, or failure.' }, boundary: { zh: '如何分析错误和改进行动归结构化复盘；长期主动设目标归自驱。', en: 'Use structured reflection for analyzing mistakes and self-direction for long-term self-set goals.' } },
  'self-direction': { placement: { zh: '收录在缺少外部指令时设定目标、管理精力并持续推进。', en: 'Include setting goals, managing effort, and sustaining progress without external direction.' }, boundary: { zh: '遇挫恢复归韧性；职责范围内对结果负责归 H 责任担当。', en: 'Use resilience for recovery after setbacks and H ownership for accountability within a role.' } },
  ownership: { placement: { zh: '收录主动承担职责、闭合问题并对结果负责。', en: 'Include taking responsibility, closing loops, and owning outcomes.' }, boundary: { zh: '是否如实披露事实归诚信；明确职责授权范围归边界。', en: 'Use integrity for truthful disclosure and boundaries for the limits of authority and responsibility.' } },
  integrity: { placement: { zh: '收录如实陈述、承认错误、披露风险并抵制误导。', en: 'Include truthful reporting, admitting mistakes, disclosing risks, and resisting misrepresentation.' }, boundary: { zh: '团队贡献如何拆分归贡献归属；为结果采取行动归责任担当。', en: 'Use attribution for dividing team contribution and ownership for taking action on outcomes.' } },
  attribution: { placement: { zh: '收录区分本人、团队、前任和外部因素的实际贡献。', en: 'Include distinguishing personal, team, prior, and external contributions.' }, boundary: { zh: '事实是否准确披露归诚信；影响结果的判断和行动归责任担当。', en: 'Use integrity for truthful disclosure and ownership for decisions and actions affecting results.' } },
  boundaries: { placement: { zh: '收录职责范围、授权、保密边界与升级时机。', en: 'Include role scope, authority, confidentiality limits, and escalation timing.' }, boundary: { zh: '主动闭合承诺归责任担当；价值观冲突下的如实处理归诚信。', en: 'Use ownership for closing commitments and integrity for truthful action under ethical tension.' } },
  'expectations-fit': { placement: { zh: '收录工作方式、动机、条件与双方预期是否相容。', en: 'Include fit between work style, motivation, conditions, and mutual expectations.' }, boundary: { zh: '对既有结果的事实核验归诚信或贡献归属；岗位能力证据归专业能力。', en: 'Use integrity/attribution for verifying past claims and professional capabilities for role evidence.' } },
};

const leaf = (id: string, zh: string, en: string, zhDesc: string, enDesc: string): Leaf => ({
  id, name: { zh, en }, description: { zh: zhDesc, en: enDesc }, status: 'active', ...guidance[id],
});

export const bands: readonly { id: Band; name: Bilingual; description: Bilingual }[] = [
  { id: 'judgment', name: { zh: '专业与业务判断', en: 'Professional and business judgment' }, description: { zh: '把问题解对、讲清业务，并判断什么值得做。', en: 'Solving problems well, modeling the business, and judging what is worth doing.' } },
  { id: 'delivery-organization', name: { zh: '交付与组织', en: 'Delivery and organization' }, description: { zh: '把方向变成可靠行动，并通过协作与团队持续产出。', en: 'Turning direction into dependable action, through collaboration and teams.' } },
  { id: 'growth', name: { zh: '个人成长与工作方式', en: 'Personal growth and work style' }, description: { zh: '面对未知与反馈如何变化，以及如何守住责任与底线。', en: 'How a person changes under feedback, and how they hold responsibility and boundaries.' } },
];

export const domains: readonly Domain[] = [
  {
    id: 'professional', letter: 'A', band: 'judgment',
    name: { zh: '专业解题与实现', en: 'Professional problem solving and implementation' },
    description: { zh: '能否用岗位专业知识设计、实现和验证一个解法。', en: 'Whether a person can design, build, and verify a solution with the knowledge of their craft.' },
    leaves: [
      leaf('computer-science', '计算机基础', 'Computer-science foundations', '算法、操作系统、网络、数据库等原理，以及它们如何解释真实现象。', 'Algorithms, operating systems, networks, and databases, and how they explain real behavior.'),
      leaf('coding-abstraction', '编码与抽象', 'Coding and abstraction', '把需求写成正确、可读、可演进的代码，并选择合适的抽象。', 'Turning a need into correct, readable, evolvable code with fitting abstractions.'),
      leaf('debugging', '调试与定位', 'Debugging', '从现象出发缩小范围、提出假设、验证并修复。', 'Narrowing from a symptom, forming hypotheses, verifying, and fixing.'),
      leaf('system-design', '系统设计', 'System design', '澄清需求与约束，设计组件、权衡容量与故障。', 'Clarifying requirements and constraints, shaping components, weighing capacity and failure.'),
      leaf('engineering-systems', '工程体系', 'Engineering systems', '构建、发布、仓库协作与质量保障等工程基础设施。', 'Build, release, repository workflows, and the quality tooling around them.'),
      leaf('ai-engineering', 'AI 工程', 'AI engineering', '评估、检索、代理与模型应用的工程实现和边界。', 'Evaluation, retrieval, agents, and the engineering limits of model-backed features.'),
      leaf('product-discovery-design', '产品发现与体验设计', 'Product discovery and experience design', '通过用户研究、原型与体验设计澄清问题并验证方案。', 'Using user research, prototypes, and experience design to clarify problems and validate solutions.'),
      leaf('quality-security-safety', '质量、安全与防护', 'Quality, security, and safety', '设计质量验证、可靠性、安全、隐私与风险防护。', 'Designing for quality validation, reliability, security, privacy, and risk controls.'),
      leaf('ai-evaluation-governance', 'AI 评估与治理', 'AI evaluation and governance', '为 AI 系统建立评估、权限、风险监控、人工介入与责任边界。', 'Establishing evaluation, access controls, risk monitoring, human oversight, and accountability for AI systems.'),
    ],
  },
  {
    id: 'domain-modeling', letter: 'B', band: 'judgment',
    name: { zh: '业务理解与领域建模', en: 'Business understanding and domain modeling' },
    description: { zh: '能否准确表达业务对象、关系、规则与数据含义。', en: 'Whether a person can state business objects, relations, rules, and data meaning precisely.' },
    leaves: [
      leaf('business-context', '业务上下文', 'Business context', '理解业务如何运转、谁是用户、价值从哪里来。', 'How the business runs, who the users are, and where value comes from.'),
      leaf('product-project-model', '产品与项目模型', 'Product and project model', '把产品或项目的对象、边界和状态讲成一个可讨论的模型。', 'Expressing a product or project as objects, boundaries, and states others can discuss.'),
      leaf('commercial-rules', '商业规则', 'Commercial rules', '定价、分成、结算等商业机制及其规则表达。', 'Pricing, revenue share, settlement, and how such rules are expressed.'),
      leaf('data-model', '数据模型', 'Data model', '实体、关系、粒度与数据库映射。', 'Entities, relations, grain, and their mapping to storage.'),
      leaf('feature-model', '特征模型', 'Feature model', '特征口径、时间语义与可复算的计算定义。', 'Feature definitions, time semantics, and reproducible computation.'),
      leaf('model-evolution', '模型演进', 'Model evolution', '规则变化后如何保留历史、迁移与兼容。', 'Keeping history, migrating, and staying compatible when rules change.'),
    ],
  },
  {
    id: 'value-direction', letter: 'C', band: 'judgment',
    name: { zh: '价值判断与方向规划', en: 'Value judgment and direction setting' },
    description: { zh: '为什么做这件事、为什么现在做、怎样判断价值。', en: 'Why do this, why now, and how to judge its value.' },
    leaves: [
      leaf('product-judgment', '产品判断', 'Product judgment', '用户问题是否真实、方案是否值得做。', 'Whether the user problem is real and the solution worth building.'),
      leaf('prioritization', '优先级与取舍', 'Prioritization and trade-offs', '在有限容量下选择、暂缓与放弃。', 'Choosing, deferring, and dropping under limited capacity.'),
      leaf('planning', '规划', 'Planning', '月、季、年规划与不做清单。', 'Monthly, quarterly, and yearly plans, including what not to do.'),
      leaf('metrics-causality', '指标与因果', 'Metrics and causal reasoning', '指标口径、归因与结论边界。', 'Metric definitions, attribution, and the limits of a conclusion.'),
      leaf('investment-choices', '投入选择', 'Investment choices', '能力建设、技术债与机会成本的权衡。', 'Weighing capability building, technical debt, and opportunity cost.'),
      leaf('market-economic-judgment', '市场与经济判断', 'Market and economic judgment', '分析用户分层、市场变化、商业模式、单位经济与竞争取舍。', 'Analyzing user segments, market shifts, business models, unit economics, and competitive trade-offs.'),
      leaf('business-outcomes', '业务结果与验证', 'Business outcomes and validation', '把工作连接到用户和经营结果，设定基线、护栏并验证影响。', 'Connecting work to user and business outcomes, setting baselines and guardrails, and validating impact.'),
    ],
  },
  {
    id: 'delivery', letter: 'D', band: 'delivery-organization',
    name: { zh: '交付执行与持续运营', en: 'Delivery and ongoing operations' },
    description: { zh: '如何把目标变成可靠行动，并运行、纠偏、闭环。', en: 'How to turn a goal into dependable action, then run, correct, and close the loop.' },
    leaves: [
      leaf('decomposition', '问题拆解', 'Problem decomposition', '把模糊目标拆成可估算、可验证的任务。', 'Breaking a vague goal into estimable, verifiable work.'),
      leaf('capacity-planning', '容量与依赖', 'Capacity and dependencies', '容量、依赖、承诺与资源冲突。', 'Capacity, dependencies, commitments, and resource conflicts.'),
      leaf('project-management', '项目与 PMO', 'Project and PMO practice', '节奏、风险、变更与跨项目协调。', 'Cadence, risk, change control, and cross-project coordination.'),
      leaf('operational-execution', '运营执行', 'Operational execution', '策略落地、实验执行与持续运营动作。', 'Landing a strategy, running experiments, and sustaining operations.'),
      leaf('reliability-incidents', '可靠性与事故', 'Reliability and incidents', '观测、事故处置、止损与复盘动作。', 'Observability, incident response, containment, and follow-through.'),
    ],
  },
  {
    id: 'collaboration', letter: 'E', band: 'delivery-organization',
    name: { zh: '协作沟通与影响', en: 'Collaboration, communication, and influence' },
    description: { zh: '如何让他人理解、协商、承诺并共同推进。', en: 'How to help others understand, negotiate, commit, and move together.' },
    leaves: [
      leaf('communication', '沟通表达', 'Communication', '把信息、判断和依据讲到对方能行动。', 'Making information, judgment, and evidence actionable for the listener.'),
      leaf('conflict-navigation', '冲突处理', 'Conflict navigation', '分歧背后的目标、事实与决策权。', 'The goals, facts, and decision rights behind a disagreement.'),
      leaf('negotiation', '协商与承诺', 'Negotiation', '在约束下谈成各方可执行的承诺。', 'Reaching commitments all sides can execute within constraints.'),
      leaf('stakeholder-influence', '干系人影响', 'Stakeholder influence', '没有直接权力时推动跨团队结果。', 'Moving cross-team outcomes without direct authority.'),
      leaf('feedback', '反馈', 'Feedback', '给出与接收反馈，并让它变成行动。', 'Giving and receiving feedback so that it turns into action.'),
    ],
  },
  {
    id: 'people-organization', letter: 'F', band: 'delivery-organization',
    name: { zh: '人才与组织建设', en: 'People and organization building' },
    description: { zh: '如何让团队与管理者持续产出，而不依赖个人补位。', en: 'How teams and managers keep producing without depending on one person filling gaps.' },
    leaves: [
      leaf('frontline-management', '一线管理', 'Frontline management', '带团队交付、1-on-1 与可预期的产出。', 'Leading a team to deliver, one-on-ones, and predictable output.'),
      leaf('manager-of-managers', '二线管理', 'Manager of managers', '通过负责人带多个团队，并约束权力与资源。', 'Leading several teams through managers, with checks on power and resources.'),
      leaf('team-design', '团队设计', 'Team design', '目标、结构与能力配置。', 'Goals, structure, and capability mix.'),
      leaf('hiring', '招聘', 'Hiring', '岗位缺口、面试设计与长期判断。', 'Role gaps, interview design, and long-term judgment.'),
      leaf('growth-development', '培养与成长', 'Growth and development', '成长路径、辅导与绩效证据。', 'Growth paths, coaching, and performance evidence.'),
      leaf('delegation-succession', '授权与继任', 'Delegation and succession', '授权边界、接班与负责人供给。', 'Delegation boundaries, succession, and the supply of leaders.'),
    ],
  },
  {
    id: 'learning-adaptation', letter: 'G', band: 'growth',
    name: { zh: '学习适应与持续成长', en: 'Learning, adaptation, and sustained growth' },
    description: { zh: '面对未知、反馈与挫折，能力如何发生可验证的变化。', en: 'How capability visibly changes in the face of the unknown, feedback, and setbacks.' },
    leaves: [
      leaf('learning-transfer', '学习迁移', 'Learning transfer', '把一个领域学到的东西用到新问题上。', 'Applying what was learned in one area to a new problem.'),
      leaf('structured-reflection', '结构化复盘', 'Structured reflection', '用事实、判断、行动与结果检查自己。', 'Checking oneself through facts, judgment, action, and result.'),
      leaf('resilience-recovery', '韧性与恢复', 'Resilience and recovery', '挫折之后如何求助、恢复并继续改进。', 'How a person seeks help, recovers, and keeps improving after a setback.'),
      leaf('self-direction', '自驱', 'Self-direction', '没人要求时如何设定目标并持续推进。', 'Setting goals and sustaining effort when no one asks.'),
    ],
  },
  {
    id: 'work-responsibility', letter: 'H', band: 'growth',
    name: { zh: '职业责任与工作方式', en: 'Professional responsibility and work style' },
    description: { zh: '如何守住事实、责任与底线，双方预期是否相容。', en: 'How a person holds to facts, responsibility, and limits, and whether expectations fit both ways.' },
    leaves: [
      leaf('ownership', '责任担当', 'Ownership', '对结果负责，包括没人要求的部分。', 'Taking responsibility for outcomes, including the parts nobody asked for.'),
      leaf('integrity', '诚信', 'Integrity', '承认错误、披露风险、不夸大。', 'Admitting mistakes, disclosing risk, and not overstating.'),
      leaf('attribution', '贡献归属', 'Attribution', '清楚区分个人与团队的贡献。', 'Separating personal contribution from the team’s.'),
      leaf('boundaries', '边界', 'Boundaries', '职责边界、授权与应当升级的情形。', 'Role limits, delegated authority, and when to escalate.'),
      leaf('expectations-fit', '预期与匹配', 'Expectations and fit', '工作方式、动机与双方条件是否相容。', 'Whether work style, motivation, and both sides’ terms are compatible.'),
    ],
  },
];

export const capabilityIds: readonly string[] = domains.flatMap((domain) => domain.leaves.map((item) => `${domain.id}.${item.id}`));

type FacetEntry = { id: string; name: Bilingual };
const f = (id: string, zh: string, en: string): FacetEntry => ({ id, name: { zh, en } });

export const facetDefinitions = {
  topics: [
    f('data-structures', '数据结构与算法', 'Data structures and algorithms'), f('operating-systems', '操作系统', 'Operating systems'),
    f('compiler-design', '编译原理', 'Compiler design'), f('computer-networks', '计算机网络', 'Computer networks'),
    f('databases', '数据库', 'Databases'), f('concurrency', '并发', 'Concurrency'), f('distributed-systems', '分布式系统', 'Distributed systems'),
    f('frontend', '前端', 'Frontend'), f('backend', '后端', 'Backend'), f('mobile', '客户端', 'Mobile'),
    f('programming-languages', '编程语言', 'Programming languages'), f('frameworks', '框架', 'Frameworks'),
    f('engineering-systems', '工程体系', 'Engineering systems'), f('devops', 'DevOps', 'DevOps'), f('microservices', '微服务', 'Microservices'),
    f('micro-frontends', '微前端', 'Micro-frontends'), f('monorepo', 'Monorepo', 'Monorepo'), f('system-design', '系统设计', 'System design'),
    f('debugging', '调试', 'Debugging'), f('reliability', '可靠性', 'Reliability'), f('security', '安全', 'Security'),
    f('ai-engineering', 'AI 工程', 'AI engineering'), f('product-thinking', '产品思维', 'Product thinking'), f('product-discovery', '产品探索', 'Product discovery'),
    f('questioning', '提问与探询', 'Questioning and inquiry'), f('business-planning', '业务规划', 'Business planning'),
    f('technical-planning', '技术规划', 'Technical planning'), f('team-planning', '团队规划', 'Team planning'),
    f('commercialization', '商业化', 'Commercialization'), f('data-modeling', '数据建模', 'Data modeling'), f('feature-modeling', '特征模型', 'Feature modeling'),
    f('metrics', '指标与度量', 'Metrics and measurement'), f('planning', '规划', 'Planning'), f('prioritization', '优先级', 'Prioritization'),
    f('resource-allocation', '资源分配', 'Resource allocation'), f('execution', '执行', 'Execution'), f('risk-management', '风险管理', 'Risk management'),
    f('operations', '运营', 'Operations'), f('growth-experiments', '增长实验', 'Growth experiments'), f('communication', '沟通', 'Communication'),
    f('conflict-resolution', '冲突处理', 'Conflict resolution'), f('negotiation', '协商', 'Negotiation'), f('feedback', '反馈', 'Feedback'),
    f('management', '团队管理', 'Team management'), f('hiring', '招聘', 'Hiring'), f('promotion', '晋升', 'Promotion'),
    f('learning', '学习成长', 'Learning'), f('resilience', '韧性与恢复', 'Resilience and recovery'),
    f('boundaries', '责任与授权边界', 'Responsibility and authority boundaries'),
    f('accessibility', '无障碍', 'Accessibility'), f('ethics', '职业伦理', 'Professional ethics'),
  ],
  roles: [
    f('engineering', '通用工程', 'General software engineering'), f('frontend', '前端', 'Frontend'), f('backend', '后端', 'Backend'), f('mobile', '客户端', 'Mobile'),
    f('ai-engineer', 'AI 工程', 'AI engineering'), f('data', '数据工程', 'Data engineering'), f('product', '产品', 'Product'), f('operations', '运营', 'Operations'),
    f('marketing', '市场与增长', 'Marketing and growth'), f('design', '设计', 'Design'), f('manager', '管理', 'Management'), f('pmo', '项目管理', 'Project management'),
  ],
  responsibilityScopes: [
    f('individual', '个人工作', 'Individual work'), f('team', '项目或团队', 'A project or team'),
    f('multiple-teams', '多个团队', 'Multiple teams'), f('organization', '组织层面', 'Organization-wide'),
  ],
  careerTracks: [
    f('individual-contributor', '专业贡献者', 'Individual contributor'), f('team-manager', '团队管理者', 'Team manager'),
    f('senior-manager', '管理管理者', 'Senior manager'), f('executive', '高管', 'Executive'),
  ],
  scenarios: [
    f('interview', '外部求职面试', 'External job interviews'), f('campus', '校招准备', 'Campus hiring'), f('hiring', '面试官设计', 'Designing as an interviewer'),
    f('promotion', '晋升准备', 'Promotion preparation'), f('self-reflection', '自我复盘', 'Self-reflection'), f('operations-review', '运营复盘', 'Operations review'),
  ],
  formats: [
    f('knowledge', '知识解释', 'Knowledge explanation'), f('coding', '编码', 'Coding'), f('debugging', '调试', 'Debugging'),
    f('system-design', '系统设计', 'System design'), f('behavioral', '行为证据', 'Behavioral evidence'), f('case', '案例分析', 'Case analysis'),
    f('planning', '规划', 'Planning'), f('artifact-review', '作品审查', 'Artifact review'),
  ],
} as const satisfies Record<string, readonly FacetEntry[]>;

export type FacetKind = keyof typeof facetDefinitions;
export const facetKinds = Object.keys(facetDefinitions) as FacetKind[];

export const facetMeta: Record<FacetKind, { name: Bilingual; description: Bilingual }> = {
  topics: { name: { zh: '知识或方法主题', en: 'Topic' }, description: { zh: '题目用到的知识或方法，如数据库、增长实验。它不决定题目考察什么能力。', en: 'The knowledge or method a question touches, such as databases or growth experiments. It does not decide which capability is examined.' } },
  roles: { name: { zh: '岗位', en: 'Role' }, description: { zh: '按通用工程、前端、后端、客户端、AI 与数据工程方向选题。产品、运营与设计内容作为工程师的拓展能力。', en: 'Choose a software engineering specialization. Product, operations, and design are expansion capabilities for engineers.' } },
  responsibilityScopes: { name: { zh: '责任范围', en: 'Responsibility scope' }, description: { zh: '为多大范围负责。范围大不等于表现好。', en: 'How wide the responsibility reaches. A wider scope does not mean better performance.' } },
  careerTracks: { name: { zh: '职业轨道', en: 'Career track' }, description: { zh: '专业贡献者、团队管理者或管理管理者。管理不是所有人的下一步。', en: 'Individual contributor, team manager, or senior manager. Management is not everyone’s next step.' } },
  scenarios: { name: { zh: '使用场景', en: 'Use case' }, description: { zh: '按外部求职面试、校招、面试官设计、内部晋升或复盘进入同一题库。', en: 'Browse the same question library by external interviews, campus hiring, interviewer design, internal promotion, or reflection.' } },
  formats: { name: { zh: '题型', en: 'Question format' }, description: { zh: '怎样采集证据：知识解释、编码、案例、行为等。', en: 'How evidence is gathered: explanation, coding, case, behavioral, and so on.' } },
};

export const taxonomy = {
  capabilities: capabilityIds,
  topics: facetDefinitions.topics.map((entry) => entry.id),
  roles: facetDefinitions.roles.map((entry) => entry.id),
  responsibilityScopes: facetDefinitions.responsibilityScopes.map((entry) => entry.id),
  careerTracks: facetDefinitions.careerTracks.map((entry) => entry.id),
  scenarios: facetDefinitions.scenarios.map((entry) => entry.id),
  formats: facetDefinitions.formats.map((entry) => entry.id),
} as const satisfies Record<string, readonly string[]>;

export const hasTaxonomyId = (facet: keyof typeof taxonomy, id: string): boolean =>
  (taxonomy[facet] as readonly string[]).includes(id);

export const facetEntries = (kind: FacetKind, locale: Locale) =>
  facetDefinitions[kind].map((entry) => ({ id: entry.id, label: pick(entry.name, locale) }));

export const facetLabel = (kind: FacetKind, id: string, locale: Locale): string => {
  const entry = (facetDefinitions[kind] as readonly FacetEntry[]).find((item) => item.id === id);
  return entry ? pick(entry.name, locale) : id;
};

export const splitCapability = (capabilityId: string) => {
  const [domainId, leafId] = capabilityId.split('.');
  const domain = domains.find((item) => item.id === domainId);
  const leafEntry = domain?.leaves.find((item) => item.id === leafId);
  return { domain, leaf: leafEntry };
};

export const isPlannedCapability = (capabilityId: string): boolean => splitCapability(capabilityId).leaf?.status === 'planned';

export const capabilityLabel = (capabilityId: string, locale: Locale): string => {
  const { leaf: leafEntry } = splitCapability(capabilityId);
  return leafEntry ? pick(leafEntry.name, locale) : capabilityId;
};

export const crossDomainPaths = [
  {
    id: 'product-end-to-end',
    name: { zh: '产品与全链路思维', en: 'Product and end-to-end thinking' },
    description: { zh: '串联业务模型（B）、价值判断（C）与交付闭环（D）：从用户问题出发，判断值不值得做，并追踪行动是否形成结果。', en: 'A path across modeling (B), judgment (C), and delivery (D): start from the user’s problem, judge whether it is worth doing, and trace whether action produced a result.' },
    domains: ['domain-modeling', 'value-direction', 'delivery'],
    topics: ['product-thinking'],
  },
  {
    id: 'asking-better-questions',
    name: { zh: '提问、追问与探询', en: 'Questioning, probing, and inquiry' },
    description: { zh: '从澄清目标和约束，到检验假设、寻找反例与证据，再把答案转成下一步判断。每道题仍按主要考察能力归类。', en: 'Move from clarifying goals and constraints to testing assumptions, finding counterexamples and evidence, then turning answers into the next decision. Each question keeps its primary capability.' },
    domains: ['collaboration', 'professional', 'domain-modeling', 'value-direction', 'people-organization'],
    topics: ['questioning'],
  },
  {
    id: 'business-planning',
    name: { zh: '业务规划', en: 'Business planning' },
    description: { zh: '沿着机会识别、战略对齐、目标与指标、验证顺序和业务结果，检查一份业务计划如何形成并调整。', en: 'Follow opportunity discovery, strategic alignment, goals and measures, validation sequence, and outcomes to examine how a business plan is formed and adapted.' },
    domains: ['domain-modeling', 'value-direction', 'delivery'],
    topics: ['business-planning'],
  },
  {
    id: 'technical-planning',
    name: { zh: '技术规划', en: 'Technical planning' },
    description: { zh: '把技术方向、架构演进、工程投入与阶段性验证连接起来，观察技术路线如何服务业务目标。', en: 'Connect technical direction, architecture evolution, engineering investment, and staged validation to see how a technical roadmap serves business goals.' },
    domains: ['professional', 'value-direction', 'delivery'],
    topics: ['technical-planning'],
  },
  {
    id: 'team-planning',
    name: { zh: '团队规划', en: 'Team planning' },
    description: { zh: '从组织目标和团队能力出发，讨论结构、人员、依赖和管理节奏如何转成可调整的计划。', en: 'Start from organizational goals and team capabilities, then examine how structure, staffing, dependencies, and management cadence become an adaptable plan.' },
    domains: ['people-organization', 'delivery', 'value-direction'],
    topics: ['team-planning'],
  },
] as const;

// Public role navigation is narrower than the source/attribution vocabulary.
export const audienceRoles = facetDefinitions.roles.filter(role => isAudienceRole(role.id));
