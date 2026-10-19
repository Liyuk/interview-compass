import type { ArticleHeading } from './knowledge/outline';
import type { SectionTranslation } from './article-sections';
import type { Locale } from './taxonomy';

// The guide is plain Markdown. Chapters are paired by position: both locales must expose the same ordered ## headings.
export interface GuideDocument {
  frontmatter: { title: string; description: string };
  getHeadings(): { depth: number; slug: string; text: string }[];
  Content: unknown;
}

export const guideSectionKeys = ['targets', 'organization', 'entry', 'methods', 'contexts', 'reading', 'evidence', 'lenses', 'rules'] as const;

export function guideChapters(doc: GuideDocument) {
  return doc.getHeadings().filter(item => item.depth === 2);
}

export function guideSections(docs: Record<Locale, GuideDocument>): SectionTranslation[] {
  const zh = guideChapters(docs['zh-CN']);
  const en = guideChapters(docs.en);
  if (zh.length !== en.length || zh.length !== guideSectionKeys.length) {
    throw new Error(`Guide chapters must match across locales: zh-CN=${zh.length}, en=${en.length}, expected=${guideSectionKeys.length}`);
  }
  return guideSectionKeys.map((sectionKey, index) => ({ sectionKey, anchors: { 'zh-CN': zh[index].slug, en: en[index].slug } }));
}

export function guideHeadings(doc: GuideDocument, locale: Locale, sections: SectionTranslation[]): ArticleHeading[] {
  return doc.getHeadings()
    .filter(item => item.depth >= 2 && item.depth <= 3)
    .map(item => ({
      id: item.slug,
      label: item.text,
      level: item.depth as 2 | 3,
      sectionKey: sections.find(section => section.anchors[locale] === item.slug)?.sectionKey ?? item.slug,
    }));
}
