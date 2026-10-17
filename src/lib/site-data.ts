import { getCollection } from 'astro:content';
import type { QuestionRecord } from './content-model';
import { facetValuesOf, getQuestions } from './question-catalog';
import { CATALOG_PAGE_SIZE } from './search-pagination';
import { crossDomainPaths, domains, facetDefinitions, audienceRoles, type FacetKind, type Locale } from './taxonomy';

let allRecordsPromise: Promise<QuestionRecord[]> | undefined;
const questionsByLocale = new Map<Locale, Promise<QuestionRecord[]>>();

export function loadAllRecords(): Promise<QuestionRecord[]> {
  allRecordsPromise ??= getCollection('questions').then(entries => entries.map(entry => ({ ...entry.data, roles: entry.data.roles.filter(id => audienceRoles.some(role => role.id === id)) })));
  return allRecordsPromise;
}

export function loadQuestions(locale: Locale): Promise<QuestionRecord[]> {
  let pending = questionsByLocale.get(locale);
  if (!pending) {
    pending = loadAllRecords().then(records => getQuestions(records, { locale }));
    questionsByLocale.set(locale, pending);
  }
  return pending;
}

export async function facetStaticPaths(kind: FacetKind, locale: Locale) {
  const used = new Set((await loadQuestions(locale)).flatMap((record) => facetValuesOf(record, kind)));
  return (kind === 'roles' ? audienceRoles : facetDefinitions[kind]).filter((entry) => used.has(entry.id)).map((entry) => ({ params: { id: entry.id } }));
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

const facetFilter = { roles: 'role', scenarios: 'scenario', topics: 'topic' } as const;

export async function facetPageStaticPaths(kind: keyof typeof facetFilter, locale: Locale) {
  const questions = await loadQuestions(locale);
  const entries: readonly { id: string }[] = kind === 'roles' ? audienceRoles : facetDefinitions[kind];
  const ids = entries.map(entry => entry.id);
  return ids.flatMap(id => {
    const count = getQuestions(questions, { locale, [facetFilter[kind]]: id }).length;
    const pageCount = Math.ceil(count / CATALOG_PAGE_SIZE);
    return Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) => ({ params: { id, page: String(index + 2) } }));
  });
}

export function pathStaticPaths() {
  return crossDomainPaths.map((path) => ({ params: { id: path.id } }));
}

export async function questionStaticPaths(locale: Locale) {
  return (await loadQuestions(locale)).map((record) => ({ params: { id: record.questionId } }));
}
