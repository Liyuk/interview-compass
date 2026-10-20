export interface ArticleHeading {
  id: string;
  sectionKey: string;
  label: string;
  level: 2 | 3 | 4;
  legacyIds?: string[];
  includeInOutline?: boolean;
}
export interface OutlineNode extends ArticleHeading { children: OutlineNode[] }
export interface OutlineOptions { maxLevel?: 2 | 3 | 4 }
export type OutlineResult = { ok: true; nodes: OutlineNode[]; anchorAliases: Record<string, string> } | { ok: false; diagnostics: { code: string; id: string; message: string }[] };

export function createOutline(headings: ArticleHeading[], options: OutlineOptions = {}): OutlineResult {
  const seen = new Set<string>();
  const diagnostics: { code: string; id: string; message: string }[] = [];
  let previousLevel = 1;
  for (const heading of headings.filter(item => item.includeInOutline !== false)) {
    if (!heading.id.trim() || /[\s#]/.test(heading.id) || !heading.label.trim() || !heading.sectionKey.trim()) diagnostics.push({ code: 'invalid-heading', id: heading.id, message: 'Article headings require a stable id, section key and visible label' });
    if (heading.level > previousLevel + 1) diagnostics.push({ code: 'heading-level-gap', id: heading.id, message: `Heading level jumps from ${previousLevel} to ${heading.level}` });
    previousLevel = heading.level;
    if (seen.has(heading.id)) diagnostics.push({ code: 'duplicate-anchor', id: heading.id, message: `Duplicate anchor ${heading.id}` });
    seen.add(heading.id);
  }
  const aliases = new Map<string, string>();
  for (const heading of headings.filter(item => item.includeInOutline !== false)) {
    for (const id of heading.legacyIds ?? []) {
      if (id === heading.id) continue;
      if (!id.trim() || /[\s#]/.test(id) || seen.has(id) || (aliases.has(id) && aliases.get(id) !== heading.id)) diagnostics.push({ code: 'conflicting-alias', id, message: `Legacy anchor conflicts: ${id}` });
      aliases.set(id, heading.id);
    }
  }
  if (diagnostics.length) return { ok: false, diagnostics };
  const nodes: OutlineNode[] = [];
  const stack: OutlineNode[] = [];
  for (const heading of headings) {
    if (heading.includeInOutline === false || heading.level > (options.maxLevel ?? 3)) continue;
    const node: OutlineNode = { ...heading, children: [] };
    while (stack.length && stack[stack.length - 1].level >= node.level) stack.pop();
    if (stack.length) stack[stack.length - 1].children.push(node);
    else nodes.push(node);
    stack.push(node);
  }
  const anchorAliases = Object.fromEntries(aliases);
  return { ok: true, nodes, anchorAliases };
}
