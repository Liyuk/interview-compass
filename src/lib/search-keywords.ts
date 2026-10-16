import type { QuestionRecord } from './content-model';
import { capabilityLabel, facetLabel, type Locale } from './taxonomy';

const synonyms: Record<string, { zh: string[]; en: string[] }> = {
  promotion: { zh: ['升职', '晋级', '职级评审'], en: ['leveling', 'career ladder'] },
  interview: { zh: ['求职面试', '社招'], en: ['interview loop', 'onsite'] },
  hiring: { zh: ['录用', '招聘流程'], en: ['recruiting', 'hiring loop'] },
  campus: { zh: ['校园招聘', '应届生'], en: ['new grad', 'campus recruiting'] },
  'self-reflection': { zh: ['自我回顾', '复盘总结'], en: ['retrospective'] },
  'operations-review': { zh: ['项目复盘', '运营回顾'], en: ['postmortem'] },
  reliability: { zh: ['故障恢复', '稳定性', '回滚'], en: ['rollback', 'outage', 'incident'] },
};

export function searchKeywords(record: Pick<QuestionRecord, 'primaryCapability' | 'topics' | 'roles' | 'scenarios'>, locale: Locale): string[] {
  const terms = new Set<string>();
  const add = (value: string) => {
    const text = value.trim();
    if (text) terms.add(text);
  };
  add(capabilityLabel(record.primaryCapability, locale));
  for (const id of record.roles) add(facetLabel('roles', id, locale));
  for (const id of record.topics) add(facetLabel('topics', id, locale));
  for (const id of record.scenarios) add(facetLabel('scenarios', id, locale));
  const ids = [record.primaryCapability, ...record.primaryCapability.split('.'), ...record.topics, ...record.scenarios, ...record.roles];
  for (const id of ids) for (const term of synonyms[id]?.[locale === 'en' ? 'en' : 'zh'] ?? []) add(term);
  return [...terms];
}
