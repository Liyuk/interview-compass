import type { QuestionRecord } from './content-model';
import { questionEvaluation } from './question-evaluation';
import type { Locale } from './taxonomy';

export type PublicQuestionRecord = Omit<QuestionRecord, 'status'> & {
  evaluation: ReturnType<typeof questionEvaluation>;
};

export type QuestionIndexRecord = Pick<QuestionRecord,
  'questionId' | 'locale' | 'title' | 'question' | 'primaryCapability' | 'topics' | 'roles' | 'scenarios'>;

export function buildQuestionIndex(records: readonly QuestionRecord[], locale: Locale): QuestionIndexRecord[] {
  return records
    .filter((record) => record.locale === locale && record.status === 'published')
    .map(({ questionId, locale: recordLocale, title, question, primaryCapability, topics, roles, scenarios }) => ({
      questionId, locale: recordLocale, title, question, primaryCapability, topics, roles, scenarios,
    }))
    .sort((a, b) => a.questionId.localeCompare(b.questionId));
}

export function buildPublicQuestion(record: QuestionRecord): PublicQuestionRecord {
  const { status: _status, ...publicRecord } = record;
  return { ...publicRecord, evaluation: questionEvaluation(record) };
}
