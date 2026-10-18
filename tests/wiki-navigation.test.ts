import { describe, expect, it } from 'vitest';
import { dimensionIds, stageIds } from '../src/lib/capability-model';
import { domains, facetEntries } from '../src/lib/taxonomy';
import { pathFor, type RouteRef } from '../src/lib/routes';
import { wikiNavigationFor, type WikiNavItem } from '../src/lib/wiki-navigation';

const findItem = (items: WikiNavItem[], key: string): WikiNavItem | undefined => {
  for (const item of items) {
    if (item.key === key) return item;
    const nested = findItem(item.children ?? [], key);
    if (nested) return nested;
  }
};

const allItems = (route: RouteRef, locale: 'zh-CN' | 'en' = 'zh-CN', base = '') =>
  wikiNavigationFor(route, locale, base).flatMap(section => section.items.flatMap(item => [item, ...(item.children ?? [])]));

describe('wiki knowledge navigation', () => {
  it('uses four stable localized sections and route helpers for localized, base-aware links', () => {
    const zh = wikiNavigationFor({ type: 'questions' }, 'zh-CN', '/interview-compass');
    const en = wikiNavigationFor({ type: 'questions' }, 'en', '/interview-compass');

    expect(zh.map(section => section.key)).toEqual(['question-library', 'category-browsing', 'capabilities-and-stages', 'methods-and-guide']);
    expect(zh.map(section => section.label)).toEqual(['题库', '分类浏览', '能力与阶段', '方法与说明']);
    expect(en.map(section => section.label)).toEqual(['Question library', 'Browse categories', 'Capabilities and stages', 'Methods and guide']);
    expect(findItem(zh[0].items, 'questions')).toMatchObject({ label: '面试题库', href: pathFor({ type: 'questions' }, 'zh-CN', '/interview-compass') });
    expect(findItem(en[0].items, 'questions')).toMatchObject({ label: 'Question bank', href: '/interview-compass/en/questions/' });
  });

  it.each([
    [{ type: 'questions' }, 'questions'],
    [{ type: 'search' }, 'search'],
    [{ type: 'collection', id: 'general-interview' }, 'collection:general-interview'],
    [{ type: 'browse' }, 'browse'],
    [{ type: 'question', questionId: 'q-1', capability: 'delivery.capacity-planning', title: 'Q' }, 'questions'],
    [{ type: 'domain', domain: domains[0].id }, `domain:${domains[0].id}`],
    [{ type: 'leaf', domain: 'delivery', leaf: 'capacity-planning' }, 'leaf:delivery.capacity-planning'],
    [{ type: 'roles' }, 'roles'],
    [{ type: 'role', id: 'frontend' }, 'role:frontend'],
    [{ type: 'topics' }, 'topics'],
    [{ type: 'topic', id: 'planning' }, 'topic:planning'],
    [{ type: 'scenarios' }, 'scenarios'],
    [{ type: 'scenario', id: 'promotion' }, 'scenario:promotion'],
    [{ type: 'capabilities' }, 'capabilities'],
    [{ type: 'capability-model' }, 'capability-model'],
    [{ type: 'capability-model-stage', stage: stageIds[0] }, `stage:${stageIds[0]}`],
    [{ type: 'capability-model-dimension', dimension: dimensionIds[0] }, `dimension:${dimensionIds[0]}`],
    [{ type: 'role-stage-model', role: 'frontend' }, 'role-stage:frontend'],
    [{ type: 'capability-model-mapping' }, 'mapping'],
    [{ type: 'framework' }, 'framework'],
    [{ type: 'guide' }, 'guide'],
  ] as Array<[RouteRef, string]>)('marks the current page and expands its ancestors for %o', (route, currentKey) => {
    const items = allItems(route);
    const current = findItem(items, currentKey);
    expect(current?.current).toBe(true);

    if (current?.children?.length) expect(current.expanded).toBe(true);
    if (route.type === 'leaf') expect(findItem(items, `domain:${route.domain}`)?.expanded).toBe(true);
    if (route.type === 'role' || route.type === 'topic' || route.type === 'scenario') {
      expect(findItem(items, route.type === 'role' ? 'roles' : route.type === 'topic' ? 'topics' : 'scenarios')?.expanded).toBe(true);
    }
  });

  it('keeps role, topic, and scenario facets as independent sibling dimensions', () => {
    const sections = wikiNavigationFor({ type: 'role', id: 'frontend' }, 'en');
    const browsing = sections.find(section => section.key === 'category-browsing')!;
    const role = findItem(browsing.items, 'roles')!;
    const topic = findItem(browsing.items, 'topics')!;
    const scenario = findItem(browsing.items, 'scenarios')!;
    expect(role.parentKey).toBeUndefined();
    expect(topic.parentKey).toBeUndefined();
    expect(scenario.parentKey).toBeUndefined();
    expect(role.children?.map(item => item.key)).toEqual(['role:frontend']);
    expect(topic.children).toBeUndefined();
    expect(scenario.children).toBeUndefined();
    expect(browsing.items.map(item => item.key)).toEqual(['browse', 'roles', 'topics', 'scenarios', 'capabilities']);
    expect(facetEntries('roles', 'en').some(entry => entry.id === 'frontend')).toBe(true);
  });

  it('includes only the current capability domain and its active leaves in the sidebar', () => {
    const route: RouteRef = { type: 'leaf', domain: 'delivery', leaf: 'capacity-planning' };
    const section = wikiNavigationFor(route, 'zh-CN').find(item => item.key === 'category-browsing')!;
    const activeDomain = domains.find(domain => domain.id === route.domain)!;
    const domainItem = findItem(section.items, `domain:${route.domain}`)!;
    expect(domainItem.children?.map(item => item.key)).toEqual(activeDomain.leaves.filter(leaf => leaf.status === 'active').map(leaf => `leaf:${route.domain}.${leaf.id}`));
    expect(section.items.some(item => item.key === `domain:${domains.find(domain => domain.id !== route.domain)!.id}`)).toBe(false);
  });

  it('does not enumerate question records in the navigation', () => {
    const items = allItems({ type: 'question', questionId: 'q-1', capability: 'delivery.capacity-planning', title: 'Q' });
    expect(items.every(item => !item.key.startsWith('question:'))).toBe(true);
  });

  it('marks only the most specific route current for collection details', () => {
    const sections = wikiNavigationFor({ type: 'collection', id: 'general-interview' }, 'en');
    expect(findItem(sections[0].items, 'collections')?.current).toBe(false);
    expect(findItem(sections[0].items, 'collection:general-interview')?.current).toBe(true);
  });
});
