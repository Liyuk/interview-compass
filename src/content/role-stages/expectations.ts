import { b } from './catalog';

// Ordinal editorial anchors, A–H in taxonomy order. These are responsibility labels, never scores or filter rules.
export const roleDepths: Record<string, readonly (readonly number[])[]> = {
  data: [[50,25,10,50,10,0,25,25], [50,50,25,75,25,10,50,50], [75,75,50,75,75,25,75,75], [100,100,75,75,100,50,75,75], [50,75,75,75,75,100,50,75], [25,100,100,75,100,100,75,100]],
  product: [[50,25,25,50,25,0,25,25], [50,50,50,50,50,10,50,50], [75,75,75,75,75,25,75,75], [100,100,100,75,100,50,75,75], [50,75,75,75,75,100,50,75], [25,100,100,75,100,100,75,100]],
  operations: [[50,25,10,50,25,0,25,25], [50,50,25,75,50,10,50,50], [75,75,75,75,75,25,75,75], [100,75,75,100,100,50,75,75], [50,75,75,100,75,100,50,75], [25,100,100,100,100,100,75,100]],
  marketing: [[50,25,25,50,25,0,25,25], [50,50,50,75,50,10,50,50], [75,75,75,75,75,25,75,75], [100,100,100,75,100,50,75,75], [50,75,75,75,75,100,50,75], [25,100,100,75,100,100,75,100]],
  design: [[50,25,10,50,25,0,25,25], [50,50,50,50,50,10,50,50], [75,75,75,75,75,25,75,75], [100,75,75,75,100,50,75,75], [50,75,75,75,75,100,50,75], [25,75,100,75,100,100,75,100]],
  pmo: [[25,25,10,50,25,0,25,25], [50,50,25,75,50,10,50,50], [75,75,75,100,75,25,75,75], [75,75,75,100,100,50,75,75], [50,75,75,100,75,100,50,75], [25,75,100,100,100,100,75,100]],
  manager: [[50,50,75,75,75,100,50,75], [25,75,100,75,100,100,75,100]],
};

export const roleModeling = {
  data: b('表达数据对象、粒度、时间、血缘与口径，检查模型与现实事件的对应。', 'Represent data objects, grain, time, lineage, and definitions and check their correspondence with real events.'),
  product: b('表达用户、产品对象、流程、状态与商业规则，验证问题模型是否符合实际使用。', 'Represent users, product objects, flows, states, and business rules and validate the problem model against actual use.'),
  operations: b('表达运营对象、人群、策略、触点、资格与流程状态，核验规则和运行事实。', 'Represent operating entities, segments, strategies, touchpoints, eligibility, and workflow states and verify rules against operations.'),
  marketing: b('表达目标市场、人群、渠道、转化链路和归因口径，检查比较人群与时间窗口。', 'Represent markets, audiences, channels, funnels, and attribution definitions and check comparable populations and time windows.'),
  design: b('表达用户心智模型、任务、对象、状态与系统约束，核验设计表达与真实流程。', 'Represent user mental models, tasks, objects, states, and system constraints and check design representations against real workflows.'),
  pmo: b('表达目标、交付物、参与者、责任、依赖与变更，区分报告模型和交付事实。', 'Represent goals, deliverables, stakeholders, responsibilities, dependencies, and changes and distinguish reporting models from delivery facts.'),
  manager: b('理解业务对象、价值链、成本、责任和服务边界，核验团队分工是否反映真实业务。', 'Understand business entities, value chains, costs, responsibilities, and service boundaries and check whether team boundaries reflect the business.'),
};
