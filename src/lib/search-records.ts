import type { Locale } from './taxonomy';

export type LocalizedSearchRecord = { locale: Locale; [key: string]: unknown };

export type SearchResultDestinationOptions = { origin: string; basePath: string };

export function filterLocalizedResults<T extends LocalizedSearchRecord>(records: readonly T[], locale: Locale): T[] {
  return records.filter((record) => record.locale === locale);
}

export function safeSearchResultHref(value: string, options: SearchResultDestinationOptions): string | undefined {
  try {
    const destination = new URL(value, options.origin);
    if (destination.origin !== options.origin) return undefined;

    const basePath = options.basePath === '/' ? '' : options.basePath.replace(/\/$/, '');
    if (basePath && destination.pathname !== basePath && !destination.pathname.startsWith(`${basePath}/`)) return undefined;

    return `${destination.pathname}${destination.search}${destination.hash}`;
  } catch {
    return undefined;
  }
}
