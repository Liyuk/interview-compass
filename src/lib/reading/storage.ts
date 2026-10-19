export interface ReadingStorage { get(key: string): string | null; set(key: string, value: string): void; scope?: 'device' | 'tab' | 'page' }
export function browserReadingStorage(): ReadingStorage {
  return { scope: 'device', get: key => (key.endsWith('collection.v1') ? localStorage : sessionStorage).getItem(key), set: (key, value) => (key.endsWith('collection.v1') ? localStorage : sessionStorage).setItem(key, value) };
}
