import { readFileSync } from 'node:fs';
import { expect, it } from 'vitest';
import { guideSectionKeys } from '../src/lib/guide-content';

const chapters = (locale: string) => readFileSync(new URL(`../src/content/guide/${locale}.md`, import.meta.url), 'utf8')
  .split('\n').filter(line => /^## /.test(line));

it('keeps the guide chapters paired across locales and free of hard-coded base paths', () => {
  expect(chapters('zh-CN')).toHaveLength(guideSectionKeys.length);
  expect(chapters('en')).toHaveLength(guideSectionKeys.length);
  for (const locale of ['zh-CN', 'en']) {
    const text = readFileSync(new URL(`../src/content/guide/${locale}.md`, import.meta.url), 'utf8');
    expect(text).not.toMatch(/\]\(\/interview-compass/);
    expect(text).not.toMatch(/^# /m);
  }
});
