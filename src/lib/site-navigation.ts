import { boardFor, navLabel, pathFor, type RouteRef } from './routes';
import type { Locale } from './taxonomy';
export function siteNavigationFor(route: RouteRef, locale: Locale, base: string) {
  const active = boardFor(route);
  const entries: { key: string; ref: RouteRef; label: string }[] = [
    {key:'home',ref:{type:'home'},label:navLabel('home',locale)},
    {key:'preparation',ref:{type:'preparation'},label:locale === 'en' ? 'Preparation guide' : '准备指南'},
    {key:'questions',ref:{type:'questions'},label:navLabel('questions',locale)},
  ];
  return entries.map(({ key, ref, label }) => ({ key, label, href: pathFor(ref, locale, base), current: key === active }));
}
