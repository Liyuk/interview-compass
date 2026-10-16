import { getRoleStage, tierFrames } from './role-stage-model';
import { getRoleResponsibilityAnchor } from './role-stage-expectations';
import { capabilityLabel, facetLabel, type Locale } from './taxonomy';
import { composeStageGuidance, stageGuidancePrompt, type QuestionStageGuidance, type StageQuestion } from './question-stage-text';

export type { QuestionStageGuidance, StageQuestion };
export { stageGuidancePrompt };

export function questionStageGuidance(question: StageQuestion, roleId: string, stageId: string, locale: Locale) {
  if (!question.roles.includes(roleId)) throw new Error(`Role ${roleId} is not listed for question ${question.questionId}`);
  const stage = getRoleStage(roleId, stageId, locale);
  const frame = tierFrames[stage.tier];
  const en = locale === 'en';
  const local = (text: { zh: string; en: string }) => en ? text.en : text.zh;
  const domain = question.primaryCapability.split('.')[0];
  return composeStageGuidance(question, locale, {
    roleId,
    stageId,
    stageName: stage.name,
    roleName: facetLabel('roles', roleId, locale),
    tier: stage.tier,
    focus: capabilityLabel(question.primaryCapability, locale),
    scope: local(frame.scope),
    process: local(frame.compare),
    verify: local(frame.verify),
    boundary: local(frame.boundary),
    professionalEvidence: stage.professionalEvidence,
    anchor: getRoleResponsibilityAnchor(roleId, stageId, domain, locale),
  });
}
