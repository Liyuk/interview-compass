import {expect,it} from 'vitest';
import {siteNavigationFor} from '../src/lib/site-navigation';
import {pagePresentationFor} from '../src/lib/page-presentation';
it('groups preparation content under one board and leaves global search neutral',()=>{
 for(const locale of ['zh-CN','en'] as const){
  const links=siteNavigationFor({type:'framework'},locale,'/interview-compass/');
  expect(links.map(link=>link.key)).toEqual(['home','preparation','questions']);
  expect(links.filter(link=>link.current).map(link=>link.key)).toEqual(['preparation']);
  expect(siteNavigationFor({type:'search'},locale,'').some(link=>link.current)).toBe(false);
 }
 expect(pagePresentationFor({type:'role',id:'frontend'}).section).toBe('preparation');
 expect(pagePresentationFor({type:'search'}).section).toBe(null);
});

it('provides localized preparation routes and a safe return into the guide',async()=>{
 const {pathFor,breadcrumbsFor}=await import('../src/lib/routes');
 const {readingReturnPath}=await import('../src/lib/reading-journey');
 expect(pathFor({type:'preparation'},'en','/interview-compass/')).toBe('/interview-compass/en/guide/');
 expect(breadcrumbsFor({type:'framework'},'zh-CN','').map(c=>c.label)).toEqual(['首页','准备指南','提问框架']);
 expect(readingReturnPath('/interview-compass/guide/direction/?profile=all','zh-CN','/interview-compass/')).toBe('/interview-compass/guide/direction/?profile=all');
});

it('uses one guide ancestor and keeps search and context categories under their actual owners',async()=>{
 const {breadcrumbsFor}=await import('../src/lib/routes');
 expect(breadcrumbsFor({type:'guide-capabilities'},'en').map(c=>c.label)).toEqual(['Home','Preparation guide','Understand the capability framework']);
 expect(breadcrumbsFor({type:'search'},'en').map(c=>c.label)).toEqual(['Home','Search results']);
 expect(breadcrumbsFor({type:'scenario',id:'hiring'},'en').at(-2)?.href).toBe('/en/browse/');
});
