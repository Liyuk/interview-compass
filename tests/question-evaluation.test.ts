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
  it('shows shared four-level anchors without pretending an unreviewed analysis is specific', () => {
    const guide = questionEvaluation(record('zh-CN'));
    expect(guide.levels.map(({ id }) => id)).toEqual(['not-pass', 'pass', 'excellent', 'exceptional']);
    expect(guide.levels.map(({ score }) => score)).toEqual([1, 2, 3, 4]);
    expect(guide.levels.map(({ label }) => label)).toEqual(['1 · 不通过', '2 · 通过', '3 · 优秀', '4 · 卓越']);
    expect(guide.levels[1].reference).not.toContain('按明确口径比较项目');
    expect(guide.levels[3].reference).toMatch(/可归因|归因/);
    expect(guide.specific).toBe(false);
    expect(guide.reviewLabel).toContain('逐题分析待校准');
    expect(guide.objective).not.toContain(record('zh-CN').question);
    expect(guide.inference).not.toContain(record('zh-CN').signals[0]);
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
    expect(guide.levels[1].reference).toContain('checkable line of reasoning');
    expect(guide.benefitsTitle).toBe('Benefits created');
    expect(guide.costsTitle).toBe('Costs and risks');
    expect(guide.inference).toContain('No question-specific inference');
    expect(guide.contextQuestions[0]).toBe(record('en').followUps[0]);
    expect(guide.contextQuestions[1]).toBe('What goal, baseline, constraints, and responsibility boundary applied?');
    expect(guide.contextQuestions.slice(1).join(' ')).not.toMatch(/[\u3400-\u9fff]/);
  });

  it('grounds the hidden inference and context-first flow in this question', () => {
    const chinese = record('zh-CN');
    const guide = questionEvaluation(chinese);

    expect(guide.objective).not.toContain(chinese.question);
    expect(guide.intent).toBe(chinese.intent);
    expect(guide.inference).toContain('尚无经过复核的专属推论');
    expect(guide.contextQuestions[0]).toBe(chinese.followUps[0]);
    expect(guide.decision).toMatch(/补足上下文|上下文/);
    expect(guide.benefits.join(' ')).toMatch(/目标|价值|受益/);
    expect(guide.costs.join(' ')).toMatch(/成本|风险/);
  });

  it('uses reviewed, question-specific context, comparisons, trade-offs, and anchors when available', () => {
    const specific = { ...record('zh-CN'), questionId: 'c-metrics-causality-competitor-benchmark' };
    const guide = questionEvaluation(specific);
    expect(guide.specific).toBe(true);
    expect(guide.reviewLabel).toContain('逐题分析 · 已复核');
    expect(guide.objective).toContain('竞品指标');
    expect(guide.comparisons.length).toBeGreaterThan(0);
    expect(guide.levels[1].reference).toContain('主要口径');
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
      if (!guide.specific) {
        expect(guide.objective, file).not.toContain(question.question);
        expect(guide.inference, file).not.toContain(question.signals[0]);
        expect(guide.reviewNote, file).toMatch(/通用|shared prompts/i);
      }
      expect(guide.contextQuestions.length, file).toBeGreaterThanOrEqual(4);
      expect(guide.decision, file).toBeTruthy();
      expect(guide.benefits.length, file).toBe(2);
      expect(guide.costs.length, file).toBe(2);
      expect(guide.levels.map(({ score }) => score), file).toEqual([1, 2, 3, 4]);
      expect(guide.levels.every(({ reference }) => reference.trim().length > 0), file).toBe(true);
      if (question.locale === 'en') {
        const localizedGuide = [
          guide.objective,
          guide.inference,
          ...guide.contextQuestions,
          guide.decision,
          ...guide.benefits,
          ...guide.costs,
          ...guide.levels.flatMap(({ meaning, reference }) => [meaning, reference]),
        ].join(' ');
        expect(localizedGuide, file).not.toMatch(/[\u3400-\u9fff]/);
      }
      if (question.questionId.startsWith('bulk1000-')) {
        if (question.questionId === 'bulk1000-b-031-v1') {
          expect(question.intent, file).toMatch(question.locale === 'zh-CN' ? /退款和规则变化/ : /refunds and rule changes/i);
          expect(question.signals.length, file).toBe(4);
          expect(question.signals.join(' '), file).toMatch(question.locale === 'zh-CN' ? /历史|重现/ : /historical|reproduc/i);
          expect(question.followUps?.length, file).toBe(3);
        } else {
          // Signals can be edited to describe observable evidence directly.
          // Requiring a copied title would lock these questions to their original template.
          expect(question.signals.length, file).toBeGreaterThanOrEqual(3);
          expect(question.signals.every((signal) => typeof signal === 'string' && signal.trim().length > 0), file).toBe(true);
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
