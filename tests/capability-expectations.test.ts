import { describe, expect, it } from 'vitest';
import { stageIds, validateCapabilityModel } from '../src/lib/capability-model';
import { domains, isPlannedCapability } from '../src/lib/taxonomy';
import { expectations, getResponsibilityAnchor, validateExpectations, validateResponsibilityAnchors } from '../src/lib/capability-expectations';

describe('stage expectations matrix', () => {
  it('covers all six stages and all eight canonical domains', () => {
    expect(Object.keys(expectations).sort()).toEqual([...stageIds].sort());
    for (const row of Object.values(expectations)) {
      expect(Object.keys(row).sort()).toEqual(domains.map(d => d.id).sort());
    }
    expect(validateExpectations()).toEqual([]);
    expect(validateCapabilityModel()).toEqual([]);
  });
  it('rejects missing domains and percentages without behavioral anchors', () => {
    const invalid = structuredClone(expectations);
    delete invalid['junior-engineer'].professional;
    invalid['senior-engineer'].professional = 63;
    expect(validateExpectations(invalid)).toEqual(expect.arrayContaining([
      expect.stringMatching(/junior-engineer.*domains/),
      expect.stringMatching(/senior-engineer.*professional.*anchor/),
    ]));
  });

  it('does not mark the now-populated AI governance capability as planned', () => {
    expect(isPlannedCapability('professional.ai-evaluation-governance')).toBe(false);
    expect(isPlannedCapability('professional.system-design')).toBe(false);
    expect(isPlannedCapability('unknown.capability')).toBe(false);
  });

  it('explains every stage and capability cell with role-specific behavior and evidence', () => {
    expect(validateResponsibilityAnchors()).toEqual([]);
    const juniorPeople = getResponsibilityAnchor('junior-engineer', 'people-organization', 'zh-CN');
    expect(juniorPeople.behavior).toContain('不是通用阶段门槛');
    expect(juniorPeople.evidence).toBeTruthy();
    expect(juniorPeople.standardIds.length).toBeGreaterThan(0);
    const managerBusiness = getResponsibilityAnchor('engineering-manager', 'domain-modeling', 'zh-CN');
    expect(managerBusiness.behavior).toContain('业务');
    expect(managerBusiness.standardIds.length).toBeGreaterThan(0);
  });
});
