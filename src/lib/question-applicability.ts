import { roleStageIds, tierForStage } from '../content/role-stages/registry.ts';

export interface TargetProfile { roleId: string; stageId: string }
export interface ApplicabilityProfile { roleId: string; stageIds: string[] }
export interface ApplicabilityEntry {
  questionId: string;
  reviewStatus: 'pending' | 'reviewed' | 'all-only';
  fingerprint: string;
  rationale: { zh: string; en: string };
  profiles: ApplicabilityProfile[];
  engineeringLens?: { zh: string; en: string };
}

export function profileToken(target: TargetProfile): string | undefined {
  try {
    return roleStageIds(target.roleId).includes(target.stageId) ? `${target.roleId}:${target.stageId}` : undefined;
  } catch { return undefined; }
}

// Build-time combinations and browser-side tokens share this exact matcher.
export function matchesProfileTokens(tokens: readonly string[] | string, target?: TargetProfile): boolean {
  if (!target) return true;
  const token = profileToken(target);
  if (!token) return false;
  const values = typeof tokens === 'string' ? tokens.split(/\s+/) : tokens;
  return values.includes(token);
}

export function matchesTarget(entry: ApplicabilityEntry | undefined, target: TargetProfile): boolean {
  return entry?.reviewStatus === 'reviewed' && matchesProfileTokens(applicabilityTokens(entry), target);
}

export function applicabilityTokens(entry: ApplicabilityEntry): string[] {
  return entry.reviewStatus === 'reviewed' ? entry.profiles.flatMap(profile => profile.stageIds.map(stage => `${profile.roleId}:${stage}`)) : [];
}

// Suggestions only. Review question intent and actions before accepting any combination.
export function candidateProfiles(question: { roles: readonly string[]; careerTracks: readonly string[]; primaryCapability: string }): ApplicabilityProfile[] {
  return [...new Set(question.roles)].flatMap(roleId => {
    const ids = roleStageIds(roleId).filter(stageId => {
      const tier = tierForStage(roleId, stageId);
      if (tier === 'manager') return question.careerTracks.includes('team-manager');
      if (tier === 'organization') return question.careerTracks.includes('senior-manager');
      if (!question.careerTracks.includes('individual-contributor')) return false;
      if (question.primaryCapability.startsWith('people-organization.')) return tier === 'senior' || tier === 'expert';
      return true;
    });
    return ids.length ? [{ roleId, stageIds: ids }] : [];
  });
}

export function validateApplicability(entries: readonly ApplicabilityEntry[], fingerprints: ReadonlyMap<string, string>, requireComplete = false): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  for (const entry of entries) {
    const fail = (reason: string) => errors.push(`${entry.questionId}: ${reason}`);
    if (seen.has(entry.questionId)) fail('duplicate entry');
    seen.add(entry.questionId);
    if (!fingerprints.has(entry.questionId)) fail('unknown question');
    else if (entry.fingerprint !== fingerprints.get(entry.questionId)) fail('stale content fingerprint; review applicability again');
    if (!['pending', 'reviewed', 'all-only'].includes(entry.reviewStatus)) fail('invalid review status');
    if (requireComplete && entry.reviewStatus === 'pending') fail('pending review');
    if (entry.engineeringLens && (!entry.engineeringLens.zh?.trim() || !entry.engineeringLens.en?.trim())) fail('missing bilingual engineering context');
    if (!entry.rationale?.zh?.trim() || !entry.rationale?.en?.trim()) fail('missing bilingual rationale');
    if (entry.reviewStatus === 'all-only' && entry.profiles.length) fail('all-only cannot have profiles');
    if (entry.reviewStatus === 'reviewed' && !entry.profiles.length) fail('reviewed entry needs profiles');
    const roles = new Set<string>();
    for (const profile of entry.profiles) {
      if (roles.has(profile.roleId)) fail(`duplicate role ${profile.roleId}`);
      roles.add(profile.roleId);
      let ids: string[];
      try { ids = roleStageIds(profile.roleId); } catch { fail(`unknown role ${profile.roleId}`); continue; }
      if (!profile.stageIds.length) fail(`empty stage list for ${profile.roleId}`);
      if (new Set(profile.stageIds).size !== profile.stageIds.length) fail(`duplicate stages for ${profile.roleId}`);
      for (const id of profile.stageIds) if (!ids.includes(id)) fail(`invalid stage ${profile.roleId}/${id}`);
    }
  }
  for (const id of fingerprints.keys()) if (!seen.has(id)) errors.push(`${id}: missing applicability entry`);
  return errors;
}

// Both translations and evidence fields participate, so editing a question cannot silently retain an obsolete review.
export function applicabilityFingerprintInput(pair: readonly Record<string, unknown>[]): string {
  return JSON.stringify([...pair].sort((a, b) => String(a.locale).localeCompare(String(b.locale))).map(record => ({
    locale: record.locale, question: record.question, intent: record.intent, signals: record.signals,
    capability: record.primaryCapability,
    roles: [...(record.roles as string[])].sort(), tracks: [...(record.careerTracks as string[])].sort(),
    scopes: [...(record.responsibilityScopes as string[])].sort(), formats: [...(record.formats as string[])].sort(),
  })));
}
