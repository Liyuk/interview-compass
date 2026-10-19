import { expect, it } from 'vitest';
import { buildRelations } from '../src/lib/knowledge/relations';

it('shows explicit incoming references without treating shared topics as citations', () => {
  const nodes = [
    { contentId: 'Q', locale: 'zh-CN' as const, kind: 'question' as const, title: '问题', href: '/q/', topics: ['evidence'] },
    { contentId: 'M', locale: 'zh-CN' as const, kind: 'method' as const, title: '方法', href: '/m/', topics: [] },
    { contentId: 'R', locale: 'zh-CN' as const, kind: 'question' as const, title: '同主题另一题', href: '/r/', topics: ['evidence'] },
  ];
  const result = buildRelations(nodes, [{ from: 'Q', to: 'M', type: 'uses-method', reason: '用该方法核查证据' }]);
  expect(result.ok).toBe(true);
  if (result.ok === false) throw new Error(JSON.stringify(result.diagnostics));
  expect(result.index.forPage('M', 'zh-CN').incoming.map(edge => edge.source.contentId)).toEqual(['Q']);
  expect(result.index.forPage('R', 'zh-CN').incoming).toEqual([]);
  expect(result.index.forPage('Q', 'zh-CN').outgoing[0].target.contentId).toBe('M');
});

it('does not repeat the same reference when it is declared more than once', () => {
  const nodes = [
    { contentId: 'Q', locale: 'zh-CN' as const, kind: 'question' as const, title: '问题', href: '/q/' },
    { contentId: 'M', locale: 'zh-CN' as const, kind: 'method' as const, title: '方法', href: '/m/' },
  ];
  const edge = { from: 'Q', to: 'M', type: 'uses-method' as const, reason: '核查证据' };
  const result = buildRelations(nodes, [edge, edge]);
  if (result.ok === false) throw new Error(JSON.stringify(result.diagnostics));
  expect(result.index.forPage('M', 'zh-CN').incoming).toHaveLength(1);
  expect(result.index.forPage('Q', 'zh-CN').outgoing).toHaveLength(1);
});

it('fails the build when an explicit reference points to missing content', () => {
  const result = buildRelations([
    { contentId: 'Q', locale: 'zh-CN', kind: 'question', title: '问题', href: '/q/' },
  ], [{ from: 'Q', to: 'missing', type: 'uses-method', reason: '失效引用' }]);
  expect(result.ok).toBe(false);
  if (result.ok === false) expect(result.diagnostics).toContainEqual(expect.objectContaining({ code: 'missing-relation-target', contentId: 'Q' }));
});

it('reports a missing source rather than silently discarding its reference', () => {
  const result = buildRelations([{ contentId: 'M', locale: 'zh-CN', kind: 'method', title: '方法', href: '/m/' }], [{ from: 'missing', to: 'M', type: 'uses-method', reason: '引用来源已经删除' }]);
  expect(result.ok).toBe(false);
  if (result.ok === false) expect(result.diagnostics).toContainEqual(expect.objectContaining({ code: 'missing-relation-source', contentId: 'missing' }));
});

it('allows references between documents in a cycle but requires explicit self-reference', () => {
  const nodes = [
    { contentId: 'A', locale: 'zh-CN' as const, kind: 'method' as const, title: 'A', href: '/a/' },
    { contentId: 'B', locale: 'zh-CN' as const, kind: 'method' as const, title: 'B', href: '/b/' },
  ];
  const self = buildRelations(nodes, [{ from: 'A', to: 'A', type: 'explains', reason: '自引用' }]);
  expect(self.ok).toBe(false);
  const cycle = buildRelations(nodes, [{ from: 'A', to: 'B', type: 'contrasts', reason: '比较' }, { from: 'B', to: 'A', type: 'contrasts', reason: '比较' }]);
  expect(cycle.ok).toBe(true);
});

it('exposes validated references through the same registry as navigation', async () => {
  const { createKnowledgeRegistry } = await import('../src/lib/knowledge/registry');
  const result = createKnowledgeRegistry({ nodes: [
    { contentId: 'Q', locale: 'zh-CN', kind: 'question', title: '问题', href: '/q/', missingTranslations: ['en'] },
    { contentId: 'M', locale: 'zh-CN', kind: 'method', title: '方法', href: '/m/', missingTranslations: ['en'] },
  ], edges: [{ from: 'Q', to: 'M', type: 'uses-method', reason: '核查证据' }] });
  if (result.ok === false) throw new Error(JSON.stringify(result.diagnostics));
  expect(result.registry.relations('M', 'zh-CN').incoming[0].source.contentId).toBe('Q');
});
