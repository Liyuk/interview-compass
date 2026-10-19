import { readdir, readFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
async function files(dir) {
  const entries = await readdir(dir,{withFileTypes:true});
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? files(join(dir,entry.name)) : [join(dir,entry.name)]))).flat();
}
export async function checkKnowledgeOutput({root,baseline,knowledge = undefined}) {
  const failures=[];
  const paths = await files(root);
  const available = new Set(paths.map(file=>relative(root,file).replaceAll('\\','/')));
  const pages = new Map();
  const pageIds = new Map();
  const base = baseline.base.endsWith('/') ? baseline.base : `${baseline.base}/`;
  for(const file of paths.filter(file=>file.endsWith('.html'))) {
    const path = relative(root,file).replaceAll('\\','/');
    const url = base + (path === 'index.html' ? '' : path.endsWith('/index.html') ? path.slice(0,-10) : path);
    pages.set(url,await readFile(file,'utf8'));
  }
  for(const [url,html] of pages) {
    for(const [,resource] of html.matchAll(/\bsrc="([^"]+)"/g)) {
      if(!resource.startsWith(base)) continue;
      const path=decodeURIComponent(new URL(resource,'https://output.invalid').pathname.slice(base.length));
      if(!available.has(path)) failures.push(`Missing resource ${url} → ${resource}`);
    }
    const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]));
    const headingIds=new Set([...html.matchAll(/<h[1-6]\b[^>]*\bid="([^"]+)"/g)].map(match=>match[1]));
    const fragmentTargets=new Set();
    for(const [,hash] of html.matchAll(/\bhref="#([^"\s]+)"/g)) {
      try { fragmentTargets.add(decodeURIComponent(hash)); } catch { fragmentTargets.add(hash); }
    }
    pageIds.set(url,ids);
    for(const [,nav] of html.matchAll(/<nav\b[^>]*aria-label="(?:本页目录|On this page)"[^>]*>([\s\S]*?)<\/nav>/g)) for(const [,hash] of nav.matchAll(/href="#([^"]+)"/g)) {
      let id; try { id=decodeURIComponent(hash); } catch { id=hash; }
      if(!ids.has(id)) failures.push(`Missing outline target ${url}#${id}`);
    }
    const seen=new Set();
    for(const [,id] of html.matchAll(/<h[1-6]\b[^>]*\bid="([^"]+)"/g)) {
      if(seen.has(id)) failures.push(`Duplicate chapter ${url}#${id}`);
      seen.add(id);
    }
  }
  for(const page of baseline.pages) {
    const html=pages.get(page.url);
    if(html===undefined) { failures.push(`Missing legacy page ${page.url}`); continue; }
    const ids=pageIds.get(page.url);
    const headingIds=new Set([...html.matchAll(/<h[1-6]\b[^>]*\bid="([^"]+)"/g)].map(match=>match[1]));
    const fragmentTargets=new Set();
    for(const [,hash] of html.matchAll(/\bhref="#([^"\s]+)"/g)) {
      try { fragmentTargets.add(decodeURIComponent(hash)); } catch { fragmentTargets.add(hash); }
    }
    for(const id of baseline.anchorSets[page.anchorSet] ?? []) {
      // The historic snapshot includes plugin-namespaced UI controls as well as document anchors.
      // Keep normal anchors and any currently referenced fragment; ignore retired namespaced controls.
      const pluginControl = /^[a-z][a-z0-9-]*__[a-z0-9_-]+$/i.test(id) && !headingIds.has(id) && !fragmentTargets.has(id);
      if(!pluginControl && !ids.has(id)) failures.push(`Missing legacy anchor ${page.url}#${id}`);
    }
  }
  if(knowledge) {
    const nodesByIdentity=new Map(knowledge.nodes.map(node=>[`${node.locale}:${node.contentId}`,node]));
    for(const node of knowledge.nodes) {
      const html=pages.get(node.href);
      if(!html) {failures.push(`Missing knowledge page ${node.locale}:${node.contentId} → ${node.href}`);continue;}
      const data=html.match(/<script\b[^>]*id="article-section-translations"[^>]*>([\s\S]*?)<\/script>/)?.[1];
      if(!data) continue;
      let sections;try {sections=JSON.parse(data);}catch {failures.push(`Invalid section map ${node.href}`);continue;}
      for(const section of sections) for(const [locale,id]of Object.entries(section.anchors)) {
        const destination=nodesByIdentity.get(`${locale}:${node.contentId}`);
        const target=pages.get(destination?.href);
        if(!target || !pageIds.get(destination.href)?.has(id)) failures.push(`Missing translated chapter ${node.href} → ${destination?.href ?? locale}#${id}`);
      }
    }
    const identities=new Set(knowledge.nodes.map(node=>`${node.locale}:${node.contentId}`));
    for(const edge of knowledge.edges) if(!identities.has(`${edge.locale}:${edge.from}`) || !identities.has(`${edge.locale}:${edge.to}`)) failures.push(`Dangling relation ${edge.locale}:${edge.from} → ${edge.to}`);
  }
  return {pages:pages.size,failures};
}
if(process.argv[1] && import.meta.url===pathToFileURL(resolve(process.argv[1])).href) {
  const baseline=JSON.parse(await readFile('docs/reviews/2026-10-18-docs-wiki-compatibility-baseline.json','utf8'));
  const knowledge=JSON.parse(await readFile('dist/data/knowledge/manifest.v1.json','utf8'));
  const result=await checkKnowledgeOutput({root:resolve('dist'),baseline,knowledge});
  console.log(JSON.stringify({...result,failures:result.failures.length,examples:result.failures.slice(0,30)},null,2));
  if(result.failures.length) process.exitCode=1;
}
