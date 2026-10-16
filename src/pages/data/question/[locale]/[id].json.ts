import type { APIRoute, GetStaticPaths } from 'astro';
import { buildPublicQuestion } from '../../../../lib/question-feed';
import { engineeringLensForQuestion } from '../../../../lib/question-profile-data';
import { loadAllRecords } from '../../../../lib/site-data';

export const prerender = true;

export const getStaticPaths: GetStaticPaths = async () => (await loadAllRecords())
  .filter((record) => record.status === 'published')
  .map((record) => ({ params: { locale: record.locale, id: record.questionId }, props: { record } }));

export const GET: APIRoute = async ({ props }) => new Response(JSON.stringify(buildPublicQuestion(props.record, engineeringLensForQuestion(props.record.questionId)?.[props.record.locale === 'en' ? 'en' : 'zh'])), {
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});
