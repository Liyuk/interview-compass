import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';
import { getQuestions, type BrowseRecord } from '../src/lib/question-catalog';
import { matchesTarget, applicabilityTokens, validateApplicability, candidateProfiles, type ApplicabilityEntry } from '../src/lib/question-applicability';

const entry: ApplicabilityEntry = {
  questionId: 'one-question', reviewStatus: 'reviewed', fingerprint: 'abc',
  rationale: { zh: '比较方案，可在不同责任下使用。', en: 'Compare options under different responsibilities.' },
  profiles: [{ roleId: 'product', stageIds: ['product-entry', 'product-independent'] }, { roleId: 'engineering', stageIds: ['senior-engineer'] }],
};
describe('explicit role and stage applicability', () => {
  it('keeps reviewed technical profiles compatible with role and career-track browsing in both locales', () => {
    const entries: ApplicabilityEntry[] = JSON.parse(readFileSync(new URL('../src/content/question-applicability.json', import.meta.url), 'utf8'));
    const cases = [
      { id: 'f-frontline-management-tell-or-let-think', stage: 'senior-engineer', track: 'individual-contributor' },
      { id: 'f-team-design-team-climate', stage: 'engineering-manager', track: 'team-manager' },
    ];
    for (const locale of ['zh-CN', 'en'] as const) for (const item of cases) {
      const source = readFileSync(new URL(`../src/content/questions/${locale}/${item.id}.md`, import.meta.url), 'utf8');
      const question = yaml.load(source.match(/^---\s*\n([\s\S]*?)\n---/)![1]) as BrowseRecord;
      expect(matchesTarget(entries.find(entry => entry.questionId === item.id), { roleId: 'backend', stageId: item.stage })).toBe(true);
      expect(getQuestions([question], { locale, role: 'backend', careerTrack: item.track }).map(record => record.questionId)).toEqual([item.id]);
    }
  });
  it('keeps reviewed interviewing and organizational work discoverable for technical subroles without assigning management authority to ICs', () => {
    const entries: ApplicabilityEntry[] = JSON.parse(readFileSync(new URL('../src/content/question-applicability.json', import.meta.url), 'utf8'));
    const personalContribution = entries.find(item => item.questionId === 'f-hiring-probe-personal-part');
    const hiringPortfolio = entries.find(item => item.questionId === 'f-hiring-headcount-trade-offs');
    for (const roleId of ['engineering', 'frontend', 'backend', 'mobile', 'ai-engineer']) {
      expect(matchesTarget(personalContribution, { roleId, stageId: 'mid-level-engineer' })).toBe(true);
      expect(matchesTarget(personalContribution, { roleId, stageId: 'junior-engineer' })).toBe(false);
      expect(matchesTarget(hiringPortfolio, { roleId, stageId: 'manager-of-managers' })).toBe(true);
      expect(matchesTarget(hiringPortfolio, { roleId, stageId: 'engineering-manager' })).toBe(false);
      expect(matchesTarget(hiringPortfolio, { roleId, stageId: 'staff-engineer' })).toBe(false);
    }
  });
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
