import { loadAllRecords } from '../site-data';
import { pathFor, titleFor, type RouteRef } from '../routes';
import { audienceRoles, domains, facetDefinitions, crossDomainPaths } from '../taxonomy';
import { stageIds, dimensionIds } from '../capability-model';
import { questionCollections } from '../question-collections';
import { createKnowledgeRegistry } from './registry';
import { contentIdForRoute } from './definitions';
import type { KnowledgeKind, KnowledgeNode, KnowledgeRegistry } from './types';

let pending: Promise<KnowledgeRegistry> | undefined;
export function loadKnowledgeRegistry(): Promise<KnowledgeRegistry> {
  pending ??= build();
  return pending;
}
async function build(): Promise<KnowledgeRegistry> {
  const records = await loadAllRecords();
  const nodes: KnowledgeNode[] = [];
  for (const locale of ['zh-CN', 'en'] as const) {
    let order = 0;
    const add = (route: RouteRef, kind: KnowledgeKind, parent?: string, hidden = false) => {
      const node: KnowledgeNode = { contentId: contentIdForRoute(route), locale, kind, title: titleFor(route, locale), href: pathFor(route, locale, import.meta.env.BASE_URL), primaryParentId: parent, hiddenFromNavigation: hidden, order: order++ };
      nodes.push(node);
      return node.contentId;
    };
    const group = (id: string, zh: string, en: string, parent: string) => {
      nodes.push({ contentId: id, locale, kind: 'group', title: locale === 'en' ? en : zh, primaryParentId: parent, order: order++ });
      return id;
    };
    add({ type: 'home' }, 'index', undefined, true);
    add({ type: 'not-found' }, 'index', undefined, true);
    add({ type: 'guide' }, 'guide');
    add({ type: 'framework' }, 'method');
    const questions = add({ type: 'questions' }, 'index');
    add({ type: 'search' }, 'index', questions);
    const collections = add({ type: 'collections' }, 'index', questions);
    for (const collection of questionCollections) add({ type: 'collection', id: collection.id }, collection.kind === 'candidate-guide' ? 'guide' : 'collection', collections);
    const browse = add({ type: 'browse' }, 'index');
    const capabilities = add({ type: 'capabilities' }, 'index', browse);
    for (const domain of domains) {
      const domainId = add({ type: 'domain', domain: domain.id }, 'concept', capabilities);
      for (const leaf of domain.leaves.filter(item => item.status === 'active')) add({ type: 'leaf', domain: domain.id, leaf: leaf.id }, 'concept', domainId);
    }
    const roles = add({ type: 'roles' }, 'index', browse);
    for (const role of audienceRoles) add({ type: 'role', id: role.id }, 'index', roles);
    const topics = add({ type: 'topics' }, 'index', browse);
    const usedTopics = new Set(records.filter(item => item.locale === locale).flatMap(item => item.topics));
    for (const topic of facetDefinitions.topics.filter(item => usedTopics.has(item.id))) add({ type: 'topic', id: topic.id }, 'index', topics);
    const scenarios = group('scenario-categories', '使用场景', 'Use contexts', browse);
    const usedScenarios = new Set(records.filter(item => item.locale === locale).flatMap(item => item.scenarios));
    for (const scenario of facetDefinitions.scenarios.filter(item => usedScenarios.has(item.id))) add({ type: 'scenario', id: scenario.id }, 'index', scenarios);
    const paths = add({ type: 'scenarios' }, 'path');
    for (const path of crossDomainPaths) add({ type: 'path', id: path.id }, 'path', paths);
    const stages = add({ type: 'capability-model' }, 'stage-reference');
    const roleStages = group('role-stage-guides', '岗位与阶段', 'Role and stage', stages);
    for (const role of audienceRoles) add({ type: 'role-stage-model', role: role.id }, 'stage-reference', roleStages);
    const sharedStages = group('shared-stages', '共用阶段模型', 'Shared stage model', stages);
    for (const stage of stageIds) add({ type: 'capability-model-stage', stage }, 'stage-reference', sharedStages);
    const dimensions = group('stage-dimensions', '评价维度', 'Evidence dimensions', stages);
    for (const dimension of dimensionIds) add({ type: 'capability-model-dimension', dimension }, 'stage-reference', dimensions);
    add({ type: 'capability-model-mapping' }, 'stage-reference', stages);
    for (const question of records.filter(item => item.locale === locale && item.status === 'published')) {
      add({ type: 'question', questionId: question.questionId, title: question.question, capability: question.primaryCapability }, 'question', `capability:${question.primaryCapability}`, true);
    }
  }
  const result = createKnowledgeRegistry({ nodes });
  if (result.ok === false) throw new Error(`Invalid knowledge registry: ${JSON.stringify(result.diagnostics)}`);
  return result.registry;
}
