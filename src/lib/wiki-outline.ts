export interface WikiOutlineItem {
  id: string;
  label: string;
  level?: 2 | 3 | 4;
  sectionKey?: string;
  legacyIds?: string[];
}

export function normalizeWikiOutline(items: WikiOutlineItem[]): WikiOutlineItem[] {
  const seen = new Set<string>();
  return items.flatMap((item) => {
    const { id, label } = item;
    const normalizedId = id.trim();
    const normalizedLabel = label.trim();
    if (!normalizedId || !normalizedLabel || seen.has(normalizedId)) return [];
    seen.add(normalizedId);
    return [{ ...item, id: normalizedId, label: normalizedLabel }];
  });
}
