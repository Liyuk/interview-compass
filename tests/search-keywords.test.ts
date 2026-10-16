import { describe, expect, it } from 'vitest';
import { searchKeywords } from '../src/lib/search-keywords';

describe('search keywords', () => {
  it('adds Chinese synonyms that the facet label does not already contain', () => {
    const terms = searchKeywords({
      primaryCapability: 'people-organization.growth-development',
      topics: ['promotion'],
      roles: ['backend'],
      scenarios: ['promotion'],
    }, 'zh-CN');
    expect(terms).toContain('升职');
    expect(terms).toContain('职级评审');
    expect(terms).toContain('晋升准备');
    expect(terms).toContain('后端');
  });
});
