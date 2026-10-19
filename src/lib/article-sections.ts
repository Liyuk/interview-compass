import type { Locale } from './taxonomy';
export interface SectionTranslation { sectionKey: string; anchors: Partial<Record<Locale, string>> }
export function translateArticleHash(hash: string, from: Locale, to: Locale, sections: SectionTranslation[]): string {
  if (!hash) return '';
  let anchor: string;
  try { anchor = decodeURIComponent(hash.replace(/^#/, '')); } catch { return ''; }
  const section = sections.find(item => item.anchors[from] === anchor);
  return section?.anchors[to] ? `#${section.anchors[to]}` : '';
}
export const guideSections: SectionTranslation[] = [
  ['targets', '岗位与阶段目标', 'role-and-stage-targets'],
  ['organization', '问题如何组织', 'how-questions-are-organized'],
  ['entry', '怎样进入', 'ways-in'],
  ['methods', '提问方法', 'questioning-methods'],
  ['contexts', '外部面试与内部晋升', 'external-interviews-and-internal-promotion'],
  ['reading', '如何使用一题', 'how-to-use-a-question'],
  ['evidence', '四档评估参考', 'four-evidence-levels'],
  ['lenses', '站点反复使用的判断线索', 'recurring-lenses'],
  ['rules', '内容约定', 'content-rules'],
].map(([sectionKey, zh, en]) => ({ sectionKey, anchors: { 'zh-CN': zh, en } }));
