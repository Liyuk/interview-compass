import { expectations, depthAnchors, getResponsibilityAnchor, type ExpectationDomainId } from './capability-expectations';
import { getRoleStage, getRoleStages, tierFrames } from './role-stage-model';
import { stageIds, type StageId } from './capability-model';
import { roleDepths, roleModeling } from '../content/role-stages/expectations';
import { domains, facetDefinitions, pick, type Locale } from './taxonomy';

export function getRoleExpectations(roleId: string, stageId: string): Record<string, number> {
  getRoleStage(roleId, stageId, 'zh-CN');
  if (stageIds.includes(stageId as StageId)) return { ...expectations[stageId as StageId] };
  const index = getRoleStages(roleId, 'zh-CN').findIndex(stage => stage.id === stageId);
  return Object.fromEntries(domains.map((domain, i) => [domain.id, roleDepths[roleId][index][i]]));
}

export function getRoleResponsibilityAnchor(roleId: string, stageId: string, domainId: string, locale: Locale) {
  const stage = getRoleStage(roleId, stageId, locale);
  if (!domains.some(domain => domain.id === domainId)) throw new Error(`Unknown capability domain: ${domainId}`);
  if (stageIds.includes(stageId as StageId)) return getResponsibilityAnchor(stageId as StageId, domainId as ExpectationDomainId, locale);
  const frame = tierFrames[stage.tier];
  const en = locale === 'en';
  const expectedDepth = getRoleExpectations(roleId, stageId)[domainId];
  const evidence = pick(frame.evidence, locale);
  const professional = stage.dimensions['domain-expertise'][0];
  const modeling = pick(roleModeling[roleId as keyof typeof roleModeling], locale);
  const people = expectedDepth === 0
    ? (en ? 'People management is not a general requirement at this stage. Recognize responsibilities and ask for help; do not require hiring, performance reviews, or organization design.' : '人才管理不作为本阶段的通用要求。理解责任并及时求助，不要求招聘、绩效或组织设计。')
    : stage.tier === 'manager' || stage.tier === 'organization'
      ? pick(frame.influence, locale)
      : (en ? 'Support peers, mentoring, and professional ownership within the mandate; broader influence does not imply authority over hiring or performance.' : '在实际授权内支持同伴、带教及专业负责人培养；影响扩大不自动包含招聘或绩效决策权。');
  const behaviors: Record<string, string> = {
    professional: professional.text,
    'domain-modeling': `${pick(frame.scope, locale)} ${modeling}`,
    'value-direction': `${stage.summary} ${pick(frame.compare, locale)}`,
    delivery: `${pick(frame.scope, locale)} ${pick(frame.verify, locale)}`,
    collaboration: pick(frame.influence, locale),
    'people-organization': people,
    'learning-adaptation': [frame.learning, frame.thinking, frame.drive, frame.resilience].map(text => pick(text, locale)).join(' '),
    'work-responsibility': `${pick(frame.boundary, locale)} ${en ? 'Integrity, safety, and truthful attribution apply at every stage; depth distinguishes the scope of prevention and correction.' : '诚信、安全和真实归因是所有阶段的底线；深度区分防护与纠偏的责任范围。'}`,
  };
  return { behavior: behaviors[domainId], evidence: domainId === 'professional' || domainId === 'domain-modeling' ? stage.professionalEvidence.join(' ') : evidence };
}

export function validateRoleExpectations(): string[] {
  const errors: string[] = [];
  const allowed = new Set(depthAnchors.map(anchor => anchor.percent));
  for (const role of facetDefinitions.roles) for (const stage of getRoleStages(role.id, 'zh-CN')) {
    const values = getRoleExpectations(role.id, stage.id);
    for (const domain of domains) {
      if (!allowed.has(values[domain.id])) errors.push(`${role.id}/${stage.id}/${domain.id}: unsupported depth`);
      const anchor = getRoleResponsibilityAnchor(role.id, stage.id, domain.id, 'zh-CN');
      if (!anchor.behavior || !anchor.evidence) errors.push(`${role.id}/${stage.id}/${domain.id}: missing evidence`);
    }
    if (stage.tier === 'entry' && values['people-organization'] !== 0) errors.push(`${role.id}: entry people expectation must be 0`);
    if ((stage.tier === 'manager' || stage.tier === 'organization') && values['people-organization'] !== 100) errors.push(`${role.id}: managers own people responsibility`);
  }
  return errors;
}
