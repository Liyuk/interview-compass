import type { StageModel } from './stage-model-data';

const pending = new Map<string, Promise<StageModel>>();

export function loadStageModel(locale: string): Promise<StageModel> {
  const existing = pending.get(locale);
  if (existing) return existing;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const request = fetch(`${base}/data/stage-model/${locale}.json`).then(response => {
    if (!response.ok) throw new Error('Stage model unavailable');
    return response.json() as Promise<StageModel>;
  }).then(model => {
    if (!model || typeof model.roles !== 'object' || !Object.keys(model.roles).length || !Object.values(model.roles).every(role => typeof role.name === 'string' && Array.isArray(role.stages) && role.stages.every(stage => ['id','name','tier','scope','process','verify','boundary'].every(key => typeof stage[key] === 'string') && Array.isArray(stage.professionalEvidence) && stage.anchors && typeof stage.anchors === 'object'))) throw Error('Incompatible stage model');
    return model;
  }).catch(error => {
    pending.delete(locale);
    throw error;
  });
  pending.set(locale, request);
  return request;
}
