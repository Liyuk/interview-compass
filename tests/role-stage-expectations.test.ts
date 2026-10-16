import { describe, expect, it } from 'vitest';
import { getRoleExpectations, getRoleResponsibilityAnchor, validateRoleExpectations } from '../src/lib/role-stage-expectations';

describe('role-specific A–H responsibility depth', () => {
  it('validates every role and preserves engineering expectations', () => {
    expect(validateRoleExpectations()).toEqual([]);
    expect(getRoleExpectations('engineering', 'junior-engineer')['people-organization']).toBe(0);
    expect(getRoleExpectations('engineering', 'engineering-manager')['people-organization']).toBe(100);
  });
  it('distinguishes professional, product, delivery, and people responsibility', () => {
    const product = getRoleExpectations('product', 'product-independent');
    const pmo = getRoleExpectations('pmo', 'pmo-independent');
    expect(product['value-direction']).toBeGreaterThanOrEqual(50);
    expect(pmo.delivery).toBeGreaterThan(pmo.professional);
    expect(getRoleExpectations('design', 'design-entry')['people-organization']).toBe(0);
    expect(getRoleExpectations('design', 'design-manager')['people-organization']).toBe(100);
  });
  it('explains qualitative evidence rather than using percentages as assessment scores', () => {
    const junior = getRoleResponsibilityAnchor('product', 'product-entry', 'people-organization', 'zh-CN');
    expect(junior.behavior).toContain('不作为');
    const data = getRoleResponsibilityAnchor('data', 'data-senior', 'domain-modeling', 'zh-CN');
    expect(data.behavior).toContain('粒度');
    expect(data.evidence.length).toBeGreaterThan(10);
    const en = getRoleResponsibilityAnchor('marketing', 'marketing-organization', 'work-responsibility', 'en');
    expect(JSON.stringify(en)).not.toMatch(/[\u3400-\u9fff]/);
    expect(() => getRoleExpectations('product', 'senior-engineer')).toThrow();
  });
});
