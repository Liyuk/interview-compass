import { addBase } from './locale-paths';
import { questionCollectionById } from './question-collections';
import { getDimensionProgression, getStageProfile, type CapabilityDimensionId, type StageId } from './capability-model';
import {
  crossDomainPaths, domains, facetLabel, facetMeta, pick, splitCapability,
  type Bilingual, type FacetKind, type Locale,
} from './taxonomy';

export type Crumb = { label: string; href?: string };

export type RouteRef =
  | { type: 'home' }
  | { type: 'browse' }
  | { type: 'questions' }
  | { type: 'search' }
  | { type: 'collections' }
  | { type: 'collection'; id: string }
  | { type: 'framework' }
  | { type: 'capabilities' }
  | { type: 'domain'; domain: string }
  | { type: 'leaf'; domain: string; leaf: string }
  | { type: 'roles' }
  | { type: 'role'; id: string }
  | { type: 'scenarios' }
  | { type: 'scenario'; id: string }
  | { type: 'topics' }
  | { type: 'topic'; id: string }
  | { type: 'path'; id: string }
  | { type: 'question'; questionId: string; capability: string; title: string }
  | { type: 'capability-model' }
  | { type: 'role-stage-model'; role: string }
  | { type: 'capability-model-stage'; stage: StageId }
  | { type: 'capability-model-dimension'; dimension: CapabilityDimensionId }
  | { type: 'capability-model-mapping' }
  | { type: 'guide' };

export type NavKey = 'browse' | 'questions' | 'capabilities' | 'capability-model' | 'roles' | 'scenarios' | 'topics' | 'framework' | 'guide' | '';

const text = (zh: string, en: string): Bilingual => ({ zh, en });
const labels = {
  home: text('首页', 'Home'),
  browse: text('分类索引', 'Browse'),
  questions: text('面试题库', 'Question bank'),
  capabilities: text('能力地图', 'Capability map'),
  roles: text('岗位导航', 'Role paths'),
  scenarios: text('目标路径', 'Goal paths'),
  capabilityModel: text('阶段能力', 'Stage expectations'),
  topics: text('主题索引', 'Topics'),
  guide: text('使用说明', 'How to use'),
  collections: text('精选题单', 'Curated sets'),
  framework: text('提问框架', 'Questioning framework'),
};

export const navLabel = (key: keyof typeof labels, locale: Locale) => pick(labels[key], locale);

const prefix = (locale: Locale) => (locale === 'en' ? '/en' : '');

export function pathFor(ref: RouteRef, locale: Locale, base = ''): string {
  const root = prefix(locale);
  const route = (() => {
    switch (ref.type) {
      case 'home': return `${root}/`;
      case 'browse': return `${root}/browse/`;
      case 'questions': return `${root}/questions/`;
      case 'search': return `${root}/search/`;
      case 'collections': return `${root}/collections/`;
      case 'collection': return `${root}/collections/${ref.id}/`;
      case 'framework': return `${root}/framework/`;
      case 'capabilities': return `${root}/capabilities/`;
      case 'capability-model': return `${root}/capability-model/`;
      case 'role-stage-model': return `${root}/capability-model/roles/${ref.role}/`;
      case 'capability-model-stage': return `${root}/capability-model/stages/${ref.stage}/`;
      case 'capability-model-dimension': return `${root}/capability-model/dimensions/${ref.dimension}/`;
      case 'capability-model-mapping': return `${root}/capability-model/mapping/`;
      case 'domain': return `${root}/capabilities/${ref.domain}/`;
      case 'leaf': return `${root}/capabilities/${ref.domain}/${ref.leaf}/`;
      case 'roles': return `${root}/roles/`;
      case 'role': return `${root}/roles/${ref.id}/`;
      case 'scenarios': return `${root}/scenarios/`;
      case 'scenario': return `${root}/scenarios/${ref.id}/`;
      case 'topics': return `${root}/topics/`;
      case 'topic': return `${root}/topics/${ref.id}/`;
      case 'path': return `${root}/paths/${ref.id}/`;
      case 'question': return `${root}/questions/${ref.questionId}/`;
      case 'guide': return `${root}/handbook/`;
    }
  })();
  return addBase(route, base);
}

export function switchLocaleRoute(ref: RouteRef, to: Locale, base = ''): string {
  return pathFor(ref, to, base);
}

function domainName(domainId: string, locale: Locale) {
  const domain = domains.find((item) => item.id === domainId);
  return domain ? pick(domain.name, locale) : domainId;
}

function leafName(domainId: string, leafId: string, locale: Locale) {
  const leaf = domains.find((item) => item.id === domainId)?.leaves.find((item) => item.id === leafId);
  return leaf ? pick(leaf.name, locale) : leafId;
}

