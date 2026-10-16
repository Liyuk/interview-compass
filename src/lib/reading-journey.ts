import type { Locale } from './taxonomy';

/** Only accept library destinations in the same deployment and language. */
export function readingReturnPath(value: string, locale: Locale, base: string): string | undefined {
  if (!value.startsWith('/') || value.startsWith('//') || /[\\\u0000-\u001f]/.test(value)) return;
  const url = new URL(value, 'https://reading.invalid');
  const prefix = `${base.replace(/\/$/, '')}/${locale === 'en' ? 'en/' : ''}`;
  if (!url.pathname.startsWith(prefix)) return;
  const path = url.pathname.slice(prefix.length);
  if (!/^(?:|questions\/|search\/|browse\/|collections\/(?:[a-z0-9-]+\/)?|(?:roles|topics|scenarios|paths)\/(?:[a-z0-9-]+\/)?|capabilities\/(?:[a-z0-9-]+\/(?:[a-z0-9-]+\/)?)?|capability-model\/(?:stages\/[a-z0-9-]+\/)?)$/.test(path)) return;
  const keys = ['q', 'role', 'scope', 'track', 'scenario', 'topic', 'format', 'capability', 'page'];
  if ([...url.searchParams.keys()].some((key) => !keys.includes(key))) return;
  return `${url.pathname}${url.search}${url.hash}`;
}
