import { readFile } from 'node:fs/promises';
import { glob } from 'node:fs/promises';
import yaml from 'js-yaml';

const records = [];
const knownCapabilities = new Set([
  'professional.problem-solving', 'professional.coding-abstraction', 'professional.system-design', 'professional.computer-science', 'professional.engineering-systems',
  'domain-modeling.business-context', 'domain-modeling.data-modeling', 'domain-modeling.commercial-modeling',
  'value-direction.prioritization', 'value-direction.product-judgment', 'value-direction.planning',
  'delivery.execution', 'delivery.capacity-planning', 'delivery.operations',
  'collaboration.conflict-navigation', 'collaboration.communication', 'people-organization.team-management',
  'people-organization.organization-design', 'learning-adaptation.learning-transfer', 'learning-adaptation.resilience',
  'work-responsibility.ownership', 'work-responsibility.work-style',
]);
const validLocales = new Set(['zh-CN', 'en']);
const taxonomy = {
  topics: new Set('data-structures operating-systems compiler-design computer-networks databases concurrency distributed-systems frontend backend mobile programming-languages frameworks engineering-systems devops microservices micro-frontends monorepo system-design product-thinking commercialization data-modeling feature-modeling planning prioritization resource-allocation execution conflict-resolution hiring promotion operations growth-experiments ai-engineering risk-management learning communication'.split(' ')),
  roles: new Set('engineering frontend backend mobile data product operations marketing design manager pmo'.split(' ')),
  responsibilityScopes: new Set('individual team multiple-teams organization'.split(' ')),
  careerTracks: new Set('individual-contributor team-manager senior-manager executive'.split(' ')),
  scenarios: new Set('interview promotion self-reflection hiring operations-review'.split(' ')),
};
const required = ['questionId', 'kind', 'status', 'locale', 'title', 'question', 'intent', 'primaryCapability', 'topics', 'roles', 'responsibilityScopes', 'careerTracks', 'scenarios'];
for await (const path of glob('src/content/questions/**/*.md')) {
  const source = await readFile(path, 'utf8');
  const match = source.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) throw new Error(`${path}: missing YAML frontmatter`);
  const data = yaml.load(match[1]);
  if (!data || typeof data !== 'object') throw new Error(`${path}: frontmatter must be an object`);
  const missing = required.filter((key) => data[key] === undefined || data[key] === null);
  if (missing.length) throw new Error(`${path}: missing fields ${missing.join(', ')}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.questionId)) throw new Error(`${path}: questionId must be stable kebab-case`);
  if (data.kind !== 'question' || !['draft', 'published'].includes(data.status) || !validLocales.has(data.locale)) throw new Error(`${path}: invalid kind, status, or locale`);
  if (!knownCapabilities.has(data.primaryCapability)) throw new Error(`${path}: unknown primary capability ${data.primaryCapability}`);
  for (const facet of Object.keys(taxonomy)) {
    if (!Array.isArray(data[facet]) || data[facet].some((id) => !taxonomy[facet].has(id))) throw new Error(`${path}: unknown or malformed ${facet} value`);
  }
  if (Object.keys(data).some((key) => /^(answer|sampleAnswer|rubric|scorecard|recommendation)$/i.test(key))) throw new Error(`${path}: public question content cannot contain answers or hiring judgments`);
  records.push(data);
}
const published = records.filter((record) => record.status === 'published');
const grouped = new Map();
for (const record of published) grouped.set(record.questionId, [...(grouped.get(record.questionId) ?? []), record]);
const pairErrors = [];
for (const [id, pair] of grouped) {
  for (const locale of ['zh-CN', 'en']) {
    const matches = pair.filter((record) => record.locale === locale);
    if (matches.length !== 1) pairErrors.push(`${id}: expected exactly one ${locale} translation, found ${matches.length}`);
  }
}
for (const record of published) {
  for (const relation of record.relatedQuestions ?? []) {
    if (!published.some((candidate) => candidate.questionId === relation.questionId && candidate.locale === record.locale)) {
      pairErrors.push(`${record.questionId}: missing ${record.locale} related question ${relation.questionId}`);
    }
  }
}
if (pairErrors.length) throw new Error(pairErrors.join('\n'));
console.log(`Validated ${records.length} question records (${records.filter((record) => record.status === 'published').length} published entries).`);
