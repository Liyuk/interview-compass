import { readdir, readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
const root = resolve('dist');
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]))).flat();
}
const pages = (await files(root)).filter(file => file.endsWith('.html'));
const failures = [];
let redirects = 0;
const checkedPaths = new Map();
async function exists(path) {
  if (!checkedPaths.has(path)) checkedPaths.set(path, stat(path).then(() => true, () => false));
  return checkedPaths.get(path);
}
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  if (/<meta[^>]+http-equiv="refresh"/i.test(html)) { redirects++; continue; }
  const nav = html.match(/<nav\b[^>]*id="primary-navigation"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
  if (!nav || (nav.match(/<a\b/g) ?? []).length !== 3) failures.push(`${file}: expected Home, Preparation guide and Question bank links`);
  if (!/id="site-search"/.test(html)) failures.push(`${file}: missing global search input`);
  if ((html.match(/<main\b/g) ?? []).length !== 1) failures.push(`${file}: expected one main landmark`);
  for (const [, href] of html.matchAll(/\bhref="(\/interview-compass\/[^"?#]*)(?:[^"#]*)(?:#[^"]*)?"/g)) {
    const path = decodeURI(href.replace('/interview-compass/', '')).replaceAll('&amp;', '&');
    if (path.includes('..')) { failures.push(`${file}: parent traversal ${href}`); continue; }
    const target = join(root, path);
    if (!(await exists(target)) && !(await exists(join(target, 'index.html')))) failures.push(`${file}: missing internal target ${href}`);
  }
}
console.log(JSON.stringify({ pages: pages.length, contentPages: pages.length - redirects, redirects, failures: failures.length, examples: failures.slice(0, 25) }, null, 2));
if (failures.length) process.exitCode = 1;
