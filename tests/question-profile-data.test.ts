import { expect, it } from 'vitest';
import { countsForQuestionIds, tokensForQuestion } from '../src/lib/question-profile-data';

it('counts the same explicitly reviewed IDs once across translations and duplicates', () => {
  const id = 'g-self-direction-unassigned-goal';
  const counts = countsForQuestionIds([id, id]);
  expect(counts.total).toBe(1);
  expect(counts.profiles['frontend:junior-engineer']).toBe(1);
  expect(counts.profiles['frontend:retired']).toBeUndefined();
  expect(tokensForQuestion(id)).toContain('frontend:junior-engineer');
  expect(tokensForQuestion('missing')).toEqual([]);
  expect(countsForQuestionIds(['missing']).total).toBe(0);
});
