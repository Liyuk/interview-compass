import type { Locale } from '../taxonomy';
import type { KnowledgeDiagnostic, KnowledgeNode } from './types';
export type KnowledgeRelationType = 'explains' | 'prerequisite' | 'applies' | 'contrasts' | 'uses-method' | 'included-in';
export interface KnowledgeEdge {
  from: string;
  to: string;
  type: KnowledgeRelationType;
  reason: string;
  contrast?: string;
  locale?: Locale;
  allowSelfReference?: boolean;
}
export interface OutgoingRelation extends KnowledgeEdge { target: KnowledgeNode }
export interface IncomingRelation extends KnowledgeEdge { source: KnowledgeNode }
export interface KnowledgeRelations { outgoing: OutgoingRelation[]; incoming: IncomingRelation[] }
export interface RelationIndex { forPage(id: string, locale: Locale): KnowledgeRelations }
export type RelationResult = { ok: true; index: RelationIndex } | { ok: false; diagnostics: KnowledgeDiagnostic[] };
const key = (id: string, locale: Locale) => `${locale}:${id}`;

export function buildRelations(nodes: KnowledgeNode[], edges: KnowledgeEdge[]): RelationResult {
  const byId = new Map(nodes.map(node => [key(node.contentId, node.locale), node]));
  const results = new Map<string, KnowledgeRelations>();
  const lookup = (id: string, locale: Locale) => {
    const identity = key(id, locale);
    if (!results.has(identity)) results.set(identity, { outgoing: [], incoming: [] });
    return results.get(identity)!;
  };
  const diagnostics: KnowledgeDiagnostic[] = [];
  const seen = new Set<string>();
  for (const edge of edges) {
    const sources = nodes.filter(node => node.contentId === edge.from && (!edge.locale || edge.locale === node.locale));
    if (!sources.length) diagnostics.push({ code: 'missing-relation-source', contentId: edge.from, locale: edge.locale ?? 'zh-CN', message: `Missing source ${edge.from}` });
    for (const source of sources) {
      if (edge.from === edge.to && !edge.allowSelfReference) { diagnostics.push({ code: 'self-reference', contentId: edge.from, locale: source.locale, message: 'Self-reference must be explicit' }); continue; }
      const target = byId.get(key(edge.to, source.locale));
      if (!target?.href) { diagnostics.push({ code: 'missing-relation-target', contentId: source.contentId, locale: source.locale, message: `Missing target ${edge.to}` }); continue; }
      const identity = JSON.stringify([source.locale, edge.from, edge.to, edge.type]);
      if (seen.has(identity)) continue;
      seen.add(identity);
      lookup(source.contentId, source.locale).outgoing.push({ ...edge, target });
      lookup(target.contentId, target.locale).incoming.push({ ...edge, source });
    }
  }
  if (diagnostics.length) return { ok: false, diagnostics };
  return { ok: true, index: { forPage: lookup } };
}
