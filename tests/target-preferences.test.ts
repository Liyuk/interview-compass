import { describe, expect, it } from 'vitest';
import {
  allPreference, targetPreference, rememberedTarget, parsePreference, readPreference, writePreference,
  resolvePreference, withLinkPreference, withoutLinkPreference, shouldPromptForTarget,
  matchesProfileTokens, pagefindFilters, preferenceStorageKey,
} from '../src/lib/target-preferences';

const frontend = { roleId: 'frontend', stageId: 'senior-engineer' };
const data = { roleId: 'data', stageId: 'data-independent' };

describe('target browsing preferences', () => {
  it('accepts valid shared IDs and keeps the last target when switching to all questions', () => {
    const selected = targetPreference(frontend);
    const all = allPreference(selected);
    expect(all.mode).toBe('all');
    expect(rememberedTarget(all)).toEqual(frontend);
    expect(parsePreference(JSON.stringify(all))).toEqual(all);
    expect(parsePreference(JSON.stringify(selected))).toEqual(selected);
  });

  it('rejects corrupt, retired, future-version, and cross-role stored targets', () => {
    for (const raw of [null, '', '{', 'null', '[]', 'true', '{"version":2,"mode":"all"}',
      '{"version":1,"mode":"target","target":{"roleId":"data","stageId":"senior-engineer"}}',
      '{"version":1,"mode":"target","target":{"roleId":"constructor","stageId":"senior-engineer"}}',
      '{"version":1,"mode":"target","target":{"roleId":"frontend","stageId":"retired"}}']) {
      expect(parsePreference(raw)).toBeUndefined();
    }
    expect(() => targetPreference({ roleId: 'manager', stageId: 'junior-engineer' })).toThrow();
    expect(parsePreference('{"version":1,"mode":"all","lastTarget":{"roleId":"gone","stageId":"old"}}')).toEqual(allPreference());
  });

  it('uses a versioned storage key and survives blocked storage', () => {
    const values = new Map<string, string>();
    const storage = { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => { values.set(key, value); } };
    expect(writePreference(storage, targetPreference(data))).toBe(true);
    expect(values.has(preferenceStorageKey)).toBe(true);
    expect(readPreference(storage)).toEqual(targetPreference(data));
    const blocked = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); } };
    expect(readPreference(blocked)).toBeUndefined();
    expect(writePreference(blocked, allPreference())).toBe(false);
    expect(readPreference(undefined)).toBeUndefined();
    expect(writePreference(undefined, allPreference())).toBe(false);
  });

  it('gives an explicit link target precedence without changing the stored preference', () => {
    const stored = targetPreference(frontend);
    const before = JSON.stringify(stored);
    const context = resolvePreference(new URLSearchParams('profileRole=data&profileStage=data-independent&role=backend'), stored);
    expect(context.source).toBe('link');
    expect(context.preference).toEqual(targetPreference(data));
    expect(JSON.stringify(stored)).toBe(before);
    expect(context.invalidLink).toBe(false);
  });

  it('lets a shared all-mode link override a recipient’s personal target', () => {
    const context = resolvePreference(new URLSearchParams('profile=all&q=cache'), targetPreference(frontend));
    expect(context.preference.mode).toBe('all');
    expect(context.source).toBe('link');
    expect(context.hasLink).toBe(true);
    expect(pagefindFilters('en', context)).toEqual({ locale: 'en' });
  });

  it('exposes an invalid link and uses all mode instead of silently applying another target', () => {
    for (const query of ['profileRole=data', 'profileStage=data-entry', 'profileRole=data&profileStage=senior-engineer',
      'profile=nope', 'profile=all&profileRole=frontend&profileStage=senior-engineer']) {
      const context = resolvePreference(new URLSearchParams(query), targetPreference(frontend));
      expect(context.preference.mode).toBe('all');
      expect(context.invalidLink).toBe(true);
      expect(context.source).toBe('link');
      expect(shouldPromptForTarget(undefined, context, false)).toBe(false);
    }
  });

  it('keeps question-stage comparisons independent from the site browsing target', () => {
    const stored = targetPreference(frontend);
    const context = resolvePreference(new URLSearchParams('targetRole=data&targetStage=data-independent'), stored);
    expect(context.preference).toEqual(stored);
    expect(context.source).toBe('local');
    expect(context.hasLink).toBe(false);
  });

  it('shares the effective target or all mode while retaining local filters and not mutating inputs', () => {
    const params = new URLSearchParams('q=缓存&topic=reliability&page=3&profile=all');
    const shared = withLinkPreference(params, targetPreference(frontend));
    expect(shared.get('profile')).toBeNull();
    expect(shared.get('profileRole')).toBe('frontend');
    expect(shared.get('profileStage')).toBe('senior-engineer');
    expect(shared.get('topic')).toBe('reliability');
    expect(shared.get('q')).toBe('缓存');
    expect(shared.get('page')).toBe('3');
    expect(params.get('profile')).toBe('all');
    const all = withLinkPreference(shared, allPreference());
    expect(all.get('profile')).toBe('all');
    expect(all.has('profileRole')).toBe(false);
    expect(all.has('profileStage')).toBe(false);
    expect(withoutLinkPreference(shared).toString()).toBe('q=%E7%BC%93%E5%AD%98&topic=reliability&page=3');
  });

  it('prompts once per session only when there is no stored or link choice', () => {
    const initial = resolvePreference(new URLSearchParams());
    expect(shouldPromptForTarget(undefined, initial, false)).toBe(true);
    expect(shouldPromptForTarget(undefined, initial, true)).toBe(false);
    const explicitAll = allPreference();
    expect(shouldPromptForTarget(explicitAll, resolvePreference(new URLSearchParams(), explicitAll), false)).toBe(false);
    expect(shouldPromptForTarget(undefined, resolvePreference(new URLSearchParams('profile=all')), false)).toBe(false);
  });

  it('matches complete profile tokens and keeps all-mode archival entries readable', () => {
    const tokens = ['frontend:senior-engineer', 'data:data-independent'];
    expect(matchesProfileTokens(tokens, frontend)).toBe(true);
    expect(matchesProfileTokens(tokens.join(' '), data)).toBe(true);
    expect(matchesProfileTokens(tokens, { roleId: 'frontend', stageId: 'junior-engineer' })).toBe(false);
    expect(matchesProfileTokens(tokens, { roleId: 'data', stageId: 'senior-engineer' })).toBe(false);
    expect(matchesProfileTokens(['frontend:senior-engineer-extra'], frontend)).toBe(false);
    expect(matchesProfileTokens([], frontend)).toBe(false);
    expect(matchesProfileTokens([], undefined)).toBe(true);
  });

  it('requests the target token at search time before result slicing', () => {
    const context = resolvePreference(new URLSearchParams(), targetPreference(frontend));
    expect(pagefindFilters('zh-CN', context)).toEqual({ locale: 'zh-CN', profile: 'frontend:senior-engineer' });
    expect(pagefindFilters('en', resolvePreference(new URLSearchParams(), allPreference()))).toEqual({ locale: 'en' });
  });
});
