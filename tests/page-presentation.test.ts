import { describe, expect, it } from 'vitest';
import { pagePresentationFor } from '../src/lib/page-presentation';
import { siteNavigationFor } from '../src/lib/site-navigation';

describe('task based page presentation', () => {
  it('gives discovery pages space for results and reading pages space for text', () => {
    expect(pagePresentationFor({ type: 'questions' }).kind).toBe('discovery');
    expect(pagePresentationFor({ type: 'search' }).kind).toBe('discovery');
    expect(pagePresentationFor({ type: 'question', questionId: 'q', capability: 'x', title: 'q' }).kind).toBe('article');
    expect(pagePresentationFor({ type: 'home' }).kind).toBe('home');
    expect(pagePresentationFor({ type: 'role', id: 'frontend' })).toEqual({ kind: 'section', section: 'preparation' });
    expect(pagePresentationFor({ type: 'capability-model' }).section).toBe('preparation');
  });
  it('keeps three global destinations and highlights the parent board', () => {
    for (const locale of ['zh-CN', 'en'] as const) {
      const links = siteNavigationFor({ type: 'path', id: 'business-planning' }, locale, '/interview-compass/');
      expect(links).toHaveLength(3);
      expect(links.filter(link => link.current).map(link => link.key)).toEqual(['preparation']);
      expect(links.every(link => link.href.startsWith(`/interview-compass/${locale === 'en' ? 'en/' : ''}`))).toBe(true);
      expect(siteNavigationFor({ type: 'topic', id: 'planning' }, locale, '').filter(link => link.current).map(link => link.key)).toEqual(['preparation']);
    }
  });
});
