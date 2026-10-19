import { expect, it } from 'vitest';
import { createReadingSession } from '../src/lib/reading/session';
import { createKnowledgeRegistry } from '../src/lib/knowledge/registry';
const registryResult = createKnowledgeRegistry({ nodes: ['q1','q2','q3'].flatMap(id => (['zh-CN','en'] as const).map(locale => ({ contentId: `question:${id}`, locale, kind: 'question' as const, title:id, href: `/${locale}/questions/${id}/` }))) });
if (registryResult.ok === false) throw new Error('fixture');
const registry = registryResult.registry;
const memory = () => { const values = new Map<string,string>(); return { get: (key:string) => values.get(key) ?? null, set: (key:string,value:string) => { values.set(key,value); } }; };

it('moves through a curated collection in authored order', () => {
  const session = createReadingSession(memory(), registry, {base:'/'});
  session.open({ locale:'en', source:'/en/collections/technical/', questionIds:['q3','q1','q2'], currentId:'q1' });
  expect(session.current().previous?.contentId).toBe('question:q3');
  expect(session.current().next?.contentId).toBe('question:q2');
  expect(session.move(1).current?.contentId).toBe('question:q2');
  expect(session.current().next).toBeUndefined();
  expect(session.current().source).toBe('/en/collections/technical/');
});

it('restores a saved reading order and survives unavailable or corrupt storage', () => {
  const storage = memory();
  createReadingSession(storage, registry, {base:'/'}).open({locale:'en',source:'/en/questions/?page=2',questionIds:['q3','q1','q2','q1','missing'],currentId:'q1'});
  expect(createReadingSession(storage, registry, {base:'/'}).current().questionIds).toEqual(['q3','q1','q2']);
  const blocked = createReadingSession({ get: () => { throw Error('blocked'); }, set: () => { throw Error('blocked'); }, scope:'device' }, registry, {base:'/'});
  expect(blocked.open({locale:'en',source:'/en/questions/',questionIds:['q1','q2'],currentId:'q1'}).scope).toBe('page');
  expect(blocked.move(1).current?.contentId).toBe('question:q2');
  const corrupt = createReadingSession({get:()=>'{',set:()=>{}},registry,{base:'/'});
  expect(corrupt.current().current).toBeUndefined();
});

it('supports local collection editing without jumping when the current question is removed', () => {
  const session = createReadingSession(memory(), registry, {base:'/'});
  session.open({locale:'en',source:'/en/collections/',questionIds:['q1','q2'],currentId:'q1',collectionId:'current'});
  expect(session.updateCollection({type:'add',id:'q1'}).ids).toEqual(['q1']);
  expect(session.updateCollection({type:'add',id:'q1'}).ids).toEqual(['q1']);
  session.updateCollection({type:'add',id:'q2'});
  expect(session.updateCollection({type:'reorder',ids:['q2','q1']}).ids).toEqual(['q2','q1']);
  session.updateCollection({type:'remove',id:'q1'});
  expect(session.current().current?.contentId).toBe('question:q1');
  expect(session.current().position).toBe(-1);
  expect(session.current().next).toBeUndefined();
  expect(session.updateCollection({type:'clear'}).ids).toEqual([]);
});

it('rejects collection additions beyond 200 without silently dropping questions', () => {
  const result = createKnowledgeRegistry({nodes:Array.from({length:201},(_,i)=>({contentId:`question:${i}`,locale:'en' as const,title:String(i),kind:'question' as const,href:`/en/questions/${i}/`,missingTranslations:['zh-CN' as const]}))});
  if (result.ok === false) throw Error('fixture');
  const session = createReadingSession(memory(),result.registry,{base:'/'});
  for(let i=0;i<200;i++) session.updateCollection({type:'add',id:String(i)});
  expect(session.updateCollection({type:'add',id:'200'}).error).toBe('collection-limit');
  expect(session.collection().ids).toHaveLength(200);
});

it('migrates the old reading return without accepting foreign or malformed sources', () => {
  const storage = memory();
  storage.set('interview-compass-reading-return', JSON.stringify({from:'/en/questions/?page=2',to:'/en/questions/q1/'}));
  expect(createReadingSession(storage,registry,{base:'/'}).current().source).toBe('/en/questions/?page=2');
  for(const source of ['//evil.example/en/questions/','/outside/questions/','/en/questions/\\evil','/en/questions/\u0000']) {
    const session = createReadingSession(memory(),registry,{base:'/'});
    expect(session.open({locale:'en',source,questionIds:['q1'],currentId:'q1'}).source).toBe('');
  }
});

it('preserves the order and source when the reader changes language', () => {
  const storage = memory();
  createReadingSession(storage,registry,{base:'/'}).open({locale:'en',source:'/en/questions/?page=2&topic=cache',questionIds:['q3','q1','q2'],currentId:'q1'});
  const translated = createReadingSession(storage,registry,{base:'/',locale:'zh-CN'}).current();
  expect(translated.source).toBe('/questions/?page=2&topic=cache');
  expect(translated.current?.locale).toBe('zh-CN');
  expect(translated.next?.contentId).toBe('question:q2');
});
