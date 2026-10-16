import {
  allPreference, dismissalStorageKey, parsePreference, preferenceStorageKey, readPreference,
  resolvePreference, shouldPromptForTarget, withoutLinkPreference, writePreference,
  type BrowsePreference, type ResolvedPreference,
} from './target-preferences';

type Listener = (context: ResolvedPreference, resetPage: boolean) => void;
const browser = typeof window !== 'undefined';
function storage(kind: 'localStorage' | 'sessionStorage'): Storage | undefined {
  try { return browser ? window[kind] : undefined; } catch { return undefined; }
}
let stored = readPreference(storage('localStorage'));
let dismissed = false;
let temporary = false;
try { dismissed = storage('sessionStorage')?.getItem(dismissalStorageKey) === 'true'; } catch { /* Current-page fallback. */ }
const listeners = new Set<Listener>();
function resolve() { return resolvePreference(new URLSearchParams(browser ? window.location.search : ''), stored); }
let context = resolve();
export function getTargetContext(): ResolvedPreference { return context; }
export function isTargetTemporary(): boolean { return temporary; }
export function getStoredPreference(): BrowsePreference | undefined { return stored; }
export function needsTargetPrompt(): boolean { return shouldPromptForTarget(stored, context, dismissed); }
export function subscribeTarget(listener: Listener): () => void {
  listeners.add(listener); listener(context, false);
  return () => { listeners.delete(listener); };
}
function publish(resetPage: boolean) {
  context = resolve();
  for (const listener of listeners) listener(context, resetPage);
}
export function dismissTargetPrompt() {
  dismissed = true;
  try { storage('sessionStorage')?.setItem(dismissalStorageKey, 'true'); } catch { /* No blocking storage requirement. */ }
}
function clearLinkFromAddress() {
  const url = new URL(window.location.href);
  url.search = withoutLinkPreference(url.searchParams).toString();
  url.searchParams.delete('page');
  window.history.replaceState(null, '', url);
}
export function choosePreference(preference: BrowsePreference): boolean {
  stored = preference;
  const saved = writePreference(storage('localStorage'), preference);
  temporary = !saved;
  dismissTargetPrompt();
  clearLinkFromAddress(); publish(true);
  return saved;
}
export function viewAllQuestions(): boolean { return choosePreference(allPreference(context.preference)); }
export function removeLinkTarget() { clearLinkFromAddress(); publish(true); }
export function adoptLinkTarget(): boolean {
  return context.hasLink && !context.invalidLink ? choosePreference(context.preference) : false;
}
export function openTargetSelector() { window.dispatchEvent(new Event('compass-open-target')); }
if (browser) {
  window.addEventListener('popstate', () => publish(false));
  window.addEventListener('storage', event => {
    if (event.key !== null && event.key !== preferenceStorageKey) return;
    stored = event.key === null ? readPreference(storage('localStorage')) : parsePreference(event.newValue);
    temporary = false;
    publish(!context.hasLink);
  });
}
