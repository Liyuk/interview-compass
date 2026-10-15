import type { APIRoute, GetStaticPaths } from 'astro';
import { buildPublicQuestion } from '../../../../lib/question-feed';
import { loadAllRecords } from '../../../../lib/site-data';

export const prerender = true;

export const getStaticPaths: GetStaticPaths = async () => (await loadAllRecords())
  .filter((record) => record.status === 'published')
  .map((record) => ({ params: { locale: record.locale, id: record.questionId }, props: { record } }));

export const GET: APIRoute = async ({ props }) => new Response(JSON.stringify(buildPublicQuestion(props.record)), {
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});
