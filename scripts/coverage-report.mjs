import { readFile, glob } from 'node:fs/promises';
import * as yaml from 'js-yaml';
import { domains, facetDefinitions } from '../src/lib/taxonomy.ts';

const records = [];
for await (const path of glob('src/content/questions/**/*.md')) {
  const match = (await readFile(path, 'utf8')).match(/^---\s*\n([\s\S]*?)\n---/);
  if (match) records.push(yaml.load(match[1]));
}
const published = records.filter((record) => record.status === 'published');
const unique = (list) => new Set(list.map((record) => record.questionId)).size;
const zh = published.filter((record) => record.locale === 'zh-CN');
const tally = (pick) => {
  const counts = new Map();
  for (const record of zh) for (const id of new Set(pick(record))) counts.set(id, (counts.get(id) ?? 0) + 1);
  return counts;
};

console.log(`Unique published questions: ${unique(published)} (zh-CN ${zh.length}, en ${published.length - zh.length})\n`);
const byLeaf = tally((record) => [record.primaryCapability]);
console.log('By domain and leaf:');
for (const domain of domains) {
  const total = domain.leaves.reduce((sum, leaf) => sum + (byLeaf.get(`${domain.id}.${leaf.id}`) ?? 0), 0);
  console.log(`  ${domain.letter} ${domain.name.en}: ${total}`);
  for (const leaf of domain.leaves) console.log(`      ${leaf.id}: ${byLeaf.get(`${domain.id}.${leaf.id}`) ?? 0}`);
}
for (const [kind, key] of [['roles', 'roles'], ['scenarios', 'scenarios'], ['formats', 'formats']]) {
  const counts = tally((record) => record[key] ?? []);
  console.log(`\nBy ${kind}:`);
  for (const entry of facetDefinitions[kind]) console.log(`  ${entry.id}: ${counts.get(entry.id) ?? 0}`);
}

let sources = 0;
let used = 0;
let skipped = 0;
for await (const path of glob('docs/planning/source-ledger/*.yml')) {
  for (const entry of yaml.load(await readFile(path, 'utf8'))?.sources ?? []) {
    sources += 1;
    if (entry.status === 'used') used += 1; else skipped += 1;
  }
}
console.log(`\nSource ledger: ${sources} sources reviewed, ${used} used, ${skipped} reviewed-not-used`);
