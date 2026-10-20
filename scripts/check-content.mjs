import { readFile, glob } from 'node:fs/promises';
import * as yaml from 'js-yaml';
import { createHash } from 'node:crypto';
import { applicabilityFingerprintInput, validateApplicability } from '../src/lib/question-applicability.ts';
import { questionSchema, validateBilingualPairs, validateNoDuplicateTitles, validateQuestionRelationships } from '../src/lib/content-model.ts';
import { questionQualityWarnings } from '../src/lib/question-quality.ts';
import { crossDomainPaths, domains } from '../src/lib/taxonomy.ts';
import { questionCollections, validateQuestionCollections } from '../src/lib/question-collections.ts';

const forbidden = /^(answer|sampleAnswer|rubric|scorecard|recommendation|score)$/i;
const errors = [];
const records = [];

for await (const path of glob('src/content/questions/**/*.md')) {
  const fail = (message) => errors.push(`${path}: ${message}`);
  const source = await readFile(path, 'utf8');
  const match = source.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) { fail('missing YAML frontmatter'); continue; }
  let data;
  try { data = yaml.load(match[1]); } catch (error) { fail(`invalid YAML: ${error.message}`); continue; }
  if (!data || typeof data !== 'object') { fail('frontmatter must be an object'); continue; }
  const parsed = questionSchema.safeParse(data);
  if (!parsed.success) {
    fail(parsed.error.issues.map((issue) => `${issue.path.join('.') || 'record'}: ${issue.message}`).join('; '));
    continue;
  }
  const record = parsed.data;
  if (!path.includes(`/${record.locale}/`)) fail(`file is not under the ${record.locale} directory`);
  if (Object.keys(data).some((key) => forbidden.test(key))) fail('public question content cannot contain answers or hiring judgments');
  records.push({ ...record, path });
}

const published = records.filter((record) => record.status === 'published');
const contractRecords = published.map(({ path: _path, ...record }) => record);
const grouped = new Map();
for (const record of published) grouped.set(record.questionId, [...(grouped.get(record.questionId) ?? []), record]);
errors.push(...validateBilingualPairs(contractRecords));
errors.push(...validateQuestionRelationships(contractRecords));
errors.push(...validateNoDuplicateTitles(contractRecords));
const qualityWarnings = questionQualityWarnings(published);

const publishedIds = new Set(published.map((record) => record.questionId));
const analysesPath = 'src/data/question-specific-analyses.json';
let specificAnalyses = [];
try {
  specificAnalyses = JSON.parse(await readFile(analysesPath, 'utf8'));
  if (!Array.isArray(specificAnalyses)) throw new Error('expected a JSON array');
} catch (error) {
  errors.push(`${analysesPath}: ${error.message}`);
}
const analysisKeys = new Set();
const analysesByQuestion = new Map();
for (const entry of specificAnalyses) {
  const key = `${entry.questionId}:${entry.locale}`;
  if (analysisKeys.has(key)) errors.push(`${analysesPath}: duplicate analysis for ${key}`);
  analysisKeys.add(key);
  if (!publishedIds.has(entry.questionId)) errors.push(`${analysesPath}: analysis references unknown question ${entry.questionId}`);
  if (!['zh-CN', 'en'].includes(entry.locale) || !published.some((record) => record.questionId === entry.questionId && record.locale === entry.locale)) {
    errors.push(`${analysesPath}: analysis locale does not match a published question for ${key}`);
  }
  if (entry.reviewStatus !== 'reviewed' || !entry.objectiveProblem || !entry.inference?.hypothesis
    || !Array.isArray(entry.inference?.alternatives) || !entry.inference.alternatives.length
    || !Array.isArray(entry.contextQuestions) || !entry.contextQuestions.length
    || !Array.isArray(entry.comparisons) || !entry.comparisons.length
    || !entry.decisionRule || !Array.isArray(entry.benefits) || !entry.benefits.length
    || !Array.isArray(entry.costs) || !entry.costs.length
    || ['notPassing', 'passing', 'excellent', 'exceptional'].some((level) => !entry.anchors?.[level])) {
    errors.push(`${analysesPath}: incomplete reviewed analysis for ${key}`);
  }
  analysesByQuestion.set(entry.questionId, [...(analysesByQuestion.get(entry.questionId) ?? []), entry.locale]);
}
for (const [id, locales] of analysesByQuestion) {
  if (locales.length !== 2 || new Set(locales).size !== 2) errors.push(`${analysesPath}: expected one reviewed analysis per locale for ${id}`);
}
for (const error of validateQuestionCollections(questionCollections, published)) errors.push(`question collections: ${error}`);
for (const path of crossDomainPaths) {
  const matching = (locale) => published.filter((record) => record.locale === locale
    && path.domains.includes(record.primaryCapability.split('.')[0])
    && path.topics.some((topic) => record.topics.includes(topic)));
  const zh = matching('zh-CN');
  const en = matching('en');
  if (!zh.length || !en.length) errors.push(`${path.id}: browse path needs published questions in both languages`);
  const zhIds = new Set(zh.map((record) => record.questionId));
  const enIds = new Set(en.map((record) => record.questionId));
  if (zhIds.size !== enIds.size || [...zhIds].some((id) => !enIds.has(id))) {
    errors.push(`${path.id}: paired question IDs differ between locales`);
  }
}

