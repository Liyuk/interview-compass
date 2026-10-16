import type { APIRoute, GetStaticPaths } from 'astro';
import { buildTargetRoles } from '../../../lib/target-roles';

export const prerender = true;

export const getStaticPaths: GetStaticPaths = () => [
  { params: { locale: 'zh-CN' } },
  { params: { locale: 'en' } },
];

export const GET: APIRoute = ({ params }) => {
  if (params.locale !== 'zh-CN' && params.locale !== 'en') return new Response('Not found', { status: 404 });
  return new Response(JSON.stringify(buildTargetRoles(params.locale)), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
