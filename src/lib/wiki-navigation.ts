import { getDimensionProgression, getStageProfile, dimensionIds, stageIds } from './capability-model';
import {
  activeNavFor, pathFor, titleFor, type RouteRef,
} from './routes';
import {
  crossDomainPaths, domains, type Locale,
} from './taxonomy';
import { questionCollections } from './question-collections';

export interface WikiNavItem {
  key: string;
  label: string;
  href: string;
  current: boolean;
  expanded?: boolean;
  parentKey?: string;
  children?: WikiNavItem[];
}

export interface WikiNavSection {
  key: 'question-library' | 'category-browsing' | 'capabilities-and-stages' | 'methods-and-guide';
  label: string;
  items: WikiNavItem[];
}

const sectionLabels = {
  zh: ['题库', '分类浏览', '能力与阶段', '方法与说明'],
  en: ['Question library', 'Browse categories', 'Capabilities and stages', 'Methods and guide'],
} as const;

const facetRouteTypes = {
  roles: { index: { type: 'roles' } as const, detail: (id: string) => ({ type: 'role', id } as const) },
  topics: { index: { type: 'topics' } as const, detail: (id: string) => ({ type: 'topic', id } as const) },
  scenarios: { index: { type: 'scenarios' } as const, detail: (id: string) => ({ type: 'scenario', id } as const) },
};

