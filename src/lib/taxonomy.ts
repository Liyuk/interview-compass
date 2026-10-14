export type Locale = 'zh-CN' | 'en';

export const capabilities = [
  { id: 'professional', zh: '专业解题与实现', en: 'Professional problem solving and implementation' },
  { id: 'domain-modeling', zh: '业务理解与领域建模', en: 'Business understanding and domain modeling' },
  { id: 'value-direction', zh: '价值判断与方向规划', en: 'Value judgment and direction setting' },
  { id: 'delivery', zh: '交付执行与持续运营', en: 'Delivery and operations' },
  { id: 'collaboration', zh: '协作沟通与影响', en: 'Collaboration and influence' },
  { id: 'people-organization', zh: '人才与组织建设', en: 'People and organization' },
  { id: 'learning-adaptation', zh: '学习适应与持续成长', en: 'Learning and adaptation' },
  { id: 'work-responsibility', zh: '职业责任与工作方式', en: 'Professional responsibility and work style' },
] as const;

export const capabilityIds = [
  'professional.problem-solving',
  'professional.coding-abstraction',
  'professional.system-design',
  'professional.computer-science',
  'professional.engineering-systems',
  'domain-modeling.business-context',
  'domain-modeling.data-modeling',
  'domain-modeling.commercial-modeling',
  'value-direction.prioritization',
  'value-direction.product-judgment',
  'value-direction.planning',
  'delivery.execution',
  'delivery.capacity-planning',
  'delivery.operations',
  'collaboration.conflict-navigation',
  'collaboration.communication',
  'people-organization.team-management',
  'people-organization.organization-design',
  'learning-adaptation.learning-transfer',
  'learning-adaptation.resilience',
  'work-responsibility.ownership',
  'work-responsibility.work-style',
] as const;

export const taxonomy = {
  capabilities: capabilityIds,
  topics: [
    'data-structures', 'operating-systems', 'compiler-design', 'computer-networks', 'databases',
    'concurrency', 'distributed-systems', 'frontend', 'backend', 'mobile', 'programming-languages',
    'frameworks', 'engineering-systems', 'devops', 'microservices', 'micro-frontends', 'monorepo',
    'system-design', 'product-thinking', 'commercialization', 'data-modeling', 'feature-modeling',
    'planning', 'prioritization', 'resource-allocation', 'execution', 'conflict-resolution', 'hiring', 'promotion',
    'operations', 'growth-experiments', 'ai-engineering', 'risk-management', 'learning', 'communication',
  ],
  roles: ['engineering', 'frontend', 'backend', 'mobile', 'data', 'product', 'operations', 'marketing', 'design', 'manager', 'pmo'],
  responsibilityScopes: ['individual', 'team', 'multiple-teams', 'organization'],
  careerTracks: ['individual-contributor', 'team-manager', 'senior-manager', 'executive'],
  scenarios: ['interview', 'promotion', 'self-reflection', 'hiring', 'operations-review'],
} as const;

export type Facet = Exclude<keyof typeof taxonomy, 'capabilities'> | 'topics';

export const hasTaxonomyId = (facet: keyof typeof taxonomy, id: string): boolean =>
  (taxonomy[facet] as readonly string[]).includes(id);
