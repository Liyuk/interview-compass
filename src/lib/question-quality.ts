import type { QuestionRecord } from './content-model.ts';

export interface QuestionQualityWarning {
  questionId: string;
  locale: QuestionRecord['locale'];
  code: 'missing-followups' | 'merged-followup-residue' | 'short-intent' | 'repeated-intent';
  message: string;
}

function normalize(value: string) {
  return value.replace(/\s+/g, ' ').trim().toLocaleLowerCase();
}

export function questionQualityWarnings(records: readonly QuestionRecord[]): QuestionQualityWarning[] {
  const published = records.filter((record) => record.status === 'published');
  const intentIds = new Map<string, Set<string>>();
  for (const record of published) {
    const key = `${record.locale}:${normalize(record.intent)}`;
    intentIds.set(key, new Set([...(intentIds.get(key) ?? []), record.questionId]));
  }

  const warnings: QuestionQualityWarning[] = [];
  for (const record of published) {
    const add = (code: QuestionQualityWarning['code'], message: string) => warnings.push({ questionId: record.questionId, locale: record.locale, code, message });
    if (!record.followUps?.length) add('missing-followups', 'has no follow-up questions');
    if (record.followUps?.some((followUp) => followUp.trimStart().startsWith('【'))) add('merged-followup-residue', 'has a follow-up starting with 【');
    const intentLength = record.locale === 'zh-CN'
      ? [...record.intent].length
      : (record.intent.match(/[\p{L}\p{N}]+/gu) ?? []).length;
    if (intentLength < (record.locale === 'zh-CN' ? 20 : 12)) add('short-intent', `intent is short (${intentLength} ${record.locale === 'zh-CN' ? 'characters' : 'words'})`);
    const repeatedIds = intentIds.get(`${record.locale}:${normalize(record.intent)}`);
    if ((repeatedIds?.size ?? 0) >= 3) add('repeated-intent', `same intent appears on ${repeatedIds.size} question IDs`);
  }
  return warnings;
}
