import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { gunzipSync } from 'node:zlib';
// Pagefind is pinned to 1.5.2. Its result handles use the emitted fragment stem.
// Isolate this artifact adapter here; fail loudly on incompatible output.
const root = new URL('../dist/', import.meta.url);
const directory = new URL('pagefind/fragment/', root);
const ids = {};
for (const name of await readdir(directory)) {
  if (!name.endsWith('.pf_fragment')) continue;
  const text = gunzipSync(await readFile(new URL(name, directory))).toString();
  if (!text.startsWith('pagefind_dcd')) throw new Error(`Unsupported Pagefind fragment: ${name}`);
  const data = JSON.parse(text.slice('pagefind_dcd'.length));
  const match = data.url.match(/^\/(?:en\/)?questions\/([a-z0-9-]+)\/$/);
  if (match) ids[name.replace(/\.pf_fragment$/, '')] = match[1];
}
if (!Object.keys(ids).length) throw new Error('Search reading identities are missing');
await mkdir(new URL('data/discovery/', root), { recursive: true });
await writeFile(new URL('data/discovery/reading-map.v1.json', root), JSON.stringify({ version: 1, ids }));
console.log(`Search reading map: ${Object.keys(ids).length} localized question identities`);
