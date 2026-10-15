import { describe, expect, it } from 'vitest';
import { stageIds, validateCapabilityModel } from '../src/lib/capability-model';
import { domains, isPlannedCapability } from '../src/lib/taxonomy';
import { expectations, validateExpectations } from '../src/lib/capability-expectations';

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

  it('keeps planned capability references out of question-page links', () => {
    expect(isPlannedCapability('professional.ai-evaluation-governance')).toBe(true);
    expect(isPlannedCapability('professional.system-design')).toBe(false);
    expect(isPlannedCapability('unknown.capability')).toBe(false);
  });
});
