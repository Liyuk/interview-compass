import { readFile, writeFile } from 'node:fs/promises';
import { candidateProfiles } from '../src/lib/question-applicability.ts';
import { loadApplicabilityQuestions } from './stage-applicability-data.mjs';

const path = 'src/content/question-applicability.json';
const existing = await readFile(path, 'utf8').then(JSON.parse).catch(error => { if (error.code === 'ENOENT') return []; throw error; });
const previous = new Map(existing.map(entry => [entry.questionId, entry]));
const { records, fingerprints } = await loadApplicabilityQuestions();
const entries = records.sort((a, b) => a.questionId.localeCompare(b.questionId)).map(record => {
  const prior = previous.get(record.questionId);
  const fingerprint = fingerprints.get(record.questionId);
  if (prior && prior.fingerprint === fingerprint) return prior;
  return {
    questionId: record.questionId, reviewStatus: 'pending', fingerprint,
    rationale: { zh: '仅按现有岗位与职业轨道生成的候选组合，尚未逐题审阅；不能用于上线过滤。', en: 'Candidate combinations inferred from existing role and track tags; not yet reviewed for this question and not eligible for live filtering.' },
    profiles: candidateProfiles(record),
  };
});
await writeFile(path, `${JSON.stringify(entries, null, 2)}\n`);
console.log(`Prepared ${entries.length} entries; ${entries.filter(entry => entry.reviewStatus === 'pending').length} pending. Existing unchanged reviews retained.`);
