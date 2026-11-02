export function legacyEnglishPath(to: string, base: string): string {
  const basePath = base.endsWith('/') ? base.slice(0, -1) : base;
  const pathname = new URL(to, 'https://interview-compass.invalid').pathname;
  const relative = pathname.startsWith(`${basePath}/`) ? pathname.slice(basePath.length + 1) : pathname.replace(/^\//, '');
  return relative.replace(/\/$/, '');
}
