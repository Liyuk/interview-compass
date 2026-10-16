import { isAudienceRole } from '../content/role-stages/registry';
import { profileToken, type TargetProfile } from './question-applicability';
export { matchesProfileTokens } from './question-applicability';

export const preferenceStorageKey = 'interview-compass.target.v1';
export const dismissalStorageKey = 'interview-compass.target-dismissed.v1';

export type BrowsePreference =
  | { version: 1; mode: 'all'; lastTarget?: TargetProfile }
  | { version: 1; mode: 'target'; target: TargetProfile };

export interface ResolvedPreference {
  preference: BrowsePreference;
  source: 'link' | 'local' | 'default';
  hasLink: boolean;
  invalidLink: boolean;
}

type ReadStorage = { getItem(key: string): string | null };
type WriteStorage = { setItem(key: string, value: string): void };

function isTarget(value: unknown): value is TargetProfile {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Record<string, unknown>;
  if (typeof candidate.roleId !== 'string' || typeof candidate.stageId !== 'string') return false;
  return isAudienceRole(candidate.roleId) && profileToken({ roleId: candidate.roleId, stageId: candidate.stageId }) !== undefined;
}

export function targetPreference(target: TargetProfile): BrowsePreference {
  if (!isTarget(target)) throw new Error('Invalid role and stage combination');
  return { version: 1, mode: 'target', target: { roleId: target.roleId, stageId: target.stageId } };
}

export function rememberedTarget(preference?: BrowsePreference): TargetProfile | undefined {
  return preference?.mode === 'target' ? preference.target : preference?.lastTarget;
}

export function allPreference(previous?: BrowsePreference): BrowsePreference {
  const target = rememberedTarget(previous);
  return target
    ? { version: 1, mode: 'all', lastTarget: { ...target } }
    : { version: 1, mode: 'all' };
}

export function parsePreference(raw: string | null | undefined): BrowsePreference | undefined {
  if (!raw) return undefined;
  try {
    const value: unknown = JSON.parse(raw);
    if (typeof value !== 'object' || value === null) return undefined;
    const record = value as Record<string, unknown>;
    if (record.version !== 1) return undefined;
    if (record.mode === 'target') return isTarget(record.target) ? targetPreference(record.target) : undefined;
    if (record.mode === 'all') return isTarget(record.lastTarget)
      ? allPreference(targetPreference(record.lastTarget))
      : allPreference();
    return undefined;
  } catch { return undefined; }
}

export function readPreference(storage?: ReadStorage): BrowsePreference | undefined {
  try { return parsePreference(storage?.getItem(preferenceStorageKey)); }
  catch { return undefined; }
}

export function writePreference(storage: WriteStorage | undefined, preference: BrowsePreference): boolean {
  if (!storage) return false;
  try {
    const normalized = parsePreference(JSON.stringify(preference));
    if (!normalized) return false;
    storage.setItem(preferenceStorageKey, JSON.stringify(normalized));
    return true;
  } catch { return false; }
}

// profile* applies to browsing; targetRole/targetStage remains a question's comparison lens.
export function resolvePreference(params: URLSearchParams, stored?: BrowsePreference): ResolvedPreference {
  const hasLink = ['profile', 'profileRole', 'profileStage'].some(key => params.has(key));
  if (!hasLink) return { preference: stored ?? allPreference(), source: stored ? 'local' : 'default', hasLink: false, invalidLink: false };
  const mode = params.get('profile');
  const roleId = params.get('profileRole');
  const stageId = params.get('profileStage');
  if (mode === 'all' && roleId === null && stageId === null) {
    return { preference: allPreference(stored), source: 'link', hasLink: true, invalidLink: false };
  }
  const target = { roleId, stageId };
  if (mode === null && isTarget(target)) {
    return { preference: targetPreference(target), source: 'link', hasLink: true, invalidLink: false };
  }
  return { preference: allPreference(stored), source: 'link', hasLink: true, invalidLink: true };
}

export function withoutLinkPreference(params: URLSearchParams): URLSearchParams {
  const result = new URLSearchParams(params);
  for (const key of ['profile', 'profileRole', 'profileStage']) result.delete(key);
  return result;
}

export function withLinkPreference(params: URLSearchParams, preference: BrowsePreference): URLSearchParams {
  const result = withoutLinkPreference(params);
  if (preference.mode === 'all') result.set('profile', 'all');
  else {
    if (!isTarget(preference.target)) throw new Error('Invalid role and stage combination');
    result.set('profileRole', preference.target.roleId);
    result.set('profileStage', preference.target.stageId);
  }
  return result;
}

export function shouldPromptForTarget(stored: BrowsePreference | undefined, context: ResolvedPreference, dismissed: boolean): boolean {
  return !stored && !context.hasLink && !dismissed;
}

export function pagefindFilters(locale: string, context: ResolvedPreference): Record<string, string> {
  const filters: Record<string, string> = { locale };
  if (context.preference.mode === 'target') {
    const target = context.preference.target;
    const token = profileToken(target);
    if (!token) throw new Error('Invalid role and stage combination');
    filters.profile = token;
  }
  return filters;
}
