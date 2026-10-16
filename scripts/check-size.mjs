import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const limits = {
  totalDist: 220 * 1024 * 1024,
  maxHtml: 450 * 1024,
  maxJs: 220 * 1024,
  maxCss: 80 * 1024,
};

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (entry.isFile()) files.push(full);
  }
  return files;
}

function rel(file) {
  return path.relative(root, file).split(path.sep).join('/');
}

const files = await walk(root);
const sized = await Promise.all(files.map(async file => ({ file, rel: rel(file), bytes: (await stat(file)).size })));
const total = (items) => items.reduce((sum, item) => sum + item.bytes, 0);
const html = sized.filter(item => item.rel.endsWith('.html'));
const js = sized.filter(item => item.rel.endsWith('.js'));
const css = sized.filter(item => item.rel.endsWith('.css'));
const questionPages = html.filter(item => /^(en\/)?questions\/[^/]+\/index\.html$/.test(item.rel) && !item.rel.endsWith('questions/index.html'));
const listPages = html.filter(item => /^(en\/)?(questions\/index\.html|(scenarios|roles|topics)\/.+\/index\.html)$/.test(item.rel));
const largest = (items) => items.reduce((best, item) => item.bytes > best.bytes ? item : best, { rel: '', bytes: 0 });
const report = {
  totalDist: total(sized),
  totalHtml: total(html),
  questionPageAvg: questionPages.length ? Math.round(total(questionPages) / questionPages.length) : 0,
  questionPages: questionPages.length,
  largestListPage: largest(listPages),
  maxHtml: largest(html),
  totalJs: total(js),
  maxJs: largest(js),
  totalCss: total(css),
  maxCss: largest(css),
};
console.log(JSON.stringify(report, null, 2));

const failures = [];
if (report.totalDist > limits.totalDist) failures.push(`dist total ${report.totalDist} exceeds ${limits.totalDist}`);
if (report.maxHtml.bytes > limits.maxHtml) failures.push(`${report.maxHtml.rel} is ${report.maxHtml.bytes} bytes, over the ${limits.maxHtml} HTML page budget`);
if (report.maxJs.bytes > limits.maxJs) failures.push(`${report.maxJs.rel} is ${report.maxJs.bytes} bytes, over the ${limits.maxJs} JavaScript budget`);
if (report.maxCss.bytes > limits.maxCss) failures.push(`${report.maxCss.rel} is ${report.maxCss.bytes} bytes, over the ${limits.maxCss} CSS budget`);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
}
