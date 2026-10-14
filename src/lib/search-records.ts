import type { Locale } from './taxonomy';

export type LocalizedSearchRecord = { locale: Locale; [key: string]: unknown };

export function filterLocalizedResults<T extends LocalizedSearchRecord>(records: readonly T[], locale: Locale): T[] {
  return records.filter((record) => record.locale === locale);
}
