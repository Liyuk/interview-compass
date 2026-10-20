import { expect, it } from 'vitest';
import { parseBrowseQuery, serializeBrowseQuery } from '../src/lib/discovery/query';

it('keeps responsibility scope separate from the selected content type', () => {
  const result = parseBrowseQuery(new URL('https://example.com/interview-compass/questions/?scope=team&searchScope=docs'), { base: '/interview-compass/', locale: 'zh-CN', facets: { scope: ['team'] } });
  expect(result.query.facets.scope).toBe('team');
  expect(result.query.searchScope).toBe('docs');
  expect(serializeBrowseQuery(result.query, new URL('https://example.com/interview-compass/search/'))).toContain('scope=team&searchScope=docs');
});

it('normalizes unknown facets and invalid pages with visible diagnostics', () => {
  for (const page of ['-2', 'NaN', '2foo', '1.5']) {
    const result = parseBrowseQuery(new URL(`https://example.com/?topic=unknown&page=${page}`), { base: '/', locale: 'en', facets: { topic: ['known'] } });
    expect(result.query.facets).toEqual({});
    expect(result.query.page).toBe(1);
    expect(result.diagnostics).toEqual(expect.arrayContaining(['invalid-topic', 'invalid-page']));
  }
  expect(parseBrowseQuery(new URL('https://example.com/?page=999'), { base: '/', locale: 'en', pageCount: 4 }).query.page).toBe(4);
});

it('keeps local defaults out of ordinary links and includes them only when sharing', () => {
  const localTarget = { version: 1 as const, mode: 'target' as const, target: { roleId: 'frontend', stageId: 'senior-engineer' } };
  const url = new URL('https://example.com/interview-compass/questions/?targetRole=data&targetStage=data-independent');
  const result = parseBrowseQuery(url, { base: '/interview-compass/', locale: 'zh-CN', localTarget });
  expect(result.query.target.preference).toEqual(localTarget);
  expect(result.normalizedUrl).not.toContain('profile');
  expect(result.normalizedUrl).not.toContain('targetRole');
  expect(serializeBrowseQuery(result.query, url, { share: true })).toContain('profileRole=frontend&profileStage=senior-engineer');
  const explicit = parseBrowseQuery(new URL('https://example.com/?profile=all'), { base: '/', locale: 'en', localTarget });
  expect(explicit.query.target.preference.mode).toBe('all');
  const invalid = parseBrowseQuery(new URL('https://example.com/?profileRole=data&profileStage=senior-engineer'), { base: '/', locale: 'en', localTarget });
  expect(invalid.diagnostics).toContain('invalid-target');
});

it('resets pagination only for changed conditions and preserves history pages', async () => {
  const { updateBrowseQuery } = await import('../src/lib/discovery/query');
  const query = parseBrowseQuery(new URL('https://example.com/?page=3&topic=known'), { base: '/', locale: 'en' }).query;
  expect(query.page).toBe(3);
  expect(updateBrowseQuery(query, { q: 'new query' }).page).toBe(1);
  expect(updateBrowseQuery(query, { page: 2 }).page).toBe(2);
});
