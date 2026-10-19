import { facetKeys } from './discovery/types';
import type { Locale } from './taxonomy';

/** Only accept library destinations in the same deployment and language. */
export function readingReturnPath(value: string, locale: Locale, base: string): string | undefined {
  if (!value.startsWith('/') || value.startsWith('//') || /[\\\u0000-\u001f]/.test(value)) return;
  const url = new URL(value, 'https://reading.invalid');
  const prefix = `${base.replace(/\/$/, '')}/${locale === 'en' ? 'en/' : ''}`;
  if (!url.pathname.startsWith(prefix)) return;
  const path = url.pathname.slice(prefix.length);
  if (!/^(?:|guide\/(?:capabilities\/|direction\/)?|handbook\/|framework\/|questions\/|search\/|browse\/|collections\/(?:[a-z0-9-]+\/)?|(?:roles|topics|scenarios|paths)\/(?:[a-z0-9-]+\/(?:page\/[1-9][0-9]*\/)?)?|capabilities\/(?:[a-z0-9-]+\/(?:[a-z0-9-]+\/)?)?|capability-model\/(?:(?:stages|dimensions|roles)\/[a-z0-9-]+\/|mapping\/)?)$/.test(path)) return;
  const keys = ['q', ...facetKeys, 'searchScope', 'sort', 'page', 'profile', 'profileRole', 'profileStage', 'targetRole', 'targetStage'];
  if ([...url.searchParams.keys()].some((key) => !keys.includes(key))) return;
  return `${url.pathname}${url.search}${url.hash}`;
}
