import type { RouteRef } from '../routes';
export function contentIdForRoute(route: RouteRef): string {
  switch (route.type) {
    case 'question': return `question:${route.questionId}`;
    case 'domain': return `domain:${route.domain}`;
    case 'leaf': return `capability:${route.domain}.${route.leaf}`;
    case 'role': case 'topic': case 'scenario': case 'collection': case 'path': return `${route.type}:${route.id}`;
    case 'role-stage-model': return `role-stage:${route.role}`;
    case 'capability-model-stage': return `stage:${route.stage}`;
    case 'capability-model-dimension': return `dimension:${route.dimension}`;
    default: return route.type;
  }
}
