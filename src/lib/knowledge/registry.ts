import { buildRelations } from './relations';
import type { Locale } from '../taxonomy';
import type { KnowledgeNode, KnowledgeDiagnostic, NavigationNode, RegistryInput, RegistryResult } from './types';
const key = (id: string, locale: Locale) => `${locale}:${id}`;

export function createKnowledgeRegistry(input: RegistryInput): RegistryResult {
  const nodes = input.nodes.map(node => ({ ...node }));
  const byId = new Map(nodes.map(node => [key(node.contentId, node.locale), node]));
  const diagnostics: KnowledgeDiagnostic[] = [];
  const seenIds = new Set<string>();
  const seenUrls = new Set<string>();
  for (const node of nodes) {
    const otherLocale: Locale = node.locale === 'en' ? 'zh-CN' : 'en';
    if (!byId.has(key(node.contentId, otherLocale)) && !node.missingTranslations?.includes(otherLocale)) diagnostics.push({ code: 'missing-translation', contentId: node.contentId, locale: node.locale, message: `Missing translation ${otherLocale}` });
    const identity = key(node.contentId, node.locale);
    if (seenIds.has(identity)) diagnostics.push({ code: 'duplicate-id', contentId: node.contentId, locale: node.locale, message: `Duplicate identity ${identity}` });
    seenIds.add(identity);
    if (node.href) {
      if (seenUrls.has(node.href)) diagnostics.push({ code: 'duplicate-url', contentId: node.contentId, locale: node.locale, message: `Duplicate URL ${node.href}` });
      seenUrls.add(node.href);
    }
    if (node.primaryParentId && !byId.has(key(node.primaryParentId, node.locale))) diagnostics.push({ code: 'missing-parent', contentId: node.contentId, locale: node.locale, message: `Missing parent ${node.primaryParentId}` });
    const visited = new Set<string>([node.contentId]);
    let parent = node.primaryParentId;
    while (parent) {
      if (visited.has(parent)) { diagnostics.push({ code: 'parent-cycle', contentId: node.contentId, locale: node.locale, message: `Cyclic parent ${parent}` }); break; }
      visited.add(parent);
      parent = byId.get(key(parent, node.locale))?.primaryParentId;
    }
  }
  if (diagnostics.length) return { ok: false, diagnostics };
  const relations = buildRelations(nodes, input.edges ?? []);
  if (relations.ok === false) return relations;
  const ordered = (items: KnowledgeNode[]) => items.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return { ok: true, registry: {
    relations: (id, locale) => relations.index.forPage(id, locale),
    pages: locale => nodes.filter(node => node.locale === locale && Boolean(node.href)).map(node => ({...node})),
    page: (id, locale) => byId.get(key(id, locale)),
    navigation(id, locale, rootId) {
      const current = byId.get(key(id, locale));
      const ancestors: KnowledgeNode[] = [];
      let parent = current?.primaryParentId;
      while (parent) {
        const node = byId.get(key(parent, locale));
        if (!node) break;
        ancestors.unshift(node);
        parent = node.primaryParentId;
      }
      const expanded = new Set(ancestors.map(node => node.contentId));
      if (rootId) expanded.add(rootId);
      const visible = nodes.filter(node => node.locale === locale && !node.hiddenFromNavigation);
      function branch(parentId?: string): NavigationNode[] {
        return ordered(visible.filter(node => node.primaryParentId === parentId)).map(node => ({
          ...node, current: node.contentId === id, expanded: expanded.has(node.contentId), children: expanded.has(node.contentId) || node.contentId === id || !node.href ? branch(node.contentId) : [],
        }));
      }
      return { current, ancestors, tree: rootId ? branch().filter(node => node.contentId === rootId) : branch(), siblings: ordered(visible.filter(node => node.primaryParentId === current?.primaryParentId)) };
    },
  } };
}
