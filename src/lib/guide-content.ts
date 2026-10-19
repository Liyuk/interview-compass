import type { ArticleHeading } from './knowledge/outline';
import { guideSections, type SectionTranslation } from './article-sections';
import type { Locale } from './taxonomy';

// The guide is plain Markdown. Stable section keys map the localized H2 anchors independently of chapter order.
export interface GuideDocument {
  frontmatter: { title: string; description: string };
  getHeadings(): { depth: number; slug: string; text: string }[];
  Content: unknown;
}

export function guideChapters(doc: GuideDocument) {
  return doc.getHeadings().filter(item => item.depth === 2);
}

export function guideSectionsFor(docs: Record<Locale, GuideDocument>): SectionTranslation[] {
  for (const locale of ['zh-CN', 'en'] as const) {
    const chapters = guideChapters(docs[locale]);
    const configuredAnchors = guideSections.map(section => {
      const anchor = section.anchors[locale];
      if (!anchor) throw new Error(`Guide chapter mapping missing: locale=${locale} key=${section.sectionKey} anchor=<unset>`);
      const matches = chapters.filter(chapter => chapter.slug === anchor);
      if (matches.length === 0) {
        throw new Error(`Guide chapter mapping missing: locale=${locale} key=${section.sectionKey} anchor=${anchor}`);
      }
      if (matches.length > 1) {
        throw new Error(`Guide chapter mapping duplicate: locale=${locale} key=${section.sectionKey} anchor=${anchor}`);
      }
      return anchor;
    });
    const unknown = chapters.find(chapter => !configuredAnchors.includes(chapter.slug));
    if (unknown) throw new Error(`Unknown guide chapter: locale=${locale} anchor=${unknown.slug}`);
  }
  return guideSections;
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