export function wikiNavigationFor(route: RouteRef, locale: Locale, base = ''): WikiNavSection[] {
  const nav = activeNavFor(route);
  const make = (key: string, ref: RouteRef, label = titleFor(ref, locale), parentKey?: string): WikiNavItem => ({
    key,
    label,
    href: pathFor(ref, locale, base),
    current: currentFor(route, ref, key),
    ...(parentKey ? { parentKey } : {}),
  });

  const questionItems: WikiNavItem[] = [
    make('questions', { type: 'questions' }),
    make('search', { type: 'search' }),
    make('collections', { type: 'collections' }),
    {
      ...make('paths', { type: 'scenarios' }, locale === 'en' ? 'Browse by goal' : '按目标浏览'),
      current: false,
      expanded: route.type === 'path',
      children: crossDomainPaths.map(path => make(`path:${path.id}`, { type: 'path', id: path.id }, path.name[locale === 'en' ? 'en' : 'zh'], 'paths')),
    },
  ];
  const questionsIndex = questionItems.find(item => item.key === 'questions')!;
  questionsIndex.current = nav === 'questions' && !['search', 'collections', 'collection'].includes(route.type);
  const searchItem = questionItems.find(item => item.key === 'search')!;
  searchItem.current = route.type === 'search';
  const collectionsItem = questionItems.find(item => item.key === 'collections')!;
  collectionsItem.href = pathFor({ type: 'collections' }, locale, base);
  collectionsItem.current = route.type === 'collections' || route.type === 'collection';
  collectionsItem.children = questionCollections.map(collection => {
    const collectionRef: RouteRef = { type: 'collection', id: collection.id };
    return make(`collection:${collection.id}`, collectionRef, collection.title[locale === 'en' ? 'en' : 'zh'], 'collections');
  });

  const facetItems = (kind: 'roles' | 'topics' | 'scenarios'): WikiNavItem => {
    const routeType = facetRouteTypes[kind];
    const root = make(kind, routeType.index);
    const selectedId = facetIdFor(route, kind);
    if (selectedId) {
      root.current = false;
      root.expanded = true;
      root.children = [make(`${kind.slice(0, -1)}:${selectedId}`, routeType.detail(selectedId), undefined, kind)];
    }
    return root;
  };

  const browsingItems: WikiNavItem[] = [facetItems('roles'), facetItems('topics'), facetItems('scenarios')];
  const capabilityRoot = make('capabilities', { type: 'capabilities' });
  const domainId = route.type === 'domain' || route.type === 'leaf' ? route.domain : undefined;
  if (domainId) {
    const domain = domains.find(item => item.id === domainId);
    if (domain) {
      capabilityRoot.current = false;
      capabilityRoot.expanded = true;
      const domainRef: RouteRef = { type: 'domain', domain: domain.id };
      const domainItem = make(`domain:${domain.id}`, domainRef, undefined, 'capabilities');
      domainItem.expanded = route.type === 'leaf';
      if (route.type === 'leaf') {
        domainItem.children = domain.leaves.filter(leaf => leaf.status === 'active').map(leaf => {
          const leafRef: RouteRef = { type: 'leaf', domain: domain.id, leaf: leaf.id };
          return make(`leaf:${domain.id}.${leaf.id}`, leafRef, undefined, domainItem.key);
        });
      }
      capabilityRoot.children = [domainItem];
    }
  }
  browsingItems.push(capabilityRoot);

  const modelRoot = make('capability-model', { type: 'capability-model' });
  const stageItems = stageIds.map(stage => {
    const ref: RouteRef = { type: 'capability-model-stage', stage };
    const item = make(`stage:${stage}`, ref, getStageProfile(stage, locale).name, 'capability-model');
    if (route.type === 'capability-model-stage' && route.stage === stage) {
      item.expanded = true;
      item.children = dimensionIds.map(dimension => {
        const dimensionRef: RouteRef = { type: 'capability-model-dimension', dimension };
        return make(`dimension:${dimension}`, dimensionRef, getDimensionProgression(dimension, locale).name, item.key);
      });
    }
    return item;
  });
  const dimensionItems = dimensionIds.map(dimension => {
    const ref: RouteRef = { type: 'capability-model-dimension', dimension };
    return make(`dimension:${dimension}`, ref, getDimensionProgression(dimension, locale).name, 'capability-model');
  });
  if (route.type === 'capability-model-stage' || route.type === 'capability-model-dimension' || route.type === 'role-stage-model' || route.type === 'capability-model-mapping' || route.type === 'capability-model') {
    modelRoot.current = route.type === 'capability-model';
    modelRoot.expanded = true;
    modelRoot.children = [
      ...stageItems,
      ...dimensionItems,
      make('mapping', { type: 'capability-model-mapping' }, undefined, 'capability-model'),
    ];
  }
  const rolesStage = route.type === 'role-stage-model'
    ? make(`role-stage:${route.role}`, route, titleFor(route, locale), 'capability-model')
    : undefined;
  if (rolesStage) modelRoot.children?.push(rolesStage);

  const methods = [
    make('framework', { type: 'framework' }),
    make('guide', { type: 'guide' }),
  ];

  const labels = sectionLabels[locale === 'en' ? 'en' : 'zh'];
  return [
    { key: 'question-library', label: labels[0], items: questionItems },
    { key: 'category-browsing', label: labels[1], items: browsingItems },
    { key: 'capabilities-and-stages', label: labels[2], items: [modelRoot] },
    { key: 'methods-and-guide', label: labels[3], items: methods },
  ];
}

function currentFor(route: RouteRef, ref: RouteRef, key: string): boolean {
  if (route.type === 'question' && ref.type === 'questions') return true;
  if (route.type === 'search' && ref.type === 'search') return true;
  if (route.type === 'collection' && ref.type === 'collections') return false;
  if (route.type === 'path' && key === 'paths') return true;
  if (route.type === 'path' && ref.type === 'scenarios') return false;
  if (route.type === 'role-stage-model' && ref.type === 'capability-model') return false;
  if (route.type === 'domain' && ref.type === 'capabilities') return false;
  if (route.type === 'leaf' && ref.type === 'capabilities') return false;
  if (route.type === 'role' && ref.type === 'roles') return false;
  if (route.type === 'topic' && ref.type === 'topics') return false;
  if (route.type === 'scenario' && ref.type === 'scenarios') return false;
  return ref.type === route.type && JSON.stringify(ref) === JSON.stringify(route);
}

function facetIdFor(route: RouteRef, kind: 'roles' | 'topics' | 'scenarios'): string | undefined {
  if (kind === 'roles' && route.type === 'role') return route.id;
  if (kind === 'topics' && route.type === 'topic') return route.id;
  if (kind === 'scenarios' && route.type === 'scenario') return route.id;
  return undefined;
}
