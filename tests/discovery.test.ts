import { expect, it } from 'vitest';
import { createDiscovery } from '../src/lib/discovery/search';
import { createCatalogAdapter } from '../src/lib/discovery/catalog-adapter';
import { parseBrowseQuery } from '../src/lib/discovery/query';

it('filters every candidate before selecting the visible page', async () => {
  const catalog = createCatalogAdapter(Array.from({ length: 60 }, (_, i) => ({ id: `q${i + 1}`, title: `Question ${i + 1}`, url: `/questions/q${i + 1}/`, profiles: i >= 20 && i < 40 ? ['frontend:senior-engineer'] : [], facets: {} })));
  const query = parseBrowseQuery(new URL('https://example.com/questions/?profileRole=frontend&profileStage=senior-engineer'), { base: '/', locale: 'en' }).query;
  const result = await createDiscovery({ catalog, pagefind: catalog }).search(query);
  expect(result.questions.total).toBe(20);
  expect(result.questions.items.map(item => item.id)).toEqual(['q21','q22','q23','q24','q25','q26','q27','q28','q29','q30','q31','q32','q33','q34','q35','q36','q37','q38','q39','q40']);
});

it('keeps document results independent of question targets and facets', async () => {
  const { createPagefindAdapter } = await import('../src/lib/discovery/pagefind-adapter');
  const index = { search: async (_q: string | null, options: { filters: Record<string, string> }) => ({ results: [
    { id: 'guide', filters: { kind: 'docs', locale: 'en' }, data: async () => ({ url: '/handbook/', meta: { title: 'Handbook' } }) },
    { id: 'q1', filters: { kind: 'questions', locale: 'en', profile: 'frontend:senior-engineer', topic: 'cache' }, data: async () => ({ url: '/questions/q1/', meta: { title: 'Cache' } }) },
    { id: 'q2', filters: { kind: 'questions', locale: 'en', topic: 'cache' }, data: async () => ({ url: '/questions/q2/', meta: { title: 'Other' } }) },
  ].filter(item => Object.entries(options.filters).every(([key, value]) => item.filters[key] === value)) }) };
  const query = parseBrowseQuery(new URL('https://example.com/search/?q=guide&topic=cache&profileRole=frontend&profileStage=senior-engineer'), { base: '/', locale: 'en' }).query;
  const adapter = createPagefindAdapter(index);
  const result = await createDiscovery({ catalog: adapter, pagefind: adapter }).search(query);
  expect(result.docs.items.map(item => item.title)).toEqual(['Handbook']);
  expect(result.questions.items.map(item => item.title)).toEqual(['Cache']);
});

it('counts a facet against the other conditions while allowing its own alternatives', async () => {
  const discovery = createDiscovery({ catalog: createCatalogAdapter([
    { id: 'a', title: 'a', url: '/a/', facets: { topic: ['cache'], format: ['design'] } },
    { id: 'b', title: 'b', url: '/b/', facets: { topic: ['db'], format: ['design'] } },
    { id: 'c', title: 'c', url: '/c/', facets: { topic: ['db'], format: ['coding'] } },
  ]), pagefind: createCatalogAdapter([]) });
  const query = parseBrowseQuery(new URL('https://example.com/?topic=cache&format=design'), { base: '/', locale: 'en' }).query;
  expect(await discovery.facetCounts(query, 'topic', ['cache', 'db'])).toEqual({ cache: 1, db: 1 });
});
