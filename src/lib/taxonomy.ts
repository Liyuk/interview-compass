export type Locale = 'zh-CN' | 'en';

export type Bilingual = { zh: string; en: string };

export const pick = (text: Bilingual, locale: Locale): string => (locale === 'en' ? text.en : text.zh);

export type Leaf = { id: string; name: Bilingual; description: Bilingual };
export type Band = 'judgment' | 'delivery-organization' | 'growth';
export type Domain = { id: string; letter: string; band: Band; name: Bilingual; description: Bilingual; leaves: readonly Leaf[] };

const leaf = (id: string, zh: string, en: string, zhDesc: string, enDesc: string): Leaf => ({
  id, name: { zh, en }, description: { zh: zhDesc, en: enDesc },
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
    f('engineering', '工程', 'Engineering'), f('frontend', '前端', 'Frontend'), f('backend', '后端', 'Backend'), f('mobile', '客户端', 'Mobile'),
    f('ai-engineer', 'AI 工程', 'AI engineering'), f('data', '数据', 'Data'), f('product', '产品', 'Product'), f('operations', '运营', 'Operations'),
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
    f('interview', '求职准备', 'Preparing as a candidate'), f('campus', '校招准备', 'Campus hiring'), f('hiring', '面试官设计', 'Designing as an interviewer'),
    f('promotion', '晋升', 'Promotion'), f('self-reflection', '自我复盘', 'Self-reflection'), f('operations-review', '运营复盘', 'Operations review'),
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
  roles: { name: { zh: '岗位', en: 'Role' }, description: { zh: '谁需要这类证据。岗位只是入口，不直接决定职级。', en: 'Who needs this kind of evidence. A role is an entry point, not a level.' } },
  responsibilityScopes: { name: { zh: '责任范围', en: 'Responsibility scope' }, description: { zh: '为多大范围负责。范围大不等于表现好。', en: 'How wide the responsibility reaches. A wider scope does not mean better performance.' } },
  careerTracks: { name: { zh: '职业轨道', en: 'Career track' }, description: { zh: '专业贡献者、团队管理者或管理管理者。管理不是所有人的下一步。', en: 'Individual contributor, team manager, or senior manager. Management is not everyone’s next step.' } },
  scenarios: { name: { zh: '使用场景', en: 'Use case' }, description: { zh: '为什么读这道题：求职、设计面试、晋升、复盘。', en: 'Why you are reading: preparing, designing an interview, promotion, or review.' } },
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
    topic: 'product-thinking',
  },
] as const;
