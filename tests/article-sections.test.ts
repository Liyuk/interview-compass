import { expect, it } from 'vitest';
import { translateArticleHash } from '../src/lib/article-sections';

it('changes a localized chapter hash through its stable section identity', () => {
  const sections = [{ sectionKey: 'targets', anchors: { 'zh-CN': '岗位与阶段目标', en: 'role-and-stage-targets' } }];
  expect(translateArticleHash('#%E5%B2%97%E4%BD%8D%E4%B8%8E%E9%98%B6%E6%AE%B5%E7%9B%AE%E6%A0%87', 'zh-CN', 'en', sections)).toBe('#role-and-stage-targets');
  expect(translateArticleHash('#unknown', 'zh-CN', 'en', sections)).toBe('');
  expect(translateArticleHash('#%invalid', 'zh-CN', 'en', sections)).toBe('');
});
