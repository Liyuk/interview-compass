import { getRoleStages, tierFrames } from './role-stage-model';
import { getRoleResponsibilityAnchor } from './role-stage-expectations';
import { audienceRoles, domains, facetLabel, type Locale } from './taxonomy';

export interface StageModelStage {
  id: string;
  name: string;
  tier: string;
  scope: string;
  process: string;
  verify: string;
  boundary: string;
  professionalEvidence: string[];
  anchors: Record<string, { behavior: string; evidence: string }>;
}

export interface StageModel {
  roles: Record<string, { name: string; stages: StageModelStage[] }>;
}

export function buildStageModel(locale: Locale): StageModel {
  const local = (text: { zh: string; en: string }) => locale === 'en' ? text.en : text.zh;
  return {
    roles: Object.fromEntries(audienceRoles.map(role => [role.id, {
      name: facetLabel('roles', role.id, locale),
      stages: getRoleStages(role.id, locale).map(stage => {
        const frame = tierFrames[stage.tier];
        return {
          id: stage.id,
          name: stage.name,
          tier: stage.tier,
          scope: local(frame.scope),
          process: local(frame.compare),
          verify: local(frame.verify),
          boundary: local(frame.boundary),
          professionalEvidence: stage.professionalEvidence,
          anchors: Object.fromEntries(domains.map(domain => [domain.id, getRoleResponsibilityAnchor(role.id, stage.id, domain.id, locale)])),
        };
      }),
    }])),
  };
}
