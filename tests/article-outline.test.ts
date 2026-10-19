import { expect, it } from 'vitest';
import { createOutline } from '../src/lib/knowledge/outline';

it('readers see subsections inside their chapter in authored order', () => {
  const result = createOutline([
    { id: 'constraints', sectionKey: 'constraints', label: '约束', level: 2 },
    { id: 'capacity', sectionKey: 'capacity', label: '容量', level: 3 },
    { id: 'latency', sectionKey: 'latency', label: '时延', level: 3 },
    { id: 'evidence', sectionKey: 'evidence', label: '证据', level: 2 },
  ]);
  expect(result.ok).toBe(true);
  if (result.ok === false) throw new Error(JSON.stringify(result.diagnostics));
  expect(result.nodes.map(node => ({ id: node.id, children: node.children.map(child => child.id) }))).toEqual([
    { id: 'constraints', children: ['capacity', 'latency'] },
    { id: 'evidence', children: [] },
  ]);
});

it('rejects duplicate anchors even when the chapter labels differ', () => {
  const result = createOutline([
    { id: 'same', sectionKey: 'first', label: '第一章', level: 2 },
    { id: 'same', sectionKey: 'second', label: '第二章', level: 2 },
  ]);
  expect(result.ok).toBe(false);
  if (result.ok === false) expect(result.diagnostics).toContainEqual(expect.objectContaining({ code: 'duplicate-anchor', id: 'same' }));
});

it('rejects a skipped article heading level instead of inventing a parent chapter', () => {
  const result = createOutline([
    { id: 'chapter', sectionKey: 'chapter', label: '章节', level: 2 },
    { id: 'detail', sectionKey: 'detail', label: '细节', level: 4 },
  ]);
  expect(result.ok).toBe(false);
  if (result.ok === false) expect(result.diagnostics).toContainEqual(expect.objectContaining({ code: 'heading-level-gap', id: 'detail' }));
});

it('keeps an old public anchor mapped to the renamed section', () => {
  const result = createOutline([{ id: 'evidence', sectionKey: 'evidence', label: '证据', level: 2, legacyIds: ['old-evidence'] }]);
  expect(result.ok).toBe(true);
  if (result.ok === false) throw new Error(JSON.stringify(result.diagnostics));
  expect(result.anchorAliases).toEqual({ 'old-evidence': 'evidence' });
});

it('reports missing article anchors while ignoring explicitly excluded tool headings', () => {
  const result = createOutline([{ id: ' ', sectionKey: 'missing', label: '正文', level: 2 }]);
  expect(result.ok).toBe(false);
  if (result.ok === false) expect(result.diagnostics).toContainEqual(expect.objectContaining({ code: 'invalid-heading' }));
  expect(createOutline([{ id: '', sectionKey: 'tool', label: '', level: 3, includeInOutline: false }])).toMatchObject({ ok: true, nodes: [] });
});

it('rejects a legacy alias that would steal another chapter anchor', () => {
  const result = createOutline([
    { id: 'first', sectionKey: 'first', label: '第一章', level: 2, legacyIds: ['second'] },
    { id: 'second', sectionKey: 'second', label: '第二章', level: 2 },
  ]);
  expect(result.ok).toBe(false);
  if (result.ok === false) expect(result.diagnostics).toContainEqual(expect.objectContaining({ code: 'conflicting-alias', id: 'second' }));
});

it('keeps same-title subsections distinct and hides H4 unless explicitly requested', () => {
  const headings = [
    { id: 'main', sectionKey: 'main', label: 'Main', level: 2 as const },
    { id: 'one', sectionKey: 'one', label: 'Details', level: 3 as const },
    { id: 'fine', sectionKey: 'fine', label: 'Fine detail', level: 4 as const },
    { id: 'two', sectionKey: 'two', label: 'Details', level: 3 as const },
  ];
  const result = createOutline(headings);
  expect(result.ok).toBe(true);
  if (result.ok === false) throw new Error(JSON.stringify(result.diagnostics));
  expect(result.nodes[0].children.map(node => node.id)).toEqual(['one', 'two']);
  expect(result.nodes[0].children[0].children).toEqual([]);
  const full = createOutline(headings, { maxLevel: 4 });
  if (full.ok === false) throw new Error(JSON.stringify(full.diagnostics));
  expect(full.nodes[0].children[0].children[0].id).toBe('fine');
});
