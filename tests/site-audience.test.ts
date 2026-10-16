import { describe, expect, it } from 'vitest';
import { audienceRoleIds, isAudienceRole } from '../src/content/role-stages/registry';
import { parsePreference } from '../src/lib/target-preferences';

describe('engineering audience', () => {
  it('offers engineering specializations and keeps other functions as capability context', () => {
    expect(audienceRoleIds).toEqual(['engineering', 'frontend', 'backend', 'mobile', 'ai-engineer', 'data']);
    for (const id of ['product', 'operations', 'design', 'marketing', 'pmo', 'manager']) {
      expect(isAudienceRole(id)).toBe(false);
      expect(parsePreference(JSON.stringify({ version: 1, mode: 'target', target: { roleId: id, stageId: `${id}-independent` } }))).toBeUndefined();
    }
  });
});

it('retains commercial questions as engineering business context with explicit boundaries', async () => {
  const { readFileSync } = await import('node:fs');
  const entries = JSON.parse(readFileSync(new URL('../src/content/question-applicability.json', import.meta.url), 'utf8'));
  const entry = entries.find((item: { questionId: string }) => item.questionId === 'bulk-b-commercial-02');
  expect(entry.engineeringLens.zh).toContain('工程师');
  expect(entry.engineeringLens.en).toContain('engineer');
  expect(entry.profiles.find((profile: { roleId: string }) => profile.roleId === 'frontend').stageIds).toContain('senior-engineer');
});
