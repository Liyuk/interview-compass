import type { StageModel } from './stage-model-data';

const pending = new Map<string, Promise<StageModel>>();

export function loadStageModel(locale: string): Promise<StageModel> {
  const existing = pending.get(locale);
  if (existing) return existing;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const request = fetch(`${base}/data/stage-model/${locale}.json`).then(response => {
    if (!response.ok) throw new Error('Stage model unavailable');
    return response.json() as Promise<StageModel>;
  });
  pending.set(locale, request);
  return request;
}
