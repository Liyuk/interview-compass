import type { RouteRef } from './routes';
export type PageSection = 'goals' | 'questions' | 'browse' | 'stages' | 'methods' | 'guide' | null;
export function pagePresentationFor(route: RouteRef): { kind: 'home' | 'discovery' | 'article' | 'section'; section: PageSection } {
  switch (route.type) {
    case 'home': return { kind: 'home', section: null };
    case 'questions': case 'search': case 'collections': return { kind: 'discovery', section: 'questions' };
    case 'question': case 'collection': return { kind: 'article', section: 'questions' };
    case 'path': return { kind: 'article', section: 'goals' };
    case 'scenarios': return { kind: 'section', section: 'goals' };
    case 'framework': return { kind: 'article', section: 'methods' };
    case 'guide': return { kind: 'article', section: 'guide' };
    case 'capability-model': case 'capability-model-stage': case 'capability-model-dimension': case 'capability-model-mapping': case 'role-stage-model': return { kind: 'section', section: 'stages' };
    case 'not-found': return { kind: 'discovery', section: null };
    default: return { kind: 'section', section: 'browse' };
  }
}
