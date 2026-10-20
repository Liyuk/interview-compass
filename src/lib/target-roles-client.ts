import type { TargetRoleOption } from './target-roles';

let pending: Promise<TargetRoleOption[]> | undefined;

export function loadTargetRoles(): Promise<TargetRoleOption[]> {
  pending ??= (() => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    const locale = document.documentElement.lang === 'en' ? 'en' : 'zh-CN';
    return fetch(`${base}/data/target-roles/${locale}.json`).then(response => {
      if (!response.ok) throw new Error('Target roles unavailable');
      return response.json() as Promise<TargetRoleOption[]>;
    });
  })();
  return pending.catch(error => { pending = undefined; throw error; });
}
