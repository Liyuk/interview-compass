import { describe, expect, it } from 'vitest';
import { glob, readFile } from 'node:fs/promises';
import yaml from 'js-yaml';
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
    expect(guide.objectiveTitle).toBe('需要解决或厘清的客观问题');
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
    expect(guide.inference).toContain(record('en').signals[0]);
    expect(guide.inference).toContain(record('en').intent.toLowerCase());
    expect(guide.contextQuestions[0]).toBe(record('en').followUps[0]);
  });

  it('grounds the hidden inference and context-first flow in this question', () => {
    const chinese = record('zh-CN');
    const guide = questionEvaluation(chinese);

    expect(guide.objective).toContain(chinese.question);
    expect(guide.intent).toBe(chinese.intent);
    expect(guide.inference).toContain(chinese.signals[0]);
    expect(guide.inference).toContain(chinese.intent);
    expect(guide.inference).toMatch(/假设|核实/);
    expect(guide.contextQuestions[0]).toBe(chinese.followUps[0]);
    expect(guide.decision).toMatch(/补足上下文|上下文/);
    expect(guide.benefits.join(' ')).toMatch(/目标|价值|受益/);
    expect(guide.costs.join(' ')).toMatch(/成本|风险/);
  });

  it('renders the complete structured guide for every published bilingual question', async () => {
    let checked = 0;
    for await (const file of glob('src/content/questions/**/*.md')) {
      const source = await readFile(file, 'utf8');
      const match = source.match(/^---\s*\n([\s\S]*?)\n---/);
      expect(match, file).not.toBeNull();
      const question = yaml.load(match![1]) as ReturnType<typeof record>;
      if (question.status !== 'published') continue;

      const guide = questionEvaluation(question);
      expect(guide.objective, file).toBeTruthy();
      expect(guide.intent, file).toBe(question.intent);
      expect(guide.inference, file).toContain(question.signals[0]);
      expect(guide.contextQuestions.length, file).toBeGreaterThanOrEqual(4);
      expect(guide.decision, file).toBeTruthy();
      expect(guide.benefits.length, file).toBe(2);
      expect(guide.costs.length, file).toBe(2);
      expect(guide.levels.map(({ score }) => score), file).toEqual([1, 2, 3, 4]);
      expect(guide.levels.every(({ reference }) => reference.includes(question.signals[0])), file).toBe(true);
      if (question.questionId.startsWith('bulk1000-')) {
        if (question.questionId === 'bulk1000-b-031-v1') {
          expect(question.intent, file).toMatch(question.locale === 'zh-CN' ? /退款和规则变化/ : /refunds and rule changes/i);
          expect(question.signals.length, file).toBe(4);
          expect(question.signals.join(' '), file).toMatch(question.locale === 'zh-CN' ? /历史|重现/ : /historical|reproduc/i);
          expect(question.followUps?.length, file).toBe(3);
        } else {
          const title = question.title.replace(/[?？。.]$/, '');
          expect(question.intent, file).toContain(title);
          expect(question.signals.length, file).toBe(3);
          expect(question.signals[0], file).toContain(title);
          if (question.followUps !== undefined) {
            expect(question.followUps.length, file).toBeGreaterThan(0);
            expect(question.followUps.every((item) => typeof item === 'string' && item.trim().length > 0), file).toBe(true);
          }
        }
      }
      checked++;
    }
    expect(checked).toBeGreaterThan(0);
  });
});
