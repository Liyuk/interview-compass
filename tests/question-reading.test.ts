import { expect, it } from 'vitest';
import { groupForReading } from '../src/lib/question-reading';
import type { BrowseRecord } from '../src/lib/question-catalog';
const record = (id: string, formats: string[] = []): BrowseRecord => ({ questionId: id, formats, locale: 'en', status: 'published', title: id, question: id, intent: id, primaryCapability: 'professional.coding-abstraction', topics: [], roles: [], responsibilityScopes: [], careerTracks: [], scenarios: [] });
it('places multi-format and unclassified questions exactly once and bounds each reading batch', () => {
  const records = Array.from({ length: 23 }, (_, i) => record(`q${i}`, i === 0 ? ['knowledge', 'case'] : ['behavioral']));
  records.push(record('unknown'));
  const groups = groupForReading(records);
  expect(groups[0].id).toBe('understand');
  const ids = groups.flatMap(g => g.batches.flatMap(batch => batch.map(q => q.questionId)));
  expect(ids.sort()).toEqual(records.map(q => q.questionId).sort());
  expect(new Set(ids).size).toBe(ids.length);
  for (const group of groups) for (const batch of group.batches) expect(batch.length).toBeLessThanOrEqual(8);
});
