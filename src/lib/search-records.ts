export type SearchResultDestinationOptions = { origin: string; basePath: string };

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
