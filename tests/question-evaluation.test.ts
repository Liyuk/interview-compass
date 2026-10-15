import { describe, expect, it } from 'vitest';
import { questionEvaluation } from '../src/lib/question-evaluation';

const record = (locale: 'zh-CN' | 'en') => ({
  questionId: 'prioritization-under-limited-capacity',
  kind: 'question' as const,
  status: 'published' as const,
  locale,
  title: locale === 'zh-CN' ? '有限资源下如何取舍？' : 'How do you prioritize under limited capacity?',
  question: locale === 'zh-CN' ? '资源只够做两项时，你会如何制定下一季度规划？' : 'How would you plan next quarter if capacity only allowed two initiatives?',
  intent: locale === 'zh-CN' ? '了解你如何说明目标、取舍依据与暂缓项。' : 'Understand how you explain goals, trade-offs, and deferred work.',
  signals: locale === 'zh-CN'
    ? ['按明确口径比较项目', '说明依赖和容量冲突']
    : ['Compare initiatives on explicit criteria', 'Explain dependencies and capacity conflicts'],
  primaryCapability: 'value-direction.prioritization',
  topics: ['planning'], roles: ['engineering'], responsibilityScopes: ['team'],
  careerTracks: ['individual-contributor'], scenarios: ['interview'], formats: ['planning'],
  followUps: locale === 'zh-CN' ? ['如果关键依赖延期，你会如何重排？'] : ['How would you reprioritize if a key dependency slipped?'],
  source: [{ attribution: 'original' as const }],
});

describe('question evaluation guide', () => {
  it('shows the requested four levels and ties the anchors to question-specific signals', () => {
    const guide = questionEvaluation(record('zh-CN'));
    expect(guide.levels.map(({ id }) => id)).toEqual(['not-pass', 'pass', 'excellent', 'exceptional']);
    expect(guide.levels.map(({ score }) => score)).toEqual([1, 2, 3, 4]);
    expect(guide.levels.map(({ label }) => label)).toEqual(['1 · 不通过', '2 · 通过', '3 · 优秀', '4 · 卓越']);
    expect(guide.levels[1].reference).toContain('按明确口径比较项目');
    expect(guide.levels[2].reference).toContain('说明依赖和容量冲突');
    expect(guide.levels[3].reference).toMatch(/可归因|归因/);
    expect(guide.note).toContain('2 分“通过”为基线');
    expect(guide.objectiveTitle).toBe('题面情境中的客观问题');
    expect(guide.decisionTitle).toBe('基于上下文的决策');
    expect(guide.benefitsTitle).toBe('方案收益');
    expect(guide.costsTitle).toBe('方案成本与风险');
    expect(guide.benefits.join(' ')).toMatch(/价值|受益/);
    expect(guide.costs.join(' ')).toMatch(/成本|风险/);
  });

  it('localizes the guide and preserves follow-up context', () => {
    const guide = questionEvaluation(record('en'));
    expect(guide.title).toBe('Assessment guide');
    expect(guide.contextQuestions.join(' ')).toMatch(/goal|constraint|evidence/i);
    expect(guide.levels[1].reference).toContain('Compare initiatives on explicit criteria');
    expect(guide.benefitsTitle).toBe('Benefits created');
    expect(guide.costsTitle).toBe('Costs and risks');
  });
});
