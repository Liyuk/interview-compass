import { describe, expect, it } from 'vitest';
import { activeNavFor, breadcrumbsFor, parentOf, pathFor, switchLocaleRoute, titleFor, type RouteRef } from '../src/lib/routes';
import { capabilityIds, domains, hasTaxonomyId, splitCapability } from '../src/lib/taxonomy';

const base = '/interview-compass';
const question: RouteRef = { type: 'question', questionId: 'planning-reduced-resources', capability: 'delivery.capacity-planning', title: '调整计划' };

describe('taxonomy', () => {
  it('defines the eight domains A to H in order with unique leaves', () => {
    expect(domains.map((domain) => domain.letter)).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
    expect(new Set(capabilityIds).size).toBe(capabilityIds.length);
    expect(capabilityIds.every((id) => hasTaxonomyId('capabilities', id))).toBe(true);
  });

  it('gives every domain and leaf a bilingual name and description', () => {
    for (const domain of domains) {
      expect(domain.name.zh && domain.name.en && domain.description.zh && domain.description.en).toBeTruthy();
      for (const leaf of domain.leaves) expect(leaf.name.zh && leaf.name.en && leaf.description.zh && leaf.description.en).toBeTruthy();
    }
  });

  it('includes topics used by the published interview questions', () => {
    expect(hasTaxonomyId('topics', 'accessibility')).toBe(true);
    expect(hasTaxonomyId('topics', 'resilience')).toBe(true);
    expect(hasTaxonomyId('topics', 'boundaries')).toBe(true);
  });

  it('splits a capability id into its domain and leaf', () => {
    const { domain, leaf } = splitCapability('delivery.capacity-planning');
    expect(domain?.letter).toBe('D');
    expect(leaf?.id).toBe('capacity-planning');
  });
});

describe('route model', () => {
  it('builds base-aware, localized paths from one definition', () => {
    expect(pathFor({ type: 'leaf', domain: 'delivery', leaf: 'capacity-planning' }, 'zh-CN', base)).toBe('/interview-compass/capabilities/delivery/capacity-planning/');
    expect(pathFor({ type: 'role', id: 'product' }, 'en', base)).toBe('/interview-compass/en/roles/product/');
    expect(pathFor({ type: 'home' }, 'en', base)).toBe('/interview-compass/en/');
    expect(pathFor({ type: 'search' }, 'zh-CN', base)).toBe('/interview-compass/search/');
    expect(pathFor({ type: 'search' }, 'en', base)).toBe('/interview-compass/en/search/');
    expect(pathFor({ type: 'collections' }, 'zh-CN', base)).toBe('/interview-compass/collections/');
    expect(pathFor({ type: 'collection', id: 'general-interview' }, 'en', base)).toBe('/interview-compass/en/collections/general-interview/');
    expect(pathFor({ type: 'framework' }, 'zh-CN', base)).toBe('/interview-compass/framework/');
    expect(pathFor({ type: 'guide' }, 'zh-CN', base)).toBe('/interview-compass/handbook/');
    expect(pathFor({ type: 'role-stage-model', role: 'product' }, 'en', base)).toBe('/interview-compass/en/capability-model/roles/product/');
    expect(activeNavFor({ type: 'role-stage-model', role: 'product' })).toBe('capability-model');
    expect(breadcrumbsFor({ type: 'role-stage-model', role: 'product' }, 'zh-CN', base).map(c => c.label)).toEqual(['首页', '阶段能力', '产品 · 阶段能力']);
  });

  it('models localized not-found pages as wiki routes without a misleading current section', () => {
    const notFound: RouteRef = { type: 'not-found' };
    expect(pathFor(notFound, 'zh-CN', base)).toBe('/interview-compass/404/');
    expect(pathFor(notFound, 'en', base)).toBe('/interview-compass/en/404/');
    expect(titleFor(notFound, 'zh-CN')).toBe('页面不存在');
    expect(titleFor(notFound, 'en')).toBe('Page not found');
    expect(parentOf(notFound)).toEqual({ type: 'home' });
    expect(breadcrumbsFor(notFound, 'en', base).map(crumb => crumb.label)).toEqual(['Home', 'Page not found']);
    expect(activeNavFor(notFound)).toBe('');
  });

  it('switches language to the same route in the other locale', () => {
    expect(switchLocaleRoute(question, 'en', base)).toBe('/interview-compass/en/questions/planning-reduced-resources/');
  });

  it('gives a question the canonical trail Home > Questions > Domain > Leaf > Question', () => {
    const crumbs = breadcrumbsFor(question, 'en', base);
    expect(crumbs.map((crumb) => crumb.label)).toEqual(['Home', 'Question bank', 'Delivery and ongoing operations', 'Capacity and dependencies', '调整计划']);
    expect(crumbs.at(-1)?.href).toBeUndefined();
    expect(crumbs[2].href).toBe('/interview-compass/en/capabilities/delivery/');
  });

  it('uses the natural hierarchy for facet and capability pages', () => {
    expect(breadcrumbsFor({ type: 'role', id: 'product' }, 'zh-CN', base).map((crumb) => crumb.label)).toEqual(['首页', '岗位导航', '产品']);
    expect(breadcrumbsFor({ type: 'leaf', domain: 'delivery', leaf: 'capacity-planning' }, 'zh-CN', base).map((crumb) => crumb.label))
      .toEqual(['首页', '能力地图', '交付执行与持续运营', '容量与依赖']);
  });

  it('does not change a question trail when the reader came from a role page', () => {
    expect(breadcrumbsFor(question, 'zh-CN', base)).toEqual(breadcrumbsFor(question, 'zh-CN', base));
    expect(breadcrumbsFor(question, 'zh-CN', base).some((crumb) => crumb.label === '产品')).toBe(false);
  });

  it('derives page titles and the active navigation entry from the same route', () => {
    expect(titleFor({ type: 'scenarios' }, 'zh-CN')).toBe('目标路径');
    expect(titleFor({ type: 'search' }, 'en')).toBe('Search results');
    expect(titleFor({ type: 'topics' }, 'zh-CN')).toBe('主题索引');
    expect(titleFor({ type: 'capability-model' }, 'zh-CN')).toBe('阶段能力');
    expect(titleFor({ type: 'collection', id: 'general-interview' }, 'zh-CN')).toBe('通用面试');
    expect(titleFor({ type: 'framework' }, 'zh-CN')).toBe('提问框架');
    expect(titleFor({ type: 'guide' }, 'zh-CN')).toBe('使用说明');
    expect(activeNavFor({ type: 'collections' })).toBe('questions');
    expect(activeNavFor({ type: 'search' })).toBe('questions');
    expect(activeNavFor({ type: 'framework' })).toBe('framework');
    expect(activeNavFor({ type: 'guide' })).toBe('guide');
    expect(breadcrumbsFor({ type: 'framework' }, 'en').map((crumb) => crumb.label)).toEqual(['Home', 'Questioning framework']);
    expect(activeNavFor(question)).toBe('questions');
    expect(activeNavFor({ type: 'leaf', domain: 'delivery', leaf: 'capacity-planning' })).toBe('capabilities');
    expect(activeNavFor({ type: 'scenario', id: 'promotion' })).toBe('scenarios');
    expect(activeNavFor({ type: 'topic', id: 'planning' })).toBe('topics');
  });
});
