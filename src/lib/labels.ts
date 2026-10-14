import { taxonomy } from './taxonomy';

const topicLabels: Record<string, [string, string]> = {
  'data-structures': ['数据结构', 'Data structures'], 'operating-systems': ['操作系统', 'Operating systems'],
  'compiler-design': ['编译原理', 'Compiler design'], 'computer-networks': ['计算机网络', 'Computer networks'],
  databases: ['数据库', 'Databases'], concurrency: ['并发系统', 'Concurrency'],
  'distributed-systems': ['分布式系统', 'Distributed systems'], frontend: ['前端', 'Frontend'], backend: ['后端', 'Backend'],
  mobile: ['客户端', 'Mobile'], 'programming-languages': ['编程语言', 'Programming languages'], frameworks: ['框架', 'Frameworks'],
  'engineering-systems': ['工程体系', 'Engineering systems'], devops: ['DevOps', 'DevOps'], microservices: ['微服务', 'Microservices'],
  'micro-frontends': ['微前端', 'Micro-frontends'], monorepo: ['Monorepo', 'Monorepo'], 'system-design': ['系统设计', 'System design'],
  'product-thinking': ['产品思维', 'Product thinking'], commercialization: ['商业化', 'Commercialization'],
  'data-modeling': ['数据建模', 'Data modeling'], 'feature-modeling': ['特征模型', 'Feature modeling'], planning: ['规划', 'Planning'],
  prioritization: ['优先级', 'Prioritization'], 'resource-allocation': ['资源分配', 'Resource allocation'], execution: ['执行', 'Execution'],
  'conflict-resolution': ['冲突处理', 'Conflict resolution'], hiring: ['招聘', 'Hiring'], promotion: ['晋升', 'Promotion'],
  operations: ['运营', 'Operations'], 'growth-experiments': ['增长实验', 'Growth experiments'], 'ai-engineering': ['AI 工程', 'AI engineering'],
  'risk-management': ['风险管理', 'Risk management'], learning: ['学习成长', 'Learning'], communication: ['沟通', 'Communication'],
};

const roleLabels: Record<string, [string, string]> = {
  engineering: ['工程', 'Engineering'], frontend: ['前端', 'Frontend'], backend: ['后端', 'Backend'], mobile: ['客户端', 'Mobile'],
  data: ['数据', 'Data'], product: ['产品', 'Product'], operations: ['运营', 'Operations'], marketing: ['市场与增长', 'Marketing & Growth'],
  design: ['设计', 'Design'], manager: ['管理', 'Management'], pmo: ['项目管理', 'Project Management'],
};

export function labelFor(facet: 'topics' | 'roles', id: string, locale: 'zh-CN' | 'en'): string {
  const pair = (facet === 'topics' ? topicLabels : roleLabels)[id];
  return pair ? pair[locale === 'en' ? 1 : 0] : id;
}

export function topicEntries(locale: 'zh-CN' | 'en') {
  return taxonomy.topics.map((id) => ({ id, label: labelFor('topics', id, locale) }));
}

export function roleEntries(locale: 'zh-CN' | 'en') {
  return taxonomy.roles.map((id) => ({ id, label: labelFor('roles', id, locale) }));
}

export const capabilityLabels: Record<string, [string, string]> = {
  'value-direction.prioritization': ['价值判断与优先级', 'Value judgment and prioritization'],
  'collaboration.conflict-navigation': ['协作沟通与冲突处理', 'Collaboration and conflict navigation'],
  'delivery.capacity-planning': ['交付规划与资源管理', 'Delivery planning and capacity management'],
};

export function capabilityLabel(id: string, locale: 'zh-CN' | 'en') {
  const pair = capabilityLabels[id];
  return pair?.[locale === 'en' ? 1 : 0] ?? id;
}
