import { readFileSync } from 'node:fs';
import { expect, it } from 'vitest';
import { guideHeadings, guideSectionsFor, type GuideDocument } from '../src/lib/guide-content';
import { guideSections } from '../src/lib/article-sections';

const headings = (locale: string) => readFileSync(new URL(`../src/content/guide/${locale}.md`, import.meta.url), 'utf8')
  .split('\n').filter(line => /^## /.test(line)).map(line => line.slice(3));
const englishHeadingAnchor = (text: string) => text.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');

const doc = (locale: 'zh-CN' | 'en', orderedAnchors: string[]): GuideDocument => ({
  frontmatter: { title: locale, description: '' },
  getHeadings: () => orderedAnchors.map(slug => ({ depth: 2, slug, text: slug })),
  Content: null,
});

it('keeps the guide chapters paired across locales and free of hard-coded base paths', () => {
  expect(new Set(headings('zh-CN'))).toEqual(new Set(guideSections.map(section => section.anchors['zh-CN'])));
  expect(new Set(headings('en').map(englishHeadingAnchor)))
    .toEqual(new Set(guideSections.map(section => section.anchors.en)));
  for (const locale of ['zh-CN', 'en']) {
    const text = readFileSync(new URL(`../src/content/guide/${locale}.md`, import.meta.url), 'utf8');
    expect(text).not.toMatch(/\]\(\/interview-compass/);
    expect(text).not.toMatch(/^# /m);
  }
});

it('keeps stable guide section keys when chapters are reordered', () => {
  const reordered = (locale: 'zh-CN' | 'en') => guideSections
    .map(section => section.anchors[locale]!)
    .reverse();

  const docs = { 'zh-CN': doc('zh-CN', reordered('zh-CN')), en: doc('en', reordered('en')) };
  const sections = guideSectionsFor(docs);

  expect(sections).toEqual(guideSections);
  expect(guideHeadings(docs['zh-CN'], 'zh-CN', sections).map(heading => heading.sectionKey))
    .toEqual(guideSections.map(section => section.sectionKey).reverse());
});

it('reports a missing localized heading with its section key and anchor', () => {
  const zh = guideSections.map(section => section.anchors['zh-CN']!).slice(1);
  const en = guideSections.map(section => section.anchors.en!);

  expect(() => guideSectionsFor({ 'zh-CN': doc('zh-CN', zh), en: doc('en', en) }))
    .toThrow(/zh-CN.*targets.*岗位与阶段目标/);
});

it('rejects duplicate localized headings instead of pairing by position', () => {
  const zh = guideSections.map(section => section.anchors['zh-CN']!);
  zh[zh.length - 1] = zh[0];
  const en = guideSections.map(section => section.anchors.en!);

  expect(() => guideSectionsFor({ 'zh-CN': doc('zh-CN', zh), en: doc('en', en) }))
    .toThrow(/duplicate.*locale=zh-CN.*key=targets.*岗位与阶段目标/i);
});

it('rejects an unmapped guide chapter', () => {
  const zh = guideSections.map(section => section.anchors['zh-CN']!);
  zh.push('unknown-chapter');
  const en = guideSections.map(section => section.anchors.en!);

  expect(() => guideSectionsFor({ 'zh-CN': doc('zh-CN', zh), en: doc('en', en) }))
    .toThrow(/zh-CN.*unknown-chapter/);
});
