import { getCollection } from 'astro:content';
import type { QuestionRecord } from './content-model';
import { facetValuesOf, getQuestions } from './question-catalog';
import { crossDomainPaths, domains, facetDefinitions, type FacetKind, type Locale } from './taxonomy';

export async function loadAllRecords(): Promise<QuestionRecord[]> {
  return (await getCollection('questions')).map((entry) => entry.data);
}

export async function loadQuestions(locale: Locale): Promise<QuestionRecord[]> {
  return getQuestions(await loadAllRecords(), { locale });
}

export async function facetStaticPaths(kind: FacetKind, locale: Locale) {
  const used = new Set((await loadQuestions(locale)).flatMap((record) => facetValuesOf(record, kind)));
  return facetDefinitions[kind].filter((entry) => used.has(entry.id)).map((entry) => ({ params: { id: entry.id } }));
}

export async function domainStaticPaths(locale: Locale) {
  const used = new Set((await loadQuestions(locale)).map((record) => record.primaryCapability.split('.')[0]));
  return domains.filter((domain) => used.has(domain.id)).map((domain) => ({ params: { domain: domain.id } }));
}

export async function leafStaticPaths(locale: Locale) {
  const used = new Set((await loadQuestions(locale)).map((record) => record.primaryCapability));
  return domains.flatMap((domain) => domain.leaves
    .filter((leaf) => used.has(`${domain.id}.${leaf.id}`))
    .map((leaf) => ({ params: { domain: domain.id, leaf: leaf.id } })));
}

export function pathStaticPaths() {
  return crossDomainPaths.map((path) => ({ params: { id: path.id } }));
}

export async function questionStaticPaths(locale: Locale) {
  return (await loadQuestions(locale)).map((record) => ({ params: { id: record.questionId } }));
}
