import { activeNavFor, navLabel, pathFor, type RouteRef } from './routes';
import type { Locale } from './taxonomy';
export function siteNavigationFor(route: RouteRef, locale: Locale, base: string) {
  const nav = activeNavFor(route);
  const active = route.type === 'path' ? 'scenarios' : ['roles', 'topics', 'capabilities'].includes(nav) || route.type === 'scenario' ? 'browse' : nav;
  const entries: { key: string; ref: RouteRef; label: string }[] = [
    { key: 'scenarios', ref: { type: 'scenarios' }, label: navLabel('scenarios', locale) },
    { key: 'questions', ref: { type: 'questions' }, label: navLabel('questions', locale) },
    { key: 'framework', ref: { type: 'framework' }, label: locale === 'en' ? 'Questioning methods' : '提问方法' },
    { key: 'guide', ref: { type: 'guide' }, label: navLabel('guide', locale) },
    { key: 'browse', ref: { type: 'browse' }, label: navLabel('browse', locale) },
    { key: 'capability-model', ref: { type: 'capability-model' }, label: navLabel('capabilityModel', locale) },
  ];
  return entries.map(({ key, ref, label }) => ({ key, label, href: pathFor(ref, locale, base), current: key === active }));
}
