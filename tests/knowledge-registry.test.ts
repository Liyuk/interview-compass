import { describe, expect, it } from 'vitest';
import { createKnowledgeRegistry } from '../src/lib/knowledge/registry';

describe('knowledge registry', () => {
  it('reader can find the current article and its ancestors', () => {
    const result = createKnowledgeRegistry({ nodes: [
      { contentId: 'A', locale: 'zh-CN', title: '知识', href: '/knowledge/', kind: 'guide', missingTranslations: ['en'] },
      { contentId: 'B', locale: 'zh-CN', title: '方法', href: '/knowledge/method/', kind: 'method', primaryParentId: 'A', missingTranslations: ['en'] },
      { contentId: 'C', locale: 'zh-CN', title: '取证', href: '/knowledge/method/evidence/', kind: 'method', primaryParentId: 'B', missingTranslations: ['en'] },
    ] });
    expect(result.ok).toBe(true);
    if (result.ok === false) throw new Error(JSON.stringify(result.diagnostics));
    const navigation = result.registry.navigation('C', 'zh-CN');
    expect(navigation.ancestors.map(node => node.contentId)).toEqual(['A', 'B']);
    expect(navigation.current?.contentId).toBe('C');
    expect(navigation.tree[0]).toMatchObject({ contentId: 'A', expanded: true, children: [{ contentId: 'B', expanded: true, children: [{ contentId: 'C', current: true }] }] });
  });
});

it('rejects cyclic parents before readers traverse the document tree', () => {
  const result = createKnowledgeRegistry({ nodes: [
    { contentId: 'A', locale: 'zh-CN', title: 'A', kind: 'guide', primaryParentId: 'B', missingTranslations: ['en'] },
    { contentId: 'B', locale: 'zh-CN', title: 'B', kind: 'guide', primaryParentId: 'A', missingTranslations: ['en'] },
  ] });
  expect(result.ok).toBe(false);
  if (result.ok === false) expect(result.diagnostics).toContainEqual(expect.objectContaining({ code: 'parent-cycle', contentId: 'A' }));
});

it('rejects ambiguous published identities and destinations', () => {
  const result = createKnowledgeRegistry({ nodes: [
    { contentId: 'A', locale: 'zh-CN', title: 'A', href: '/a/', kind: 'guide', missingTranslations: ['en'] },
    { contentId: 'A', locale: 'zh-CN', title: 'Duplicate', href: '/duplicate/', kind: 'guide', missingTranslations: ['en'] },
    { contentId: 'B', locale: 'zh-CN', title: 'Same URL', href: '/a/', kind: 'guide', missingTranslations: ['en'] },
  ] });
  expect(result.ok).toBe(false);
  if (result.ok === false) expect(result.diagnostics.map(item => item.code)).toEqual(expect.arrayContaining(['duplicate-id', 'duplicate-url']));
});

it('rejects a page whose parent does not exist in its language', () => {
  const result = createKnowledgeRegistry({ nodes: [{ contentId: 'child', locale: 'zh-CN', title: 'Child', kind: 'guide', primaryParentId: 'missing', missingTranslations: ['en'] }] });
  expect(result.ok).toBe(false);
  if (result.ok === false) expect(result.diagnostics).toContainEqual(expect.objectContaining({ code: 'missing-parent', contentId: 'child' }));
});

it('requires a translation or an explicit missing-translation declaration', () => {
  const result = createKnowledgeRegistry({ nodes: [{ contentId: 'guide', locale: 'zh-CN', title: '说明', href: '/guide/', kind: 'guide' }] });
  expect(result.ok).toBe(false);
  if (result.ok === false) expect(result.diagnostics).toContainEqual(expect.objectContaining({ code: 'missing-translation', contentId: 'guide' }));
});

it('enumerates localized pages for build adapters without leaking grouping nodes', () => {
  const result = createKnowledgeRegistry({nodes:[
    {contentId:'group',locale:'en',kind:'group',title:'Group',missingTranslations:['zh-CN']},
    {contentId:'guide',locale:'en',kind:'guide',title:'Guide',href:'/en/guide/',primaryParentId:'group',missingTranslations:['zh-CN']},
  ]});
  if(result.ok === false) throw Error('fixture');
  expect(result.registry.pages('en').map(node=>node.contentId)).toEqual(['guide']);
  expect(result.registry.pages('zh-CN')).toEqual([]);
});

it('scopes the board tree without changing a question’s permanent ancestry', () => {
  const result = createKnowledgeRegistry({nodes: [
    {contentId:'questions',locale:'en',kind:'index',title:'Questions',href:'/questions/',missingTranslations:['zh-CN']},
    {contentId:'collections',locale:'en',kind:'index',title:'Collections',href:'/collections/',primaryParentId:'questions',missingTranslations:['zh-CN']},
    {contentId:'browse',locale:'en',kind:'index',title:'Categories',href:'/browse/',missingTranslations:['zh-CN']},
    {contentId:'leaf',locale:'en',kind:'concept',title:'Planning',href:'/planning/',primaryParentId:'browse',missingTranslations:['zh-CN']},
    {contentId:'q',locale:'en',kind:'question',title:'Question',href:'/questions/q/',primaryParentId:'leaf',hiddenFromNavigation:true,missingTranslations:['zh-CN']},
  ]});
  if (!result.ok) throw Error('fixture');
  const list = result.registry.navigation('questions','en','questions');
  const article = result.registry.navigation('q','en','questions');
  expect(article.tree.map(node=>node.contentId)).toEqual(['questions']);
  expect(article.tree[0].children.map(node=>node.contentId)).toEqual(list.tree[0].children.map(node=>node.contentId));
  expect(article.tree[0].children.map(node=>node.contentId)).toEqual(['collections']);
  expect(article.ancestors.map(node=>node.contentId)).toEqual(['browse','leaf']);
});
