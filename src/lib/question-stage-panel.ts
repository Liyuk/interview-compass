import { withLinkPreference } from './target-preferences';
import { getTargetContext, subscribeTarget } from './target-state';
import { composeStageGuidance, stageGuidancePrompt, type StageQuestion } from './question-stage-text';
import { loadStageModel } from './stage-model-client';
import type { StageModel } from './stage-model-data';
import type { Locale } from './taxonomy';

const root = document.querySelector<HTMLElement>('[data-question-stage]');
if (root) void start(root);

async function start(root: HTMLElement) {
  const locale: Locale = document.documentElement.lang === 'en' ? 'en' : 'zh-CN';
  const en = locale === 'en';
  const data = JSON.parse(root.querySelector('[data-stage-question]')!.textContent!) as StageQuestion & { modelPaths: Record<string, string> };
  let model: StageModel;
  const asyncStatus = root.querySelector<HTMLElement>('[data-async-status]')!;
  const retry = asyncStatus.querySelector<HTMLButtonElement>('[data-async-retry]')!;
  const message = asyncStatus.querySelector('[data-async-message]')!;
  const controls = [...root.querySelectorAll<HTMLSelectElement>('.stage-controls select')];
  asyncStatus.dataset.state = 'loading';
  message.textContent = en ? 'Loading stage model…' : '正在加载阶段模型…';
  retry.hidden = true; retry.disabled = true;
  for (const select of controls) select.disabled = true;
  try {
    model = await loadStageModel(locale);
  } catch {
    asyncStatus.dataset.state = 'error';
    message.textContent = en ? 'Stage model could not load or needs an update. Retry, or follow the static model link below.' : '阶段模型无法载入或需要更新。请重试，或使用下方完整模型链接。';
    retry.hidden = false; retry.disabled = false;
    retry.onclick = () => void start(root);
    return;
  }
  asyncStatus.dataset.state = 'ready';
  retry.onclick = null;
  for (const select of controls) select.disabled = false;
  const role = root.querySelector<HTMLSelectElement>('[data-stage-role]')!;
  const stage = root.querySelector<HTMLSelectElement>('[data-stage-select]')!;
  const detail = root.querySelector<HTMLElement>('[data-stage-detail]')!;
  function guidanceFor(roleId: string, stageId: string) {
    const profile = model.roles[roleId];
    const selected = profile?.stages.find(item => item.id === stageId);
    if (!profile || !selected) throw new Error(`Stage ${stageId} is not available for ${roleId}`);
    return composeStageGuidance(data, locale, {
      roleId,
      stageId,
      stageName: selected.name,
      roleName: profile.name,
      tier: selected.tier,
      focus: '',
      scope: selected.scope,
      process: selected.process,
      verify: selected.verify,
      boundary: selected.boundary,
      professionalEvidence: selected.professionalEvidence,
      anchor: selected.anchors[data.primaryCapability.split('.')[0]] ?? { behavior: '', evidence: '' },
    });
  }
  function list(selector: string, items: string[]) {
    root.querySelector(selector)?.replaceChildren(...items.map(item => {
      const li = document.createElement('li');
      li.textContent = item;
      return li;
    }));
  }
  function chooseRole(stageId = '') {
    const profiles = model.roles[role.value]?.stages ?? [];
    stage.replaceChildren(new Option(en ? 'Choose a stage' : '选择一个阶段', ''), ...profiles.map(item => new Option(item.name, item.id)));
    if (profiles.some(item => item.id === stageId)) stage.value = stageId;
    root.querySelector('[data-stage-compare]')?.replaceChildren(...profiles.map(item => {
      const guidance = guidanceFor(role.value, item.id);
      const row = document.createElement('tr');
      for (const text of [guidance.stageName, guidance.scope, guidance.result]) {
        const cell = document.createElement('td');
        cell.textContent = text;
        row.append(cell);
      }
      return row;
    }));
  }
  function update(writeUrl: boolean) {
    detail.hidden = !stage.value;
    const modelUrl = new URL(`${data.modelPaths[role.value]}${stage.value ? `#${stage.value}` : ''}`, location.origin);
    if (getTargetContext().hasLink) modelUrl.search = withLinkPreference(modelUrl.searchParams, getTargetContext().preference).toString();
    root.querySelector<HTMLAnchorElement>('[data-stage-model]')!.href = modelUrl.href;
    let prompt = '';
    if (stage.value) {
      const guidance = guidanceFor(role.value, stage.value);
      root.querySelector('[data-stage-status]')!.textContent = `${guidance.roleName} · ${guidance.stageName}`;
      for (const field of ['scope', 'process', 'result', 'boundary', 'answerMode', 'attribution', 'scoreNote'] as const) root.querySelector(`[data-stage-field="${field}"]`)!.textContent = guidance[field];
      list('[data-stage-signals]', guidance.signals);
      list('[data-stage-evidence]', [...guidance.evidence.map(item => `${item.text} ${en ? 'Evidence: ' : '观察证据：'}${item.evidence}`), ...guidance.professionalEvidence]);
      list('[data-stage-scores]', guidance.scoreAnchors.map(item => item.text));
      prompt = stageGuidancePrompt(guidance, locale);
    }
    if (writeUrl) {
      const url = new URL(window.location.href);
      if (stage.value) { url.searchParams.set('targetRole', role.value); url.searchParams.set('targetStage', stage.value); }
      else { url.searchParams.delete('targetRole'); url.searchParams.delete('targetStage'); }
      window.history.replaceState(null, '', url);
      const language = document.querySelector<HTMLAnchorElement>('.language-switch a');
      if (language) {
        const target = new URL(language.href);
        for (const key of ['targetRole', 'targetStage']) {
          const value = url.searchParams.get(key);
          if (value) target.searchParams.set(key, value);
          else target.searchParams.delete(key);
        }
        language.href = target.href;
      }
    }
    document.dispatchEvent(new CustomEvent('question-stage-change', { detail: { prompt } }));
    root.dataset.stagePrompt = prompt;
  }
  const params = new URL(window.location.href).searchParams;
  const initialRole = params.get('targetRole');
  if (initialRole && data.roles.includes(initialRole)) role.value = initialRole;
  chooseRole(params.get('targetStage') ?? '');
  update(false);
  subscribeTarget(() => {
    const explicit = new URLSearchParams(location.search);
    if (explicit.has('targetRole') || explicit.has('targetStage')) return;
    const preference = getTargetContext().preference;
    if (preference.mode === 'target' && data.roles.includes(preference.target.roleId)) {
      role.value = preference.target.roleId;
      chooseRole(preference.target.stageId);
      update(false);
    }
  });
  role.addEventListener('change', () => { chooseRole(); update(true); });
  stage.addEventListener('change', () => update(true));
  window.addEventListener('popstate', () => {
    const next = new URL(window.location.href).searchParams;
    const nextRole = next.get('targetRole');
    role.value = nextRole && data.roles.includes(nextRole) ? nextRole : data.roles[0];
    chooseRole(next.get('targetStage') ?? '');
    update(false);
  });
}
