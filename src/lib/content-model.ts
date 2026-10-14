import { z } from 'astro/zod';
import { hasTaxonomyId } from './taxonomy';

export const questionSchema = z.object({
  questionId: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'questionId must be a stable kebab-case ID'),
  kind: z.literal('question'),
  status: z.enum(['draft', 'published']),
  locale: z.enum(['zh-CN', 'en']),
  title: z.string().trim().min(1),
  question: z.string().trim().min(1),
  intent: z.string().trim().min(1),
  primaryCapability: z.string().min(1),
  topics: z.array(z.string()).default([]),
  roles: z.array(z.string()).default([]),
  responsibilityScopes: z.array(z.string()).default([]),
  careerTracks: z.array(z.string()).default([]),
  scenarios: z.array(z.string()).default([]),
  background: z.array(z.string()).optional(),
  followUps: z.array(z.string()).optional(),
  relatedQuestions: z.array(z.object({
    questionId: z.string(),
    relation: z.string().trim().min(1),
    contrast: z.string().trim().min(1),
  }).strict()).optional(),
  source: z.array(z.object({ url: z.string().url(), attribution: z.string().min(1) }).strict()).optional(),
}).strict().superRefine((record, context) => {
  if (!hasTaxonomyId('capabilities', record.primaryCapability)) {
    context.addIssue({ code: 'custom', path: ['primaryCapability'], message: `Unknown capability ID: ${record.primaryCapability}` });
  }
  const facetFields = ['topics', 'roles', 'responsibilityScopes', 'careerTracks', 'scenarios'] as const;
  for (const facet of facetFields) {
    record[facet].forEach((id, index) => {
      if (!hasTaxonomyId(facet, id)) context.addIssue({ code: 'custom', path: [facet, index], message: `Unknown ${facet} ID: ${id}` });
    });
  }
});

export type QuestionRecord = z.infer<typeof questionSchema>;

export function parseQuestionRecord(input: unknown): QuestionRecord {
  return questionSchema.parse(input);
}

export function validateBilingualPairs(inputs: readonly unknown[]): string[] {
  const errors: string[] = [];
  const published = inputs.map(parseQuestionRecord).filter((record) => record.status === 'published');
  const grouped = new Map<string, QuestionRecord[]>();
  for (const record of published) grouped.set(record.questionId, [...(grouped.get(record.questionId) ?? []), record]);

  for (const [questionId, pair] of grouped) {
    for (const locale of ['zh-CN', 'en'] as const) {
      const matches = pair.filter((record) => record.locale === locale);
      if (matches.length === 0) errors.push(`Missing ${locale === 'en' ? 'English' : 'Chinese'} translation for ${questionId}`);
      if (matches.length > 1) errors.push(`Duplicate ${locale} translation for ${questionId}`);
    }
  }
  return errors;
}

export function validateQuestionRelationships(inputs: readonly unknown[]): string[] {
  const records = inputs.map(parseQuestionRecord).filter((record) => record.status === 'published');
  const errors: string[] = [];
  for (const record of records) {
    for (const relation of record.relatedQuestions ?? []) {
      const exists = records.some((candidate) => candidate.questionId === relation.questionId && candidate.locale === record.locale);
      if (!exists) errors.push(`Missing ${record.locale} related question ${relation.questionId} referenced by ${record.questionId}`);
    }
  }
  return errors;
}
