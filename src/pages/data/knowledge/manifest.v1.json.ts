import type { APIRoute } from 'astro';
import { loadKnowledgeRegistry } from '../../../lib/knowledge/site-registry';
export const prerender = true;
export const GET: APIRoute = async () => {
  const registry = await loadKnowledgeRegistry();
  const nodes = (['zh-CN','en'] as const).flatMap(locale => registry.pages(locale));
  const edges = nodes.flatMap(node => registry.relations(node.contentId,node.locale).outgoing.map(edge => ({from:node.contentId,to:edge.target.contentId,locale:node.locale,type:edge.type,reason:edge.reason,contrast:edge.contrast})));
  return new Response(JSON.stringify({version:1,nodes:nodes.map(({contentId,locale,title,href,kind})=>({contentId,locale,title,href,kind})),edges}),{headers:{'Content-Type':'application/json; charset=utf-8'}});
};
