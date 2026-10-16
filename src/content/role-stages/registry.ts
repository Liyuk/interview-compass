export const engineeringStageIds = ['junior-engineer', 'mid-level-engineer', 'senior-engineer', 'staff-engineer', 'engineering-manager', 'manager-of-managers'] as const;
export const tiers = ['entry', 'independent', 'senior', 'expert', 'manager', 'organization'] as const;
export type ResponsibilityTier = typeof tiers[number];
export const roleFamilies = {
  engineering: 'engineering', frontend: 'engineering', backend: 'engineering', mobile: 'engineering', 'ai-engineer': 'engineering',
  data: 'data', product: 'product', operations: 'operations', marketing: 'marketing', design: 'design', pmo: 'pmo', manager: 'manager',
} as const;

export function roleStageIds(roleId: string): string[] {
  if (!Object.hasOwn(roleFamilies, roleId)) throw new Error(`Unknown role: ${roleId}`);
  if (roleFamilies[roleId as keyof typeof roleFamilies] === 'engineering') return [...engineeringStageIds];
  return (roleId === 'manager' ? tiers.slice(4) : tiers).map((tier: ResponsibilityTier) => `${roleId}-${tier}`);
}

export function tierForStage(roleId: string, stageId: string): ResponsibilityTier {
  const ids = roleStageIds(roleId);
  const index = ids.indexOf(stageId);
  if (index < 0) throw new Error(`Stage ${stageId} does not belong to ${roleId}`);
  return tiers[roleId === 'manager' ? index + 4 : index];
}
