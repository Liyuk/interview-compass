import { describe, expect, it } from 'vitest';
import { getPracticeGuide, getSelfCheckStatus } from '../src/lib/practice-guide';

describe('getPracticeGuide', () => {
  it('gives experience questions a reflection outline without requiring a scripted answer', () => {
    const guide = getPracticeGuide(['behavioral'], 'zh-CN');

    expect(guide.title).toContain('经历');
    expect(guide.steps).toEqual(expect.arrayContaining(['本人责任', '行动与判断', '结果证据', '复盘与变化']));
    expect(guide.note).toContain('不必逐项照套');
  });

  it('combines technical reasoning with real-experience reflection for mixed questions', () => {
    const guide = getPracticeGuide(['behavioral', 'coding'], 'zh-CN');

    expect(guide.title).toContain('经历与技术复盘');
    expect(guide.steps).toContain('技术做法与判断');
    expect(guide.steps).toContain('失误后的复盘与改变');
    expect(guide.note).toContain('不必套固定模板');
  });

  it('uses a goal, constraints, options, trade-offs, and validation outline for systems and case questions', () => {
    const guide = getPracticeGuide(['system-design', 'case'], 'zh-CN');

    expect(guide.title).toContain('系统设计');
    expect(guide.steps).toEqual(expect.arrayContaining(['目标与使用者', '规模与约束', '架构选项', '验证与演进']));
  });

  it('localizes coding guidance', () => {
    const guide = getPracticeGuide(['coding'], 'en');

    expect(guide.title).toContain('Coding');
    expect(guide.steps).toEqual(expect.arrayContaining(['Clarify inputs and outputs', 'Check examples and edge cases', 'Test the result']));
  });
});

describe('getSelfCheckStatus', () => {
  it('withholds scoring until every signal has been reviewed and supported', () => {
    const status = getSelfCheckStatus(['unreviewed', 'supported', 'missing'], 'zh-CN');

    expect(status.pendingCount).toBe(1);
    expect(status.missingCount).toBe(1);
    expect(status.ready).toBe(false);
    expect(status.message).toContain('证据不足，暂不评分');
  });

  it('describes a complete self-check without assigning a score', () => {
    const status = getSelfCheckStatus(['supported', 'supported'], 'zh-CN');

    expect(status.ready).toBe(true);
    expect(status.message).toContain('这不是评分');
  });
});
