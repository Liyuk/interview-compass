import type { APIRoute, GetStaticPaths } from 'astro';
import { buildQuestionIndex } from '../../../lib/question-feed';
import { loadQuestions } from '../../../lib/site-data';

export const prerender = true;

export const getStaticPaths: GetStaticPaths = () => [
  { params: { locale: 'zh-CN' } },
  { params: { locale: 'en' } },
];

export const GET: APIRoute = async ({ params }) => {
  if (params.locale !== 'zh-CN' && params.locale !== 'en') return new Response('Not found', { status: 404 });
  const index = buildQuestionIndex(await loadQuestions(params.locale), params.locale);
  return new Response(JSON.stringify({ schemaVersion: 1, locale: params.locale, questions: index }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
