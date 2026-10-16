import { describe, expect, it } from 'vitest';
import { questionStageGuidance } from '../src/lib/question-stage-guidance';
import type { StageQuestion } from '../src/lib/question-stage-guidance';
import { composeStageGuidance } from '../src/lib/question-stage-text';
import { buildStageModel } from '../src/lib/stage-model-data';
const question: StageQuestion = {
  questionId: 'same-question', roles: ['engineering', 'product'],
  primaryCapability: 'value-direction.prioritization', signals: ['说明取舍依据', '验证结果'], formats: ['case'],
};

describe('same question, different responsibility expectations', () => {
  it('changes responsibility and result expectations without changing the question or score scale', () => {
    const junior = questionStageGuidance(question, 'engineering', 'junior-engineer', 'zh-CN');
    const senior = questionStageGuidance(question, 'engineering', 'senior-engineer', 'zh-CN');
    expect(junior.scope).not.toBe(senior.scope);
    expect(junior.result).not.toBe(senior.result);
    expect(junior.scoreAnchors.map(a => a.score)).toEqual([1, 2, 3, 4]);
    expect(senior.scoreAnchors.map(a => a.score)).toEqual([1, 2, 3, 4]);
    expect(junior.scoreNote).toContain('阶段');
    expect(junior.signals).toEqual(question.signals);
    expect(junior.boundary).toContain('不要求招聘');
  });
  it('allows case reasoning, but never fabricates past results or confirms exceptional outcomes from speculation', () => {
    const guidance = questionStageGuidance(question, 'product', 'product-senior', 'zh-CN');
    expect(guidance.answerMode).toContain('推演');
    expect(guidance.answerMode).toContain('不得编造');
    expect(guidance.scoreAnchors[3].text).toContain('不能');
    const behavioral = questionStageGuidance({ ...question, formats: ['behavioral'] }, 'product', 'product-independent', 'zh-CN');
    expect(behavioral.answerMode).toContain('真实经历');
    expect(behavioral.answerMode).not.toBe(guidance.answerMode);
  });
  it('limits knowledge questions to knowledge evidence and marks the framework as generated', () => {
    const guidance = questionStageGuidance({ ...question, formats: ['knowledge'] }, 'engineering', 'senior-engineer', 'en');
    expect(guidance.answerMode).toContain('Knowledge');
    expect(guidance.result).toContain('counterexamples');
    expect(guidance.result).toContain('project outcomes are not required');
    expect(guidance.reviewNote).toContain('rule-based');
    expect(JSON.stringify({ ...guidance, signals: [] })).not.toMatch(/[\u3400-\u9fff]/);
  });
  it('rejects roles absent from the question and invalid role-stage pairs', () => {
    expect(() => questionStageGuidance(question, 'design', 'design-senior', 'en')).toThrow();
    expect(() => questionStageGuidance(question, 'product', 'senior-engineer', 'en')).toThrow();
  });
  it('uses the same role-domain behavior as the matrix instead of generic professional text', () => {
    const data = questionStageGuidance({ ...question, roles: ['data'], primaryCapability: 'domain-modeling.data-model' }, 'data', 'data-senior', 'zh-CN');
    expect(data.evidence.some(item => item.text.includes('粒度'))).toBe(true);
    const junior = questionStageGuidance({ ...question, primaryCapability: 'people-organization.hiring' }, 'engineering', 'junior-engineer', 'zh-CN');
    expect(junior.evidence.some(item => item.text.includes('不'))).toBe(true);
  });
  it('matches the locale stage model fetched by question pages', () => {
    const direct = questionStageGuidance(question, 'engineering', 'junior-engineer', 'zh-CN');
    const model = buildStageModel('zh-CN');
    const role = model.roles.engineering;
    const stage = role.stages.find(item => item.id === 'junior-engineer');
    expect(stage).toBeTruthy();
    expect(composeStageGuidance(question, 'zh-CN', {
      roleId: 'engineering',
      stageId: stage!.id,
      stageName: stage!.name,
      roleName: role.name,
      tier: stage!.tier,
      focus: direct.focus,
      scope: stage!.scope,
      process: stage!.process,
      verify: stage!.verify,
      boundary: stage!.boundary,
      professionalEvidence: stage!.professionalEvidence,
      anchor: stage!.anchors['value-direction'],
    })).toEqual(direct);
  });
});
