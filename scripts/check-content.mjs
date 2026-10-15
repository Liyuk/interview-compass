import { readFile, glob } from 'node:fs/promises';
import yaml from 'js-yaml';
import { crossDomainPaths, domains, taxonomy } from '../src/lib/taxonomy.ts';

const facets = ['topics', 'roles', 'responsibilityScopes', 'careerTracks', 'scenarios', 'formats'];
const required = ['questionId', 'kind', 'status', 'locale', 'title', 'question', 'intent', 'signals', 'primaryCapability', ...facets, 'source'];
const provenance = new Set(['adapted', 'derived', 'inspired', 'original']);
const forbidden = /^(answer|sampleAnswer|rubric|scorecard|recommendation|score)$/i;
const errors = [];
const records = [];

for await (const path of glob('src/content/questions/**/*.md')) {
  const fail = (message) => errors.push(`${path}: ${message}`);
  const source = await readFile(path, 'utf8');
  const match = source.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) { fail('missing YAML frontmatter'); continue; }
  const data = yaml.load(match[1]);
  if (!data || typeof data !== 'object') { fail('frontmatter must be an object'); continue; }
  const missing = required.filter((key) => data[key] === undefined || data[key] === null);
  if (missing.length) { fail(`missing fields ${missing.join(', ')}`); continue; }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.questionId)) fail('questionId must be stable kebab-case');
  if (data.kind !== 'question' || !['draft', 'published'].includes(data.status) || !['zh-CN', 'en'].includes(data.locale)) fail('invalid kind, status, or locale');
  if (!path.includes(`/${data.locale}/`)) fail(`file is not under the ${data.locale} directory`);
  if (!taxonomy.capabilities.includes(data.primaryCapability)) fail(`unknown primary capability ${data.primaryCapability}`);
  for (const facet of facets) {
    if (!Array.isArray(data[facet]) || data[facet].some((id) => !taxonomy[facet].includes(id))) fail(`unknown or malformed ${facet} value`);
  }
  if (!Array.isArray(data.signals) || data.signals.length === 0 || data.signals.some((item) => typeof item !== 'string' || !item.trim())) fail('signals must be a non-empty list of strings');
  if (!Array.isArray(data.source) || data.source.length === 0) fail('source must declare provenance');
  else for (const item of data.source) {
    if (!provenance.has(item.attribution)) fail(`unknown source attribution ${item.attribution}`);
    else if (item.attribution !== 'original' && !item.url) fail(`${item.attribution} source needs a url`);
  }
  if (Object.keys(data).some((key) => forbidden.test(key))) fail('public question content cannot contain answers or hiring judgments');
  records.push({ ...data, path });
}

const published = records.filter((record) => record.status === 'published');
const grouped = new Map();
for (const record of published) grouped.set(record.questionId, [...(grouped.get(record.questionId) ?? []), record]);
for (const [id, pair] of grouped) {
  for (const locale of ['zh-CN', 'en']) {
    const matches = pair.filter((record) => record.locale === locale);
    if (matches.length !== 1) errors.push(`${id}: expected exactly one ${locale} translation, found ${matches.length}`);
  }
  if (new Set(pair.map((record) => record.primaryCapability)).size > 1) errors.push(`${id}: primary capability differs between locales`);
  for (const facet of facets) {
    const values = pair.map((record) => [...record[facet]].sort().join('|'));
    if (new Set(values).size > 1) errors.push(`${id}: ${facet} differs between locales`);
  }
}
const wording = new Map();
for (const record of published) {
  for (const relation of record.relatedQuestions ?? []) {
    if (!published.some((candidate) => candidate.questionId === relation.questionId && candidate.locale === record.locale)) {
      errors.push(`${record.questionId}: missing ${record.locale} related question ${relation.questionId}`);
    }
  }
  const key = `${record.locale}:${record.question.replace(/\s+/g, ' ').trim().toLowerCase()}`;
  if (wording.has(key) && wording.get(key) !== record.questionId) errors.push(`duplicate ${record.locale} wording in ${wording.get(key)} and ${record.questionId}`);
  wording.set(key, record.questionId);
}

const publishedIds = new Set(published.map((record) => record.questionId));
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

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
const ids = new Set(published.map((record) => record.questionId));
console.log(`Validated ${records.length} question records (${ids.size} published questions, bilingual).`);
