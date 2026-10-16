import type { QuestionRecord } from './content-model';
import { questionEvaluation } from './question-evaluation';
import { tokensForQuestion } from './question-profile-data';
import type { Locale } from './taxonomy';

export type PublicQuestionRecord = Omit<QuestionRecord, 'status'> & {
  evaluation: ReturnType<typeof questionEvaluation>;
  engineeringContext?: string;
};

export type QuestionIndexRecord = {
  questionId: string;
  question: string;
  primaryCapability: string;
  topics: string[];
  roles: string[];
  responsibilityScopes: string[];
  careerTracks: string[];
  scenarios: string[];
  formats: string[];
  profiles: string[];
};

export function buildQuestionIndex(records: readonly QuestionRecord[], locale: Locale): QuestionIndexRecord[] {
  return records
    .filter((record) => record.locale === locale && record.status === 'published')
    .map(record => ({
      questionId: record.questionId,
      question: record.question,
      primaryCapability: record.primaryCapability,
      topics: record.topics,
      roles: record.roles,
      responsibilityScopes: record.responsibilityScopes,
      careerTracks: record.careerTracks,
      scenarios: record.scenarios,
      formats: record.formats ?? [],
      profiles: [...tokensForQuestion(record.questionId)],
    }))
    .sort((a, b) => a.questionId.localeCompare(b.questionId));
}

export function buildPublicQuestion(record: QuestionRecord, engineeringContext?: string): PublicQuestionRecord {
  const { status: _status, ...publicRecord } = record;
  return { ...publicRecord, evaluation: questionEvaluation(record), ...(engineeringContext ? { engineeringContext } : {}) };
}
