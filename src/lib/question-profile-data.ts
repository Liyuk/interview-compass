import { isAudienceRole } from '../content/role-stages/registry';
// Build-time data only. Browser modules consume generated tokens/counts, never this JSON.
import rawEntries from '../content/question-applicability.json';
import { applicabilityTokens, type ApplicabilityEntry } from './question-applicability';

const entries = new Map((rawEntries as ApplicabilityEntry[]).map(entry => [entry.questionId, entry]));
const tokens = new Map([...entries].map(([id, entry]) => [id, applicabilityTokens(entry).filter(token => isAudienceRole(token.split(':')[0]))]));

export function tokensForQuestion(id: string): readonly string[] { return tokens.get(id) ?? []; }

export function countsForQuestionIds(ids: readonly string[]): { total: number; profiles: Record<string, number> } {
  const unique = [...new Set(ids)].filter(id => entries.has(id));
  const profiles: Record<string, number> = {};
  for (const id of unique) for (const token of tokensForQuestion(id)) profiles[token] = (profiles[token] ?? 0) + 1;
  return { total: unique.length, profiles };
}

export function engineeringLensForQuestion(id: string) { return entries.get(id)?.engineeringLens; }
