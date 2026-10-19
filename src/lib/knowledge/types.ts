import type { KnowledgeEdge, KnowledgeRelations } from './relations';
import type { Locale } from '../taxonomy';

export type KnowledgeKind = 'guide' | 'method' | 'concept' | 'question' | 'collection' | 'path' | 'stage-reference' | 'index' | 'group';
export interface KnowledgeNode {
  contentId: string;
  locale: Locale;
  title: string;
  href?: string;
  kind: KnowledgeKind;
  primaryParentId?: string;
  order?: number;
  hiddenFromNavigation?: boolean;
  missingTranslations?: Locale[];
}
export interface NavigationNode extends KnowledgeNode {
  current: boolean;
  expanded: boolean;
  children: NavigationNode[];
}
export interface KnowledgeNavigation {
  tree: NavigationNode[];
  ancestors: KnowledgeNode[];
  current?: KnowledgeNode;
  siblings: KnowledgeNode[];
}
export interface KnowledgeDiagnostic {
  code: string;
  contentId: string;
  locale: Locale;
  message: string;
}
export interface KnowledgeRegistry {
  pages(locale: Locale): KnowledgeNode[];
  page(contentId: string, locale: Locale): KnowledgeNode | undefined;
  relations(contentId: string, locale: Locale): KnowledgeRelations;
  navigation(contentId: string, locale: Locale): KnowledgeNavigation;
}
export interface RegistryInput { nodes: KnowledgeNode[]; edges?: KnowledgeEdge[] }
export type RegistryResult = { ok: true; registry: KnowledgeRegistry } | { ok: false; diagnostics: KnowledgeDiagnostic[] };
