import { glob, readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import yaml from 'js-yaml';
import { inferQuestionPerspective } from '../src/lib/question-perspective.ts';

function parseArgs(args) {
  const options = { mode: undefined, root: process.cwd(), details: false };
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] === '--check' || args[index] === '--write') options.mode = args[index].slice(2);
    else if (args[index] === '--details') options.details = true;
    else if (args[index] === '--root' && args[index + 1]) options.root = resolve(args[++index]);
    else throw new Error(`Unknown or incomplete argument: ${args[index]}`);
  }
  if (!options.mode) throw new Error('Choose --check or --write');
  return options;
}

function frontmatter(source, fields) {
  const match = source.match(/^(---\s*\n)([\s\S]*?)(\n---)/);
  if (!match) throw new Error('missing YAML frontmatter');
  const lines = match[2].split('\n');
  for (const [key, value] of Object.entries(fields)) {
    const fieldLine = new RegExp(`^${key}:`);
    const index = lines.findIndex((line) => fieldLine.test(line));
    if (index === -1) lines.push(`${key}: ${value}`);
    else lines[index] = `${key}: ${value}`;
  }
  return `${match[1]}${lines.join('\n')}${match[3]}${source.slice(match[0].length)}`;
}

function getExistingPairValue(pair, field, id) {
  const values = [...new Set(pair.map(({ data }) => data[field]).filter((value) => value !== undefined))];
  if (values.length > 1) throw new Error(`${id}: bilingual ${field} values disagree (${values.join(', ')})`);
  return values[0];
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  const root = options.root;
  const files = [];
  for await (const path of glob('src/content/questions/{zh-CN,en}/*.md', { cwd: root })) {
    const absolutePath = resolve(root, path);
    const source = await readFile(absolutePath, 'utf8');
    const match = source.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!match) throw new Error(`${relative(root, absolutePath)}: missing YAML frontmatter`);
    const data = yaml.load(match[1]);
    if (!data || typeof data !== 'object' || typeof data.questionId !== 'string') throw new Error(`${relative(root, absolutePath)}: invalid question frontmatter`);
    files.push({ absolutePath, path: relative(root, absolutePath), source, data });
  }

  const grouped = new Map();
  for (const file of files) grouped.set(file.data.questionId, [...(grouped.get(file.data.questionId) ?? []), file]);
  const changes = [];
  const assignments = [];
  const lowConfidence = [];
  for (const [id, pair] of grouped) {
    const locales = new Set(pair.map(({ data }) => data.locale));
    if (pair.length !== 2 || !locales.has('zh-CN') || !locales.has('en')) throw new Error(`${id}: expected exactly one record per locale`);
    const inference = inferQuestionPerspective(pair.map(({ data }) => data));
    const existingReview = getExistingPairValue(pair, 'perspectiveReview', id);
    const hasReviewedPerspective = existingReview === 'reviewed';
    const existingPerspective = hasReviewedPerspective ? getExistingPairValue(pair, 'perspective', id) : undefined;
    const perspective = existingPerspective ?? inference.perspective;
    const existingTier = getExistingPairValue(pair, 'qualityTier', id);
    const qualityTier = existingTier ?? 'extended';
    const perspectiveReview = existingReview ?? 'inferred';

    assignments.push({ questionId: id, perspective, perspectiveReview, qualityTier, confidence: hasReviewedPerspective ? 'reviewed' : inference.confidence, reasons: hasReviewedPerspective ? ['Human-reviewed; migration preserves assignment.'] : inference.reasons });
    if (!hasReviewedPerspective && inference.confidence === 'low') lowConfidence.push({ questionId: id, perspective, reasons: inference.reasons });

    for (const file of pair) {
      const missing = {};
      if (file.data.perspective === undefined || (!hasReviewedPerspective && file.data.perspective !== perspective)) missing.perspective = perspective;
      if (file.data.perspectiveReview === undefined) missing.perspectiveReview = perspectiveReview;
      if (file.data.qualityTier === undefined) missing.qualityTier = qualityTier;
      if (Object.keys(missing).length) changes.push({ ...file, missing });
    }
  }

  const counts = Object.fromEntries(['candidate', 'interviewer', 'manager'].map((perspective) => [perspective, assignments.filter((item) => item.perspective === perspective).length]));
  const report = { recordCount: files.length, questionCount: grouped.size, counts, lowConfidence, assignments };
  console.log(`Question quality migration: ${grouped.size} IDs, ${files.length} records; ${changes.length} records pending; ${lowConfidence.length} low-confidence assignments.`);

  if (options.mode === 'write') {
    for (const change of changes) {
      const source = frontmatter(change.source, change.missing);
      await writeFile(change.absolutePath, source);
    }
    const reportPath = resolve(root, 'docs/reviews/2026-10-19-question-perspective-migration.json');
    await mkdir(resolve(root, 'docs/reviews'), { recursive: true });
    await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
    console.log(`Wrote ${relative(root, reportPath)}.`);
  } else if (options.details) {
    console.log(JSON.stringify({ counts, lowConfidence }, null, 2));
  }
}

run().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
