import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import yaml from 'js-yaml';

const directory = path.resolve('src/content/questions/zh-CN');
const threshold = Number(process.env.SIMILARITY_THRESHOLD ?? 0.3);
if (!Number.isFinite(threshold) || threshold < 0 || threshold > 1) {
  throw new Error('SIMILARITY_THRESHOLD must be between 0 and 1');
}
const files = (await readdir(directory)).filter((file) => file.endsWith('.md')).sort();
const records = [];
for (const file of files) {
  const source = await readFile(path.join(directory, file), 'utf8');
  const frontmatter = source.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontmatter) throw new Error(`Missing frontmatter: ${file}`);
  const record = yaml.load(frontmatter[1]);
  if (record.status !== 'published') continue;
  const prompt = String(record.question).replace(/\n\s*(?:追问|Follow-up)[:：][\s\S]*$/i, '');
  records.push({ id: record.questionId, title: record.title, prompt, file });
}

const segmenter = new Intl.Segmenter('zh-CN', { granularity: 'word' });
const stopWords = new Set(['如何', '怎样', '什么', '哪些', '是否', '时候', '情况', '问题', '进行', '一个', '这个', '自己', '你会', '你如何', '可以', '以及', '如果', '面对', '之后', '并且', '能够', '需要', '说明', '判断']);
const featureCounts = records.map((record) => {
  const text = `${record.title} ${record.prompt}`.toLowerCase().normalize('NFKC');
  const counts = new Map();
  for (const part of segmenter.segment(text)) {
    if (part.isWordLike && part.segment.length > 1 && !stopWords.has(part.segment)) {
      const key = `w:${part.segment}`;
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  const compact = text.replace(/[\p{P}\p{S}\s]/gu, '');
  for (let index = 0; index < compact.length - 1; index++) {
    const pair = compact.slice(index, index + 2);
    if (pair.length === 2) {
      const key = `c:${pair}`;
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  return counts;
});

const documentFrequency = new Map();
for (const counts of featureCounts) for (const feature of counts.keys()) documentFrequency.set(feature, (documentFrequency.get(feature) ?? 0) + 1);
const vectors = featureCounts.map((counts) => {
  const weighted = new Map(); let norm = 0;
  for (const [feature, count] of counts) {
    const idf = Math.log(1 + records.length / (1 + documentFrequency.get(feature)));
    const weight = (1 + Math.log(count)) * idf;
    weighted.set(feature, weight); norm += weight * weight;
  }
  return { weighted, norm: Math.sqrt(norm) };
});

// Deliberately serial: each unordered pair is scored once in stable ID order.
const candidates = [];
for (let left = 0; left < records.length; left++) {
  for (let right = left + 1; right < records.length; right++) {
    const a = vectors[left]; const b = vectors[right];
    let dot = 0;
    for (const [feature, weight] of a.weighted) dot += weight * (b.weighted.get(feature) ?? 0);
    const similarity = dot / (a.norm * b.norm || 1);
    if (similarity >= threshold) candidates.push({ similarity, a: records[left], b: records[right] });
  }
}
candidates.sort((a, b) => b.similarity - a.similarity || a.a.id.localeCompare(b.a.id) || a.b.id.localeCompare(b.b.id));
console.log(`Serial comparison: ${records.length} published Chinese prompts, ${records.length * (records.length - 1) / 2} pairs, ${candidates.length} candidates at similarity >= ${threshold.toFixed(2)}.`);
for (const candidate of candidates.slice(0, 250)) {
  console.log(`${candidate.similarity.toFixed(3)}\t${candidate.a.id}\t${candidate.a.title}\t${candidate.a.prompt}`);
  console.log(`     \t${candidate.b.id}\t${candidate.b.title}\t${candidate.b.prompt}`);
}
