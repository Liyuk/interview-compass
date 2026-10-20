import type { Bilingual } from '../../lib/taxonomy';

export const b = (zh: string, en: string): Bilingual => ({ zh, en });
export { tiers, type ResponsibilityTier } from './registry';
export interface CraftStage { name: Bilingual; outcome: Bilingual; craft: Bilingual }
export interface RoleCraft { stages: CraftStage[]; artifacts: Bilingual; risks: Bilingual; capabilities: string[] }
const s = (zh: string, en: string, outcome: Bilingual, craft: Bilingual): CraftStage => ({ name: b(zh, en), outcome, craft });

// Editorial responsibility profiles, not company-level mappings. Each role defines its own work and results.
export const roleCraft: Record<string, RoleCraft> = {
  data: {
    capabilities: ['domain-modeling.data-model', 'value-direction.metrics-causality', 'delivery.decomposition'],
    artifacts: b('指标字典、可复算分析、数据血缘、质量检查或模型评估记录', 'Metric definitions, reproducible analyses, lineage, quality checks, or model evaluations'),
    risks: b('口径、粒度、样本偏差、时间泄漏、隐私及错误决策风险', 'Definitions, grain, sample bias, temporal leakage, privacy, and decision risk'),
    stages: [
      s('初级数据工程师', 'Junior Data Engineer', b('完成限定的数据任务，解释口径并检查异常。', 'Complete a bounded data task, explain definitions, and check anomalies.'), b('在指导下核对粒度、连接关系与计算结果，保留复算步骤。', 'Check grain, joins, and calculations with guidance and retain reproduction steps.')),
      s('数据工程师', 'Data Engineer', b('独立完成分析、管线或模型任务，说明它支持哪个决策。', 'Own an analysis, pipeline, or model task and explain the decision it supports.'), b('选择适用方法，验证数据质量与偏差，区分相关性和因果结论。', 'Select fitting methods, validate quality and bias, and distinguish correlation from causation.')),
      s('高级数据工程师', 'Senior Data Engineer', b('解决跨口径或复杂数据问题，验证对决策和生产的实际作用。', 'Resolve complex data or definition conflicts and verify effects on decisions and production.'), b('比较分析或建模方案，处理时间语义、数据变化与验证偏差。', 'Compare analysis or modeling approaches and handle time semantics, data changes, and validation bias.')),
      s('资深数据工程师', 'Staff Data Engineer', b('对关键数据领域的方法、可信度和持续使用效果负责。', 'Own methods, trustworthiness, and sustained adoption in a critical data domain.'), b('建立跨团队可复用的数据标准、方法与演进机制，并验证采用效果。', 'Establish reusable data standards, methods, and evolution practices and validate adoption.')),
      s('数据团队管理者', 'Data Team Manager', b('让团队的数据投入对应清晰业务决策并可靠交付。', 'Connect team data investments to clear business decisions and reliable delivery.'), b('校准分析、工程或建模工作的质量，配置能力并授权专业判断。', 'Calibrate analysis, engineering, or modeling quality, allocate skills, and delegate technical judgment.')),
      s('数据组织管理者', 'Multi-team Data Leader', b('通过多个负责人配置数据能力，验证数据投入的组合价值。', 'Allocate data capability through multiple leaders and validate portfolio value.'), b('协调数据所有权、跨域口径与治理责任，培养专业和管理负责人。', 'Align data ownership, cross-domain definitions, and governance responsibilities while developing leaders.')),
    ],
  },
  product: {
    capabilities: ['professional.product-discovery-design', 'value-direction.product-judgment', 'domain-modeling.product-project-model'],
    artifacts: b('用户研究、问题定义、方案对比、决策记录、上线验证和停止投入的依据', 'User research, problem definitions, option comparisons, decision records, launch validation, and stopping criteria'),
    risks: b('用户样本偏差、伪需求、指标替代、上线副作用和机会成本', 'Research bias, false demand, proxy metrics, launch side effects, and opportunity cost'),
    stages: [
      s('初级产品经理', 'Associate Product Manager', b('在指导下澄清限定需求，跟踪一次交付是否解决原问题。', 'Clarify a bounded need with guidance and check whether delivery solves it.'), b('还原用户流程与约束，检查需求描述和验收条件的一致性。', 'Map user flows and constraints and check consistency between requirements and acceptance criteria.')),
      s('产品经理', 'Product Manager', b('独立定义产品问题、比较方案，验证用户或业务结果。', 'Independently define a product problem, compare options, and validate user or business outcomes.'), b('将研究、产品模型与实验连接起来，说明为什么选择某个解法。', 'Connect research, product models, and experiments and explain the chosen solution.')),
      s('高级产品经理', 'Senior Product Manager', b('处理复杂产品决策，协调多个参与方并验证取舍的后果。', 'Handle complex product decisions, align stakeholders, and validate trade-off consequences.'), b('对比竞争或历史基线，分清用户分层、依赖和结果归因。', 'Compare competitive or historical baselines and distinguish segments, dependencies, and attribution.')),
      s('资深产品专家', 'Principal Product Manager', b('对关键产品领域的方向与长期机会组合负责。', 'Own direction and long-term opportunities in a critical product domain.'), b('建立持续发现和验证机制，调整领域模型与投资顺序，保留停止条件。', 'Establish continuous discovery and validation, evolve domain models and investment order, and retain stopping criteria.')),
      s('产品团队管理者', 'Product Team Manager', b('通过团队持续形成有效产品决策与交付结果。', 'Build sustained product decision and delivery capability through a team.'), b('校准产品判断质量、授权边界及人才配置，不以亲自写需求数量衡量管理。', 'Calibrate product judgment, decision rights, and talent allocation rather than count personally written requirements.')),
      s('产品组织管理者', 'Multi-team Product Leader', b('协调多产品方向、投入和组织能力，验证组合价值。', 'Align multi-product direction, investment, and organizational capability and validate portfolio value.'), b('通过产品负责人建设策略、组合复核与退出机制，并处理跨产品冲突。', 'Build strategy, portfolio review, and exit mechanisms through product leaders and resolve cross-product conflicts.')),
    ],
  },
  operations: {
    capabilities: ['delivery.operational-execution', 'value-direction.business-outcomes', 'domain-modeling.business-context'],
    artifacts: b('运营流程、分群策略、执行记录、实验结果、异常闭环和投入明细', 'Operating workflows, segment strategies, execution logs, experiments, issue closure, and investment records'),
    risks: b('流量质量、激励套利、短期指标透支、服务负荷和策略复制成本', 'Traffic quality, incentive abuse, short-term metric extraction, service load, and replication cost'),
    stages: [
      s('初级运营专员', 'Entry-level operations specialist', b('按明确规则完成运营任务，核验指标与异常。', 'Complete defined operations tasks and verify metrics and anomalies.'), b('理解触达、人群与流程，留存执行依据，遇到规则外情况及时升级。', 'Understand outreach, audiences, and workflows, retain execution evidence, and escalate exceptions.')),
      s('运营专员', 'Operations specialist', b('独立运行一项运营策略，跟踪效果与持续成本。', 'Run an operating strategy independently and track effectiveness and ongoing cost.'), b('选择分群、触点和流程方案，处理日常异常并验证闭环。', 'Choose segmentation, touchpoints, and workflows, handle anomalies, and verify closure.')),
      s('高级运营专业人员', 'Senior operations specialist', b('解决复杂运营问题，区分策略作用与外部变化。', 'Solve complex operating problems and distinguish strategy effects from external changes.'), b('比较运营机制与实验方案，识别效果衰减、资源冲突及用户副作用。', 'Compare mechanisms and experiments and identify decay, resource conflicts, and user side effects.')),
      s('资深运营专家', 'Principal operations specialist', b('建设跨团队可持续的运营体系，验证复制效益。', 'Build sustainable cross-team operating systems and verify replication benefits.'), b('设计策略演进、异常治理和标准化机制，明确统一与地方适配的边界。', 'Design strategy evolution, exception governance, and standards with clear local adaptation boundaries.')),
      s('运营团队管理者', 'Operations Team Manager', b('对团队运营结果、运行容量与人员健康负责。', 'Own team operating results, capacity, and staff health.'), b('校准策略、排班、升级和质量机制，减少依赖个别人持续救火。', 'Calibrate strategy, staffing, escalation, and quality mechanisms and reduce dependence on individual firefighting.')),
      s('运营组织管理者', 'Multi-team Operations Leader', b('统筹多业务运营组合，验证效率、质量和可持续性。', 'Coordinate multi-business operations and validate efficiency, quality, and sustainability.'), b('通过负责人处理区域或业务差异，建设运营治理与继任机制。', 'Address regional or business differences through leaders and establish governance and succession.')),
    ],
  },
  marketing: {
    capabilities: ['value-direction.market-economic-judgment', 'value-direction.metrics-causality', 'domain-modeling.business-context'],
    artifacts: b('市场研究、定位依据、渠道实验、增量分析、预算与品牌影响记录', 'Market research, positioning evidence, channel experiments, incrementality analyses, budgets, and brand impact records'),
    risks: b('归因偏差、渠道饱和、获客质量、品牌损耗、隐私及单位经济恶化', 'Attribution bias, saturation, acquisition quality, brand damage, privacy, and deteriorating unit economics'),
    stages: [
      s('初级市场专业人员', 'Entry-level marketing specialist', b('完成限定研究或渠道执行任务，准确报告效果口径。', 'Complete bounded research or channel execution and report metric definitions accurately.'), b('核验目标人群、素材、渠道和数据来源，区分执行偏差与效果变化。', 'Verify audiences, creative, channels, and data sources and separate execution deviations from outcome changes.')),
      s('市场与增长专业人员', 'Marketing and growth specialist', b('独立设计并执行一个市场或增长实验，说明投入与效果。', 'Design and run a marketing or growth experiment and explain investment and effects.'), b('比较渠道或定位选项，检查转化链路、增量与客户质量。', 'Compare channel or positioning options and check conversion, incrementality, and customer quality.')),
      s('高级市场与增长专业人员', 'Senior marketing and growth specialist', b('处理复杂增长问题，验证跨渠道取舍与长期后果。', 'Handle complex growth problems and validate cross-channel trade-offs and long-term consequences.'), b('结合市场竞争、实验和单位经济，辨别渠道贡献与相互挤占。', 'Combine competition, experiments, and unit economics to distinguish channel contribution from cannibalization.')),
      s('资深市场与增长专家', 'Principal marketing and growth specialist', b('对关键市场机会和可持续增长机制负责。', 'Own critical market opportunities and sustainable growth mechanisms.'), b('演进定位、渠道组合与度量方法，比较短期获取和长期品牌价值。', 'Evolve positioning, channel portfolios, and measurement and compare acquisition with long-term brand value.')),
      s('市场与增长团队管理者', 'Marketing and growth team manager', b('对团队投入、市场结果和专业能力建设负责。', 'Own team investment, market outcomes, and professional capability.'), b('校准实验质量、预算授权、品牌护栏与人才配置。', 'Calibrate experiment quality, budget authority, brand guardrails, and talent allocation.')),
      s('市场与增长组织管理者', 'Marketing and growth organization leader', b('统筹市场组合与组织能力，验证长期经营贡献。', 'Coordinate market portfolios and organizational capability and validate long-term business contribution.'), b('通过负责人校准市场选择、预算再分配和品牌增长协同。', 'Calibrate market selection, budget reallocation, and brand-growth coordination through leaders.')),
    ],
  },
  design: {
    capabilities: ['professional.product-discovery-design', 'value-direction.product-judgment', 'collaboration.communication'],
    artifacts: b('研究记录、流程图、交互原型、设计对比、可用性验证与落地走查', 'Research records, flows, interactive prototypes, option comparisons, usability studies, and implementation reviews'),
    risks: b('研究偏差、无障碍缺口、体验不一致、实现约束和设计维护成本', 'Research bias, accessibility gaps, inconsistent experiences, implementation constraints, and maintenance cost'),
    stages: [
      s('初级设计师', 'Junior designer', b('在指导下交付限定流程的设计，检查基本可用性。', 'Design a bounded flow with guidance and check basic usability.'), b('表达用户路径和状态，遵循现有规范并检查异常与无障碍需求。', 'Represent user paths and states, follow existing standards, and check exceptions and accessibility.')),
      s('设计师', 'Designer', b('独立澄清体验问题，比较设计方案并验证用户效果。', 'Clarify an experience problem independently, compare designs, and validate user effects.'), b('把研究、信息架构、交互和实现约束连起来，走查交付质量。', 'Connect research, information architecture, interaction, and implementation constraints and review delivery quality.')),
      s('高级设计师', 'Senior designer', b('解决复杂多角色或跨流程体验问题，验证关键取舍。', 'Resolve complex multi-role or cross-flow experiences and validate trade-offs.'), b('对比不同心智模型与交互方案，处理冲突目标和系统状态。', 'Compare mental models and interaction options and handle conflicting goals and system states.')),
      s('资深设计专家', 'Principal design specialist', b('对关键体验领域和跨产品一致性及实际效果负责。', 'Own a critical experience domain, cross-product consistency, and verified effects.'), b('建设研究和设计机制，明确设计系统的复用边界与演进成本。', 'Establish research and design practices and define design-system reuse boundaries and evolution costs.')),
      s('设计团队管理者', 'Design team manager', b('通过团队稳定产出有依据、可落地的体验改进。', 'Enable a team to deliver evidence-based, implementable experience improvements consistently.'), b('校准研究、评审、设计授权和人才能力，保护合理探索空间。', 'Calibrate research, critique, design authority, and talent while protecting space for exploration.')),
      s('设计组织管理者', 'Design organization leader', b('通过多个负责人建设设计能力与产品体验组合。', 'Build design capability and a portfolio of product experiences through leaders.'), b('协调设计资源、专业治理与业务方向，验证组织机制的实际效用。', 'Align design resources, craft governance, and business direction and verify organizational mechanisms.')),
    ],
  },
  pmo: {
    capabilities: ['delivery.project-management', 'delivery.capacity-planning', 'value-direction.planning'],
    artifacts: b('承诺基线、依赖图、风险和决策记录、变更历史、资源计划及交付验证', 'Commitment baselines, dependency maps, risks, decisions, change histories, resource plans, and delivery validation'),
    risks: b('虚假进度、关键依赖遗漏、过度承诺、治理负担和资源争用', 'Misleading progress, missing dependencies, overcommitment, governance overhead, and resource contention'),
    stages: [
      s('项目协调者', 'Project coordinator', b('准确跟进限定任务的承诺、状态和依赖。', 'Track commitments, status, and dependencies accurately for bounded work.'), b('区分事实与预测，识别偏差并把问题交给有权限的负责人。', 'Distinguish facts from forecasts, recognize deviations, and escalate to authorized owners.')),
      s('项目经理', 'Project manager', b('独立推进项目交付，明确完成口径和变化条件。', 'Own project delivery with clear completion criteria and change conditions.'), b('建立任务、依赖、风险和变更管理，协调承诺与可用容量。', 'Manage tasks, dependencies, risks, and changes and align commitments with capacity.')),
      s('高级项目/项目群经理', 'Senior project or program manager', b('处理复杂跨团队项目群中的目标与资源冲突。', 'Resolve goal and resource conflicts in complex cross-team programs.'), b('比较关键路径和重排方案，让决策者明确接受范围、时间和风险取舍。', 'Compare critical paths and resequencing and make scope, timing, and risk trade-offs explicit to decision owners.')),
      s('项目组合治理专家', 'Project portfolio governance specialist', b('对关键项目组合的治理质量和决策有效性负责。', 'Own governance quality and decision effectiveness for a critical project portfolio.'), b('建设组合复核、资源协调和退出机制，检查治理是否降低真实成本。', 'Build portfolio review, resource coordination, and exit mechanisms and check whether governance reduces real costs.')),
      s('项目管理团队管理者', 'Program Management Team Manager', b('建设团队交付协调和风险管理能力。', 'Build team capability in delivery coordination and risk management.'), b('校准项目负责人能力、升级边界与治理强度，不用会议数量代替效果。', 'Calibrate project leaders, escalation boundaries, and governance intensity without substituting meeting counts for outcomes.')),
      s('项目管理组织管理者', 'Multi-team Program Leader', b('通过负责人提升多团队组合交付与资源决策质量。', 'Improve multi-team portfolio delivery and resource decisions through leaders.'), b('治理组织级依赖、承诺冲突与能力缺口，明确 PMO 与业务决策者的权限。', 'Govern organizational dependencies, commitment conflicts, and capability gaps and clarify PMO and business decision rights.')),
    ],
  },
  manager: {
    capabilities: ['people-organization.hiring', 'people-organization.team-design', 'value-direction.planning'],
    artifacts: b('人员配置、招聘和发展依据、授权记录、团队结果、继任与组织调整记录', 'Staffing, hiring and development evidence, delegation, team outcomes, succession, and organizational changes'),
    risks: b('权责不清、评价偏差、短期透支、关键人依赖及利益冲突', 'Unclear accountability, assessment bias, short-term extraction, key-person dependency, and conflicts of interest'),
    stages: [
      s('一线管理者', 'First-line manager', b('对团队结果、人才和健康负责，并明确实际授权。', 'Own team outcomes, talent, and health within a clear mandate.'), b('建立招聘、绩效、发展和授权机制，确保团队成员能够承担结果。', 'Establish hiring, performance, development, and delegation practices that enable people to own outcomes.')),
      s('管理管理者', 'Multi-team Engineering Leader', b('通过多个管理者建设组织能力并验证经营或服务结果。', 'Build organizational capability through managers and verify business or service outcomes.'), b('校准管理质量、组织设计、资源组合和继任风险，不靠越级代做维持结果。', 'Calibrate management quality, organization design, resource portfolios, and succession rather than routinely bypass managers.')),
    ],
  },
};

export const engineeringEvidence: Record<string, Bilingual[]> = {
  engineering: [b('设计决策、实现或评审记录、验证结果及运行反馈；说明本人做了什么。', 'Design decisions, implementation or review records, validation, and operational feedback; explain personal actions.')],
  frontend: [b('交互与状态设计、组件边界、无障碍、性能测量和浏览器验证记录。', 'Interaction and state design, component boundaries, accessibility, performance measurements, and browser validation.')],
  backend: [b('接口与数据一致性设计、容量/失败语义、迁移、压测和运行证据。', 'API and data consistency decisions, capacity and failure semantics, migrations, load tests, and operational evidence.')],
  mobile: [b('客户端生命周期、离线与同步、资源预算、兼容性和发布回滚证据。', 'Client lifecycle, offline behavior and synchronization, resource budgets, compatibility, and release rollback evidence.')],
  'ai-engineer': [b('评估样本、基线对比、模型/检索/工具边界、失败恢复和质量成本记录。', 'Evaluation samples, baseline comparisons, model/retrieval/tool boundaries, recovery, quality, and cost records.')],
};