const usedCapabilities = new Set(published.map((record) => record.primaryCapability));
for (const domain of domains) for (const leaf of domain.leaves) {
  const capability = `${domain.id}.${leaf.id}`;
  if (!usedCapabilities.has(capability) && !leaf.placement.zh.startsWith('规划中：')) {
    errors.push(`${capability}: empty leaf must be explicitly marked as planned or removed from ordinary navigation`);
  }
}

for await (const ledgerPath of glob('docs/planning/source-ledger/*.yml')) {
  try {
    const ledger = yaml.load(await readFile(ledgerPath, 'utf8'));
    for (const entry of ledger?.sources ?? []) {
      if (!['used', 'reviewed-not-used'].includes(entry.status)) errors.push(`${ledgerPath}: ${entry.id} has invalid status ${entry.status}`);
      if (entry.status === 'reviewed-not-used' && !entry.reason) errors.push(`${ledgerPath}: ${entry.id} needs a reason when not used`);
      for (const id of entry.questions ?? []) if (!publishedIds.has(id)) errors.push(`${ledgerPath}: ${entry.id} lists unknown question ${id}`);
      if (entry.status === 'used' && !(entry.questions ?? []).length) errors.push(`${ledgerPath}: ${entry.id} is used but lists no questions`);
    }
  } catch (error) {
    errors.push(`${ledgerPath}: ${error.message}`);
  }
}

try {
  const applicability = JSON.parse(await readFile('src/content/question-applicability.json', 'utf8'));
  const fingerprints = new Map([...grouped].map(([id, pair]) => [id, createHash('sha256').update(applicabilityFingerprintInput(pair)).digest('hex')]));
  errors.push(...validateApplicability(applicability, fingerprints));
  console.log(`Stage applicability: ${applicability.filter(entry => entry.reviewStatus === 'reviewed').length} reviewed, ${applicability.filter(entry => entry.reviewStatus === 'pending').length} pending; pending entries do not enable filtering.`);
} catch (error) {
  errors.push(`stage applicability: ${error.message}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
const ids = new Set(published.map((record) => record.questionId));
const warningCounts = new Map();
for (const warning of qualityWarnings) warningCounts.set(warning.code, (warningCounts.get(warning.code) ?? 0) + 1);
console.log(`Question quality warnings: ${qualityWarnings.length} (${[...warningCounts].map(([code, count]) => `${code} ${count}`).join(', ') || 'none'}).`);
for (const warning of qualityWarnings.slice(0, 12)) console.log(`  ${warning.questionId} (${warning.locale}): ${warning.message}`);
console.log(`Validated ${records.length} question records (${ids.size} published questions, bilingual).`);
