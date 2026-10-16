import type { Locale } from './taxonomy';

export type SelfCheckValue = 'unreviewed' | 'supported' | 'missing';

export type PracticeGuide = {
  title: string;
  note: string;
  steps: string[];
};

const guides = {
  experience: {
    'zh-CN': {
      title: '经历复盘提纲',
      note: '用来找回事实和因果，不必逐项照套，也不要求按固定顺序回答。',
      steps: ['背景与目标', '本人责任', '行动与判断', '结果证据', '复盘与变化'],
    },
    en: {
      title: 'Experience reflection outline',
      note: 'Use this to recover facts and cause-and-effect. You do not need to follow every item or use a fixed answer order.',
      steps: ['Situation and goal', 'Your responsibility', 'Actions and judgment', 'Evidence of the result', 'Reflection and what changed'],
    },
  },
  technicalExperience: {
    'zh-CN': {
      title: '经历与技术复盘提纲',
      note: '这道题既问做法，也问真实经历。先还原事实，再讲技术判断和之后的改变，不必套固定模板。',
      steps: ['问题背景与影响', '本人责任', '技术做法与判断', '结果和验证', '失误后的复盘与改变'],
    },
    en: {
      title: 'Technical experience reflection outline',
      note: 'This question asks about both your approach and a real experience. Reconstruct the facts, explain your technical judgment, and describe what changed without forcing a template.',
      steps: ['Problem context and impact', 'Your responsibility', 'Technical approach and judgment', 'Result and verification', 'Reflection and what changed'],
    },
  },
  analysis: {
    'zh-CN': {
      title: '问题分析提纲',
      note: '先拆清问题，再比较选项；如果题目更适合经历复盘，也可以自由调整。',
      steps: ['目标与使用者', '约束与假设', '备选方案', '方案与取舍', '验证与演进'],
    },
    en: {
      title: 'Problem analysis outline',
      note: 'Clarify the problem before comparing options. Adapt it when an experience-based response fits better.',
      steps: ['Goal and users', 'Constraints and assumptions', 'Options', 'Choice and trade-offs', 'Validation and iteration'],
    },
  },
  coding: {
    'zh-CN': {
      title: '编码题思考提纲',
      note: '边写边说明推理过程；先用样例和边界校验理解，不必先追求一次写出最优解。',
      steps: ['澄清输入与输出', '检查样例和边界', '拆解实现思路', '说明复杂度与取舍', '测试结果'],
    },
    en: {
      title: 'Coding question outline',
      note: 'Explain your reasoning as you work. Check examples and boundaries before optimizing.',
      steps: ['Clarify inputs and outputs', 'Check examples and edge cases', 'Break down the implementation', 'Explain complexity and trade-offs', 'Test the result'],
    },
  },
  knowledge: {
    'zh-CN': {
      title: '知识解释提纲',
      note: '优先说明概念、边界和适用条件，再用例子验证理解。',
      steps: ['解释核心概念', '说明适用边界', '讲清关键机制', '比较取舍与常见误区', '用例子验证'],
    },
    en: {
      title: 'Knowledge explanation outline',
      note: 'Explain the concept, its boundaries, and when it applies; use an example to check your understanding.',
      steps: ['Explain the core concept', 'Describe its boundaries', 'Explain the key mechanism', 'Compare trade-offs and pitfalls', 'Check with an example'],
    },
  },
} satisfies Record<string, Record<Locale, PracticeGuide>>;

export function getPracticeGuide(formats: readonly string[], locale: Locale): PracticeGuide {
  const formatSet = new Set(formats);
  if (formatSet.has('behavioral') && formatSet.has('coding')) return guides.technicalExperience[locale];
  const guide = formatSet.has('system-design') || formatSet.has('case') || formatSet.has('planning')
    ? guides.analysis[locale]
    : formatSet.has('coding')
      ? guides.coding[locale]
      : formatSet.has('knowledge')
        ? guides.knowledge[locale]
        : guides.experience[locale];

  if (formatSet.has('system-design')) {
    return {
      ...guide,
      title: locale === 'en' ? 'System design outline' : '系统设计提纲',
      steps: locale === 'en'
        ? ['Goal and users', 'Scale and constraints', 'Architecture options', 'Failure modes and trade-offs', 'Validation and evolution']
        : ['目标与使用者', '规模与约束', '架构选项', '失败场景与取舍', '验证与演进'],
    };
  }

  return guide;
}

export function getSelfCheckStatus(values: readonly SelfCheckValue[], locale: Locale) {
  const pendingCount = values.filter((value) => value === 'unreviewed').length;
  const missingCount = values.filter((value) => value === 'missing').length;
  const ready = values.length > 0 && pendingCount === 0 && missingCount === 0;
  const message = locale === 'en'
    ? ready
      ? 'Self-check complete. You marked every signal as supported by facts; this is not a score or an independent verification.'
      : `${pendingCount + missingCount} signal${pendingCount + missingCount === 1 ? '' : 's'} still need evidence. Not enough evidence yet; do not score.`
    : ready
      ? '自查完成：你认为每项信号都有事实支撑。这不是评分，也不代表事实已被独立核验。'
      : `${pendingCount + missingCount} 项观察信号仍需补充或确认。证据不足，暂不评分。`;

  return { pendingCount, missingCount, ready, message };
}
