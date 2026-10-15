import { stageIds, type StageId } from './capability-model';
import { domains, type Bilingual } from './taxonomy';

// Editorial responsibility-depth anchors. These are ordinal labels, not measured scores.
export const depthAnchors: { percent: number; name: Bilingual; description: Bilingual }[] = [
  { percent: 25, name: { zh: '理解并在指导下应用', en: 'Apply with guidance' }, description: { zh: '能解释基本概念，识别边界，在指导下完成限定任务。', en: 'Explains fundamentals and boundaries; completes bounded work with guidance.' } },
  { percent: 50, name: { zh: '独立处理常见问题', en: 'Work independently' }, description: { zh: '独立完成常见任务，解释取舍并验证结果。', en: 'Handles routine work independently, explains trade-offs, and verifies results.' } },
  { percent: 75, name: { zh: '处理复杂问题并带动团队', en: 'Lead complex work' }, description: { zh: '处理模糊或跨团队问题，形成可复用方法并帮助他人。', en: 'Handles ambiguous or cross-team problems, develops reusable practices, and enables others.' } },
  { percent: 100, name: { zh: '建设组织级机制', en: 'Build organizational capability' }, description: { zh: '制定组织或关键领域机制，持续校准，并培养其他负责人。', en: 'Shapes organizational or critical-domain mechanisms, calibrates them, and develops other leaders.' } },
];
const row = (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): Record<string, number> => ({
  professional: a, 'domain-modeling': b, 'value-direction': c, delivery: d,
  collaboration: e, 'people-organization': f, 'learning-adaptation': g, 'work-responsibility': h,
});
export const expectations: Record<StageId, Record<string, number>> = {
  'junior-engineer': row(25, 25, 25, 25, 25, 25, 50, 50),
  'mid-level-engineer': row(50, 50, 50, 50, 50, 25, 50, 50),
  'senior-engineer': row(75, 75, 75, 75, 75, 50, 75, 75),
  'staff-engineer': row(100, 100, 100, 75, 100, 75, 100, 100),
  'engineering-manager': row(75, 75, 75, 75, 75, 75, 75, 75),
  'manager-of-managers': row(75, 75, 100, 100, 100, 100, 100, 100),
};
export const stageDepthNotes: Record<StageId, Bilingual> = {
  'junior-engineer': { zh: 'F 侧重理解团队分工；G/H 要求主动学习、如实汇报和个人闭环。', en: 'F means understanding team responsibilities; G/H require active learning, truthful reporting, and personal follow-through.' },
  'mid-level-engineer': { zh: '独立负责模块；F 侧重同伴支持，不要求人员管理。', en: 'Owns a component independently; F means peer support, without people-management expectations.' },
  'senior-engineer': { zh: '跨模块解决复杂问题；F 侧重辅导和授权，不自动包含绩效管理。', en: 'Solves complex cross-component problems; F means mentoring and delegation, not automatically performance management.' },
  'staff-engineer': { zh: '通过专业方向和领域机制扩大影响；F 侧重负责人培养，不要求带直属团队。', en: 'Scales influence through domain direction and practices; F means developing leaders without requiring direct reports.' },
  'engineering-manager': { zh: '通过团队机制交付；A/B 评估专业判断，不以个人编码深度衡量。', en: 'Delivers through a team; A/B concern professional judgment, rather than individual coding depth.' },
  'manager-of-managers': { zh: '通过管理者建设组织能力；A/B 关注专家评审和治理，不要求逐项技术精通。', en: 'Builds organizational capability through managers; A/B concern expert review and governance, not mastery of every technical specialty.' },
};
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