export function titleFor(ref: RouteRef, locale: Locale): string {
  switch (ref.type) {
    case 'home': return pick(labels.home, locale);
    case 'browse': return pick(labels.browse, locale);
    case 'questions': return pick(labels.questions, locale);
    case 'search': return locale === 'en' ? 'Search results' : '搜索结果';
    case 'collections': return pick(labels.collections, locale);
    case 'collection': {
      const collection = questionCollectionById(ref.id);
      return collection ? pick(collection.title, locale) : ref.id;
    }
    case 'framework': return pick(labels.framework, locale);
    case 'capabilities': return pick(labels.capabilities, locale);
    case 'capability-model': return pick(labels.capabilityModel, locale);
    case 'role-stage-model': return `${facetLabel('roles', ref.role, locale)} · ${pick(labels.capabilityModel, locale)}`;
    case 'capability-model-stage': return getStageProfile(ref.stage, locale).name;
    case 'capability-model-dimension': return getDimensionProgression(ref.dimension, locale).name;
    case 'capability-model-mapping': return locale === 'en' ? 'Cross-company level mapping' : '跨公司职级映射';
    case 'domain': return domainName(ref.domain, locale);
    case 'leaf': return leafName(ref.domain, ref.leaf, locale);
    case 'roles': return pick(labels.roles, locale);
    case 'role': return facetLabel('roles', ref.id, locale);
    case 'scenarios': return pick(labels.scenarios, locale);
    case 'scenario': return facetLabel('scenarios', ref.id, locale);
    case 'topics': return pick(labels.topics, locale);
    case 'topic': return facetLabel('topics', ref.id, locale);
    case 'path': return pick(crossDomainPaths.find((item) => item.id === ref.id)?.name ?? text(ref.id, ref.id), locale);
    case 'question': return ref.title;
    case 'guide': return pick(labels.guide, locale);
  }
}

export function parentOf(ref: RouteRef): RouteRef | undefined {
  switch (ref.type) {
    case 'home': return undefined;
    case 'browse': case 'questions': case 'capabilities': case 'roles': case 'scenarios': case 'topics': case 'guide': case 'framework': return { type: 'home' };
    case 'search': return { type: 'questions' };
    case 'collections': return { type: 'questions' };
    case 'collection': return { type: 'collections' };
    case 'capability-model': return { type: 'home' };
    case 'role-stage-model': case 'capability-model-stage': case 'capability-model-dimension': case 'capability-model-mapping': return { type: 'capability-model' };
    case 'domain': return { type: 'capabilities' };
    case 'leaf': return { type: 'domain', domain: ref.domain };
    case 'role': return { type: 'roles' };
    case 'scenario': return { type: 'scenarios' };
    case 'topic': return { type: 'topics' };
    case 'path': return { type: 'home' };
    case 'question': {
      const { domain, leaf } = splitCapability(ref.capability);
      return domain && leaf ? { type: 'leaf', domain: domain.id, leaf: leaf.id } : { type: 'questions' };
    }
  }
}

// Question trail follows the spec: Home → Question library → Domain → Leaf → Question.
export function breadcrumbsFor(ref: RouteRef, locale: Locale, base = ''): Crumb[] {
  const chain: RouteRef[] = [];
  for (let current: RouteRef | undefined = ref; current; current = parentOf(current)) chain.unshift(current);
  const trail: RouteRef[] = ref.type === 'question'
    ? [chain[0], { type: 'questions' }, ...chain.filter((item) => item.type === 'domain' || item.type === 'leaf'), ref]
    : chain;
  return trail.map((item, index) => ({
    label: item.type === 'question' && item.title.length > 36 ? (locale === 'en' ? 'Question detail' : '题目详情') : titleFor(item, locale),
    href: index === trail.length - 1 ? undefined : pathFor(item, locale, base),
  }));
}

export function activeNavFor(ref: RouteRef): NavKey {
  switch (ref.type) {
    case 'browse': return 'browse';
    case 'questions': case 'search': case 'question': case 'collections': case 'collection': return 'questions';
    case 'framework': return 'framework';
    case 'guide': return 'guide';
    case 'capabilities': case 'domain': case 'leaf': return 'capabilities';
    case 'role-stage-model': case 'capability-model': case 'capability-model-stage': case 'capability-model-dimension': case 'capability-model-mapping': return 'capability-model';
    case 'roles': case 'role': return 'roles';
    case 'scenarios': case 'scenario': return 'scenarios';
    case 'topics': case 'topic': return 'topics';
    default: return '';
  }
}

export const facetRoute = (kind: FacetKind, id: string): RouteRef | undefined => {
  switch (kind) {
    case 'roles': return { type: 'role', id };
    case 'scenarios': return { type: 'scenario', id };
    case 'topics': return { type: 'topic', id };
    default: return undefined;
  }
};

export const facetTitle = (kind: FacetKind, locale: Locale) => pick(facetMeta[kind].name, locale);
