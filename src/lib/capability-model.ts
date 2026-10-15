import enContent from '../content/capability-model/en.json';
import zhContent from '../content/capability-model/zh-CN.json';
import { hasTaxonomyId, type Locale } from './taxonomy';

export const dimensionIds = [
  'business-results',
  'domain-expertise',
  'team-influence',
  'human-competitive-advantage',
] as const;

export type CapabilityDimensionId = (typeof dimensionIds)[number];

export const stageIds = [
  'junior-engineer',
  'mid-level-engineer',
  'senior-engineer',
  'staff-engineer',
  'engineering-manager',
  'manager-of-managers',
] as const;

export type StageId = (typeof stageIds)[number];
export type CapabilityEmphasis = 'foundational' | 'differentiating' | 'contextual';

export interface CapabilityReference {
  id: string;
  emphasis: CapabilityEmphasis;
}

export interface CapabilityStandard {
  id: string;
  text: string;
  evidence?: string;
  capabilities: CapabilityReference[];
}

export interface StageProfile {
  id: StageId;
  track: 'ic' | 'engineering-management' | 'manager-of-managers';
  nextStageIds: StageId[];
  name: string;
  summary: string;
  dimensions: Record<CapabilityDimensionId, CapabilityStandard[]>;
}

interface ModelContent {
  dimensionNames: Record<CapabilityDimensionId, string>;
  stages: StageProfile[];
}

export interface DimensionProgression {
  id: CapabilityDimensionId;
  name: string;
  stages: Array<{ stage: StageProfile; standards: CapabilityStandard[] }>;
}

const content: Record<Locale, ModelContent> = {
  'zh-CN': zhContent as ModelContent,
  en: enContent as ModelContent,
};

const expectedTracks: Record<StageId, StageProfile['track']> = {
  'junior-engineer': 'ic',
  'mid-level-engineer': 'ic',
  'senior-engineer': 'ic',
  'staff-engineer': 'ic',
  'engineering-manager': 'engineering-management',
  'manager-of-managers': 'manager-of-managers',
};

const expectedChineseNames: Record<StageId, string> = {
  'junior-engineer': '初级工程师',
  'mid-level-engineer': '中级工程师',
  'senior-engineer': '高级工程师',
  'staff-engineer': '资深工程师',
  'engineering-manager': '工程管理者',
  'manager-of-managers': '管理管理者',
};

const hasString = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0;

const structureOf = (model: ModelContent) => model.stages.map((stage) => ({
  id: stage.id,
  track: stage.track,
  nextStageIds: stage.nextStageIds,
  dimensions: Object.fromEntries(dimensionIds.map((dimensionId) => [
    dimensionId,
    stage.dimensions[dimensionId]?.map((standard) => ({
      id: standard.id,
      capabilities: standard.capabilities,
    })),
  ])),
}));

