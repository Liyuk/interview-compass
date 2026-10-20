import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import * as yaml from 'js-yaml';

const root = process.cwd();
const candidatePath = resolve(root, 'docs/core-question-candidates.md');
const content = await readFile(candidatePath, 'utf8');
const migration = JSON.parse(await readFile(resolve(root, 'docs/reviews/2026-10-19-question-perspective-migration.json'), 'utf8'));
const assignments = new Map(migration.assignments.map((item) => [item.questionId, item]));
const expectedAudiences = new Map([
  ['候选人准备', 35],
  ['面试官取证', 35],
  ['管理者评估与带团队', 30],
]);
const expectedDomains = new Set([
  'professional',
  'domain-modeling',
  'value-direction',
  'delivery',
  'collaboration',
  'people-organization',
  'learning-adaptation',
  'work-responsibility',
]);
const ids = new Set();
const counts = new Map();
const domains = new Set();
const errors = [];

for (const [audience, expectedCount] of expectedAudiences) {
  const heading = '## ' + audience + '（' + expectedCount + ' 个候选 ID）';
  const headingIndex = content.indexOf('\n' + heading + '\n');
  const sectionStart = headingIndex < 0 ? -1 : headingIndex + heading.length + 2;
  const nextHeading = sectionStart < 0 ? -1 : content.indexOf('\n## ', sectionStart);
  const section = sectionStart < 0 ? undefined : content.slice(sectionStart, nextHeading < 0 ? undefined : nextHeading);
  if (!section) {
    errors.push(`Missing audience section: ${audience}`);
    continue;
  }

  const entries = [...section.matchAll(/^\| \[([a-z0-9-]+)\]\(([^)]+)\) \/ \[EN\]\(([^)]+)\)<br>/gm)];
  counts.set(audience, entries.length);
  if (entries.length !== expectedCount) errors.push(`${audience}: expected ${expectedCount} IDs, found ${entries.length}`);

  for (const [, id, zhLink, enLink] of entries) {
    if (ids.has(id)) errors.push(`Duplicate question ID: ${id}`);
    ids.add(id);
    const expectedZhPath = `../src/content/questions/zh-CN/${id}.md`;
    const expectedEnPath = `../src/content/questions/en/${id}.md`;
    if (zhLink !== expectedZhPath || enLink !== expectedEnPath) errors.push(`${id}: locale links do not match its stable ID`);
    const row = section.split('\n').find((line) => line.startsWith('| [' + id + ']')) ?? '';
    const listedPerspective = row.match(/\| ([a-z]+)（(high|low)） \|/);
    const assignment = assignments.get(id);
    if (!listedPerspective) errors.push(`${id}: missing inferred respondent perspective and confidence`);
    else if (!assignment || listedPerspective[1] !== assignment.perspective || listedPerspective[2] !== assignment.confidence) {
      errors.push(`${id}: listed respondent perspective/confidence differs from migration report`);
    }

    const localeFiles = [
      ['zh-CN', 'src/content/questions/zh-CN/' + id + '.md'],
      ['en', 'src/content/questions/en/' + id + '.md'],
    ];
    const pair = [];
    for (const [locale, path] of localeFiles) {
      try {
        const source = await readFile(resolve(root, path), 'utf8');
        const frontmatter = source.match(/^---\s*\n([\s\S]*?)\n---/);
        if (!frontmatter) throw new Error('missing YAML frontmatter');
        const record = yaml.load(frontmatter[1]);
        if (record.questionId !== id || record.locale !== locale || record.status !== 'published') {
          errors.push(`${id} (${locale}): missing or unpublished paired record`);
        }
        if (!['extended', 'core'].includes(record.qualityTier)) errors.push(`${id} (${locale}): invalid question quality tier`);
        pair.push(record);
        if (locale === 'zh-CN') domains.add(record.primaryCapability.split('.')[0]);
      } catch (error) {
        errors.push(`${id} (${locale}): ${error.message}`);
      }
    }
    if (pair.length === 2) {
      if (pair[0].perspective !== pair[1].perspective) errors.push(`${id}: bilingual respondent perspectives disagree`);
      const pairState = pair.map((record) => `${record.qualityTier}:${record.perspectiveReview}`);
      const isUnreviewedCandidate = pairState.every((state) => state === 'extended:inferred');
      const isApprovedCore = pairState.every((state) => state === 'core:reviewed');
      if (!isUnreviewedCandidate && !isApprovedCore) errors.push(`${id}: bilingual records must remain extended/inferred or advance together to core/reviewed`);
    }
  }
}

if (ids.size !== 100) errors.push(`Expected 100 unique question IDs, found ${ids.size}`);
for (const domain of expectedDomains) if (!domains.has(domain)) errors.push(`Missing capability domain: ${domain}`);
for (const domain of domains) if (!expectedDomains.has(domain)) errors.push(`Unexpected capability domain: ${domain}`);

if (errors.length) {
  console.error(`Core candidate check failed (${errors.length} issues):\n- ${errors.join('\n- ')}`);
  process.exitCode = 1;
} else {
  console.log(`Validated ${ids.size} unique bilingual candidates across ${domains.size} domains.`);
  console.log([...counts].map(([audience, count]) => `${audience}: ${count}`).join('\n'));
}
