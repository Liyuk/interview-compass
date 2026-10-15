import type { BrowseRecord } from './question-catalog';
import type { Bilingual } from './taxonomy';
const groups: { id: string; formats: string[]; name: Bilingual; purpose: Bilingual }[] = [
  { id: 'understand', formats: ['knowledge'], name: { zh: '概念与边界', en: 'Concepts and boundaries' }, purpose: { zh: '先检视概念、假设和适用条件是否清楚。', en: 'Check concepts, assumptions, and conditions of use.' } },
  { id: 'decide', formats: ['planning', 'system-design', 'case'], name: { zh: '判断与方案', en: 'Judgment and options' }, purpose: { zh: '比较目标、约束、方案与取舍依据。', en: 'Compare goals, constraints, options, and trade-offs.' } },
  { id: 'verify', formats: ['coding', 'debugging'], name: { zh: '实现与验证', en: 'Implementation and verification' }, purpose: { zh: '检视方案如何执行、验证和纠偏。', en: 'Examine execution, verification, and correction.' } },
  { id: 'reflect', formats: ['behavioral', 'artifact-review'], name: { zh: '经历与复盘', en: 'Experience and reflection' }, purpose: { zh: '用过去的事实检视贡献、结果与学习。', en: 'Use past facts to examine contribution, results, and learning.' } },
  { id: 'explore', formats: [], name: { zh: '开放探索', en: 'Open exploration' }, purpose: { zh: '尚无明确题型的题目，可按考察意图选择。', en: 'Choose questions without a specific format by their intent.' } },
];
// Format order is a reading aid, not a difficulty ranking or a claim of causality.
export function groupForReading<T extends BrowseRecord>(questions: T[]) {
  const buckets = groups.map(group => ({ ...group, questions: [] as T[] }));
  for (const question of questions) {
    const index = groups.findIndex(group => group.formats.some(format => question.formats?.includes(format)));
    buckets[index < 0 ? buckets.length - 1 : index].questions.push(question);
  }
  return buckets.filter(group => group.questions.length).map(group => ({
    ...group,
    batches: Array.from({ length: Math.ceil(group.questions.length / 8) }, (_, index) => group.questions.slice(index * 8, index * 8 + 8)),
  }));
}
