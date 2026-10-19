// Caches the human-readable target label so the header trigger can paint the right text on first render.
// The inline script in SiteMasthead.astro mirrors the read path; keep the key and shape in sync.
export const targetLabelStorageKey = 'interview-compass.target-label.v1';

type LabelCache = Record<string, Record<string, string>>;

function read(): LabelCache {
  try {
    const parsed = JSON.parse(localStorage.getItem(targetLabelStorageKey) ?? '{}');
    return typeof parsed === 'object' && parsed !== null ? parsed as LabelCache : {};
  } catch { return {}; }
}

export function readTargetLabel(locale: string, roleId: string, stageId: string): string | undefined {
  return read()[locale]?.[`${roleId}:${stageId}`];
}

export function writeTargetLabel(locale: string, roleId: string, stageId: string, label: string): void {
  try {
    const cache = read();
    const bucket = cache[locale] ?? {};
    if (bucket[`${roleId}:${stageId}`] === label) return;
    bucket[`${roleId}:${stageId}`] = label;
    cache[locale] = bucket;
    localStorage.setItem(targetLabelStorageKey, JSON.stringify(cache));
  } catch { /* The label simply falls back to the default text. */ }
}
