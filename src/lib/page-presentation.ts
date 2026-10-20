import { boardFor, type RouteRef } from './routes';
export type PageSection = 'goals' | 'questions' | 'browse' | 'stages' | 'methods' | 'guide' | 'preparation' | null;
export function pagePresentationFor(route: RouteRef): { kind: 'home' | 'discovery' | 'article' | 'section'; section: PageSection } {
  const board = boardFor(route);
  const section = board === 'home' ? null : board;
  switch (route.type) {
    case 'home': return { kind: 'home', section: null };
    case 'questions': case 'search': case 'collections': return { kind: 'discovery', section };
    case 'question': case 'collection': return { kind: 'article', section };
    case 'path': return { kind: 'article', section };
    case 'scenarios': return { kind: 'section', section };
    case 'preparation': case 'guide-capabilities': case 'guide-direction':
    case 'framework': return { kind: 'article', section };
    case 'guide': return { kind: 'article', section };
    case 'capability-model': case 'capability-model-stage': case 'capability-model-dimension': case 'capability-model-mapping': case 'role-stage-model': return { kind: 'section', section };
    case 'not-found': return { kind: 'discovery', section: null };
    default: return { kind: 'section', section };
  }
}
