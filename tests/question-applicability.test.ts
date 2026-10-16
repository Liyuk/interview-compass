import { describe, expect, it } from 'vitest';
import { matchesTarget, applicabilityTokens, validateApplicability, candidateProfiles, type ApplicabilityEntry } from '../src/lib/question-applicability';

const entry: ApplicabilityEntry = {
  questionId: 'one-question', reviewStatus: 'reviewed', fingerprint: 'abc',
  rationale: { zh: '比较方案，可在不同责任下使用。', en: 'Compare options under different responsibilities.' },
  profiles: [{ roleId: 'product', stageIds: ['product-entry', 'product-independent'] }, { roleId: 'engineering', stageIds: ['senior-engineer'] }],
};
describe('explicit role and stage applicability', () => {
  it('does not form a Cartesian product of roles and stages', () => {
    expect(matchesTarget(entry, { roleId: 'product', stageId: 'product-entry' })).toBe(true);
    expect(matchesTarget(entry, { roleId: 'engineering', stageId: 'junior-engineer' })).toBe(false);
    expect(matchesTarget(entry, { roleId: 'product', stageId: 'senior-engineer' })).toBe(false);
    expect(applicabilityTokens(entry)).toEqual(['product:product-entry', 'product:product-independent', 'engineering:senior-engineer']);
  });
  it('excludes pending and all-only records from personal selection', () => {
    expect(matchesTarget({ ...entry, reviewStatus: 'pending' }, { roleId: 'product', stageId: 'product-entry' })).toBe(false);
    expect(applicabilityTokens({ ...entry, reviewStatus: 'all-only', profiles: [] })).toEqual([]);
    expect(() => candidateProfiles({ roles: ['constructor'], careerTracks: ['individual-contributor'], primaryCapability: 'professional.debugging' })).toThrow();
  });
  it('keeps shared IC questions across stages in candidate suggestions without pretending they were reviewed', () => {
    const profiles = candidateProfiles({ roles: ['product', 'product'], careerTracks: ['individual-contributor'], primaryCapability: 'value-direction.product-judgment' });
    expect(profiles).toEqual([{ roleId: 'product', stageIds: ['product-entry', 'product-independent', 'product-senior', 'product-expert'] }]);
    expect(candidateProfiles({ roles: ['manager'], careerTracks: ['executive'], primaryCapability: 'value-direction.planning' })).toEqual([]);
  });
  it('rejects stale, duplicate, unknown, and cross-role records', () => {
    const errors = validateApplicability([entry, { ...entry, profiles: [{ roleId: 'product', stageIds: ['senior-engineer'] }] }], new Map([['one-question', 'new-hash']]));
    expect(errors.some(e => e.includes('duplicate'))).toBe(true);
    expect(errors.some(e => e.includes('stale'))).toBe(true);
    expect(errors.some(e => e.includes('invalid stage'))).toBe(true);
  });
});
