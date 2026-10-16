import { describe, expect, it } from 'vitest';
import { getRoleStage, getRoleStages, validateRoleStageModels } from '../src/lib/role-stage-model';
import { dimensionIds } from '../src/lib/capability-model';
import { facetDefinitions } from '../src/lib/taxonomy';

describe('role-specific responsibility stages', () => {
  it('covers every existing role with bilingual standards in all four dimensions', () => {
    expect(validateRoleStageModels()).toEqual([]);
    for (const role of facetDefinitions.roles) {
      const zh = getRoleStages(role.id, 'zh-CN');
      const en = getRoleStages(role.id, 'en');
      expect(zh.length).toBe(role.id === 'manager' ? 2 : 6);
      expect(zh.map(s => s.id)).toEqual(en.map(s => s.id));
      for (const stage of zh) for (const dim of dimensionIds) {
        expect(stage.dimensions[dim].length).toBeGreaterThanOrEqual(3);
        expect(stage.dimensions[dim].length).toBeLessThanOrEqual(5);
        expect(stage.dimensions[dim].every(s => s.text && s.evidence)).toBe(true);
      }
      expect(JSON.stringify(en)).not.toMatch(/[\u3400-\u9fff]/);
    }
  });

  it('preserves engineering stages, but distinguishes craft evidence for subroles', () => {
    expect(getRoleStages('engineering', 'zh-CN').map(s => s.id)).toEqual(['junior-engineer', 'mid-level-engineer', 'senior-engineer', 'staff-engineer', 'engineering-manager', 'manager-of-managers']);
    expect(getRoleStage('frontend', 'senior-engineer', 'zh-CN').professionalEvidence.join(' ')).toContain('交互');
    expect(getRoleStage('backend', 'senior-engineer', 'zh-CN').professionalEvidence.join(' ')).toContain('一致性');
  });

  it('uses responsibility rather than the word manager to classify product ICs', () => {
    const stage = getRoleStage('product', 'product-independent', 'zh-CN');
    expect(stage.name).toBe('产品经理');
    expect(stage.tier).toBe('independent');
    expect(stage.dimensions['domain-expertise'].map(s => s.text).join(' ')).toContain('产品');
    expect(JSON.stringify(getRoleStages('operations', 'zh-CN'))).not.toContain('编码');
    expect(getRoleStages('manager', 'zh-CN').map(s => s.tier)).toEqual(['manager', 'organization']);
  });

  it('rejects unknown and incompatible role/stage pairs', () => {
    expect(() => getRoleStages('unknown', 'en')).toThrow();
    expect(() => getRoleStage('product', 'senior-engineer', 'en')).toThrow();
  });
});