export function validateCapabilityModel(): string[] {
  const errors: string[] = [];
  const expectedIds = [...stageIds];

  for (const locale of ['zh-CN', 'en'] as const) {
    const model = content[locale];
    const localeLabel = locale === 'en' ? 'English' : 'Chinese';
    const ids = model.stages.map((stage) => stage.id);
    if (new Set(ids).size !== ids.length) errors.push(`${localeLabel}: duplicate stage IDs`);
    if (expectedIds.some((id) => !ids.includes(id)) || ids.some((id) => !expectedIds.includes(id as StageId))) {
      errors.push(`${localeLabel}: stage IDs do not match the six supported profiles`);
    }

    for (const dimensionId of dimensionIds) {
      if (!hasString(model.dimensionNames?.[dimensionId])) errors.push(`${localeLabel}: missing dimension name ${dimensionId}`);
    }

    for (const stage of model.stages) {
      if (!hasString(stage.name)) errors.push(`${localeLabel}: ${stage.id} is missing a name`);
      if (locale === 'zh-CN' && stage.name !== expectedChineseNames[stage.id]) errors.push(`Chinese: ${stage.id} must use the user-approved stage label`);
      if (!hasString(stage.summary)) errors.push(`${localeLabel}: ${stage.id} is missing a summary`);
      if (stage.track !== expectedTracks[stage.id]) errors.push(`${localeLabel}: ${stage.id} has an invalid track`);
      if (!Array.isArray(stage.nextStageIds)) errors.push(`${localeLabel}: ${stage.id} is missing nextStageIds`);
      else for (const nextId of stage.nextStageIds) {
        if (!expectedIds.includes(nextId)) errors.push(`${localeLabel}: ${stage.id} points to unknown stage ${nextId}`);
        if (nextId === stage.id) errors.push(`${localeLabel}: ${stage.id} points to itself`);
      }

      const dimensionKeys = Object.keys(stage.dimensions ?? {}).sort();
      if (dimensionKeys.join('|') !== [...dimensionIds].sort().join('|')) {
        errors.push(`${localeLabel}: ${stage.id} must define exactly four dimensions`);
      }

      for (const dimensionId of dimensionIds) {
        const standards = stage.dimensions?.[dimensionId];
        if (!Array.isArray(standards) || standards.length < 3 || standards.length > 5) {
          errors.push(`${localeLabel}: ${stage.id}/${dimensionId} must contain 3–5 standards`);
          continue;
        }
        const standardIds = standards.map((standard) => standard.id);
        if (new Set(standardIds).size !== standardIds.length) errors.push(`${localeLabel}: duplicate standards in ${stage.id}/${dimensionId}`);
        for (const standard of standards) {
          if (!hasString(standard.text)) errors.push(`${localeLabel}: ${stage.id}/${dimensionId}/${standard.id} is missing text`);
          if (standard.evidence !== undefined && !hasString(standard.evidence)) errors.push(`${localeLabel}: ${stage.id}/${dimensionId}/${standard.id} has empty evidence`);
          if (!Array.isArray(standard.capabilities) || standard.capabilities.length === 0) {
            errors.push(`${localeLabel}: ${stage.id}/${dimensionId}/${standard.id} needs a capability reference`);
          } else for (const reference of standard.capabilities) {
            if (!hasTaxonomyId('capabilities', reference.id)) errors.push(`${localeLabel}: ${stage.id}/${standard.id} references unknown capability ${reference.id}`);
            if (!['foundational', 'differentiating', 'contextual'].includes(reference.emphasis)) errors.push(`${localeLabel}: ${stage.id}/${standard.id} has invalid emphasis ${reference.emphasis}`);
          }
        }
      }
    }
  }

  const chinese = JSON.stringify(structureOf(content['zh-CN']));
  const english = JSON.stringify(structureOf(content.en));
  if (chinese !== english) errors.push('Chinese and English model structures, tracks, stage links, or capability references differ');

  const byId = new Map(content['zh-CN'].stages.map((stage) => [stage.id, stage]));
  const requiredEdges: Array<[StageId, StageId]> = [
    ['junior-engineer', 'mid-level-engineer'],
    ['mid-level-engineer', 'senior-engineer'],
    ['senior-engineer', 'staff-engineer'],
    ['senior-engineer', 'engineering-manager'],
    ['engineering-manager', 'manager-of-managers'],
  ];
  for (const [from, to] of requiredEdges) {
    if (!byId.get(from)?.nextStageIds.includes(to)) errors.push(`Missing career path edge ${from} → ${to}`);
  }
  if (byId.get('staff-engineer')?.nextStageIds.includes('engineering-manager')) {
    errors.push('Management must branch from senior contribution, not be the next step after staff engineer');
  }

  return errors;
}

export function getStageProfile(id: StageId, locale: Locale): StageProfile {
  const profile = content[locale].stages.find((stage) => stage.id === id);
  if (!profile) throw new Error(`Unknown capability model stage: ${id}`);
  return profile;
}

export function getDimensionProgression(id: CapabilityDimensionId, locale: Locale): DimensionProgression {
  const label = content[locale].dimensionNames[id];
  if (!label) throw new Error(`Unknown capability model dimension: ${id}`);
  return {
    id,
    name: label,
    stages: content[locale].stages.flatMap((stage) => {
      const standards = stage.dimensions[id];
      return standards ? [{ stage, standards }] : [];
    }),
  };
}
