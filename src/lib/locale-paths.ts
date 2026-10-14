import type { Locale } from './taxonomy';

export type LocalePairMap = Record<string, Partial<Record<Locale, string>>>;

const normalizeBase = (base: string) => base === '/' ? '' : `/${base.split('/').filter(Boolean).join('/')}`;

export function addBase(route: string, base = ''): string {
  const normalizedRoute = `/${route.split('/').filter(Boolean).join('/')}${route.endsWith('/') && route !== '/' ? '/' : ''}`;
  const normalizedBase = normalizeBase(base);
  if (!normalizedBase) return normalizedRoute;
  if (normalizedRoute === normalizedBase || normalizedRoute.startsWith(`${normalizedBase}/`)) return normalizedRoute;
  return `${normalizedBase}${normalizedRoute === '/' ? '/' : normalizedRoute}`;
}

export function localeSwitchPath(
  currentPath: string,
  from: Locale,
  to: Locale,
  pairs: LocalePairMap,
  base = '',
): string {
  const normalizedBase = normalizeBase(base);
  const route = currentPath.startsWith(`${normalizedBase}/`) ? currentPath.slice(normalizedBase.length) : currentPath;
  for (const pair of Object.values(pairs)) {
    if (pair[from] === route || addBase(pair[from] ?? '', base) === currentPath) {
      const target = pair[to];
      if (target) return addBase(target, base);
    }
  }
  return addBase(to === 'en' ? '/en/' : '/', base);
}
