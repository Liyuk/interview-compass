import { expect, it } from 'vitest';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { checkKnowledgeOutput } from '../scripts/check-knowledge-output.mjs';

it('rejects missing old pages and anchors, duplicate chapters, and dangling relations', async () => {
  const root = await mkdtemp(join(tmpdir(),'compass-output-'));
  try {
    const baseline = {base:'/app/',pages:[{url:'/app/guide/',anchorSet:'chapters'}],anchorSets:{chapters:['intro']}};
    expect((await checkKnowledgeOutput({root,baseline})).failures).toContain('Missing legacy page /app/guide/');
    await mkdir(join(root,'guide'));
    await writeFile(join(root,'guide/index.html'),'<h2 id="other">Other</h2>');
    expect((await checkKnowledgeOutput({root,baseline})).failures).toContain('Missing legacy anchor /app/guide/#intro');
    await writeFile(join(root,'guide/index.html'),'<h2 id="intro">Intro</h2><h3 id="intro">Duplicate</h3>');
    expect((await checkKnowledgeOutput({root,baseline})).failures).toContain('Duplicate chapter /app/guide/#intro');
    const knowledge = {nodes:[{contentId:'guide',locale:'en',href:'/app/guide/'}],edges:[{from:'guide',to:'missing',locale:'en'}]};
    expect((await checkKnowledgeOutput({root,baseline,knowledge})).failures).toContain('Dangling relation en:guide → missing');
    await writeFile(join(root,'guide/index.html'),'<h2 id="intro">Intro</h2>');
    expect((await checkKnowledgeOutput({root,baseline,knowledge:{...knowledge,edges:[]}})).failures).toEqual([]);
  } finally { await rm(root,{recursive:true,force:true}); }
});

it('rejects a rendered article outline that points to no chapter', async () => {
  const root=await mkdtemp(join(tmpdir(),'compass-outline-'));
  try {
    await writeFile(join(root,'index.html'),'<nav aria-label="本页目录"><a href="#missing">Missing</a></nav>');
    const result=await checkKnowledgeOutput({root,baseline:{base:'/',pages:[],anchorSets:{}}});
    expect(result.failures).toContain('Missing outline target /#missing');
  } finally {await rm(root,{recursive:true,force:true});}
});

it('does not require a retired plugin-namespaced UI id from the old anchor snapshot', async () => {
  const root=await mkdtemp(join(tmpdir(),'compass-legacy-disclosure-'));
  try {
    const baseline={base:'/app/',pages:[{url:'/app/guide/',anchorSet:'guide'}],anchorSets:{guide:['intro','legacy-plugin__disclosure-control']}};
    await mkdir(join(root,'guide'));
    await writeFile(join(root,'guide/index.html'),'<h2 id="intro">Intro</h2><details><summary>On this page</summary></details>');
    expect((await checkKnowledgeOutput({root,baseline})).failures).toEqual([]);
  } finally { await rm(root,{recursive:true,force:true}); }
});

it('checks translated chapter destinations and referenced resources', async () => {
  const root=await mkdtemp(join(tmpdir(),'compass-translations-'));
  try {
    await writeFile(join(root,'index.html'),'<h2 id="intro">Intro</h2><img src="/app/missing.svg"><script id="article-section-translations" type="application/json">[{"sectionKey":"intro","anchors":{"en":"intro","zh-CN":"不存在"}}]</script>');
    await mkdir(join(root,'zh'));await writeFile(join(root,'zh/index.html'),'<h2 id="简介">Intro</h2>');
    const knowledge={nodes:[{contentId:'guide',locale:'en',href:'/app/'},{contentId:'guide',locale:'zh-CN',href:'/app/zh/'}],edges:[]};
    const result=await checkKnowledgeOutput({root,baseline:{base:'/app/',pages:[],anchorSets:{}},knowledge});
    expect(result.failures).toContain('Missing translated chapter /app/ → /app/zh/#不存在');
    expect(result.failures).toContain('Missing resource /app/ → /app/missing.svg');
  } finally {await rm(root,{recursive:true,force:true});}
});
