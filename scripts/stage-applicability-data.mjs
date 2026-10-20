import { glob, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import * as yaml from 'js-yaml';
import { applicabilityFingerprintInput } from '../src/lib/question-applicability.ts';

export async function loadApplicabilityQuestions() {
  const pairs = new Map();
  for await (const path of glob('src/content/questions/**/*.md')) {
    const match = (await readFile(path, 'utf8')).match(/^---\s*\n([\s\S]*?)\n---/);
    if (!match) continue;
    const record = yaml.load(match[1]);
    if (record.status !== 'published') continue;
    pairs.set(record.questionId, [...(pairs.get(record.questionId) ?? []), record]);
  }
  const fingerprints = new Map([...pairs].map(([id, pair]) => [id, createHash('sha256').update(applicabilityFingerprintInput(pair)).digest('hex')]));
  return { pairs, fingerprints, records: [...pairs.values()].map(pair => pair.find(record => record.locale === 'zh-CN')) };
}
