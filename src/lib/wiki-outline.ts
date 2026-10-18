export interface WikiOutlineItem {
  id: string;
  label: string;
}

export function normalizeWikiOutline(items: WikiOutlineItem[]): WikiOutlineItem[] {
  const seen = new Set<string>();
  return items.flatMap(({ id, label }) => {
    const normalizedId = id.trim();
    const normalizedLabel = label.trim();
    if (!normalizedId || !normalizedLabel || seen.has(normalizedId)) return [];
    seen.add(normalizedId);
    return [{ id: normalizedId, label: normalizedLabel }];
  });
}
