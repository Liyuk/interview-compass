import { audienceRoles, pick, type Locale } from './taxonomy';
import { getRoleStages } from './role-stage-model';
import { pathFor } from './routes';

export interface TargetRoleOption {
  id: string;
  name: string;
  path: string;
  stages: { id: string; name: string; summary: string; tier: string }[];
}

export function buildTargetRoles(locale: Locale, base = import.meta.env.BASE_URL): TargetRoleOption[] {
  return audienceRoles.map(role => ({
    id: role.id,
    name: pick(role.name, locale),
    path: pathFor({ type: 'role-stage-model', role: role.id }, locale, base),
    stages: getRoleStages(role.id, locale).map(({ id, name, summary, tier }) => ({ id, name, summary, tier })),
  }));
}
