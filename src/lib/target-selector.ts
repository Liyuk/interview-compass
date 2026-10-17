import type { TargetRoleOption } from './target-roles';
import { allPreference, rememberedTarget, targetPreference } from './target-preferences';
import { choosePreference, dismissTargetPrompt, getStoredPreference, getTargetContext, needsTargetPrompt, subscribeTarget } from './target-state';
import { loadTargetRoles } from './target-roles-client';

const en = document.documentElement.lang === 'en';
const trigger = document.querySelector<HTMLButtonElement>('[data-profile-trigger]');
const label = trigger?.querySelector<HTMLElement>('[data-profile-label]');
const dialog = document.querySelector<HTMLDialogElement>('[data-profile-dialog]');
const roleSelect = dialog?.querySelector<HTMLSelectElement>('#profile-role');
const stageSelect = dialog?.querySelector<HTMLSelectElement>('#profile-stage');
const description = dialog?.querySelector<HTMLElement>('[data-profile-stage-description]');
const applyButton = dialog?.querySelector<HTMLButtonElement>('[data-profile-apply]');

let roles: TargetRoleOption[] = [];

function currentLabel() {
  const preference = getTargetContext().preference;
  const target = preference.mode === 'target' ? preference.target : undefined;
  const role = roles.find(item => item.id === target?.roleId);
  const stage = role?.stages.find(item => item.id === target?.stageId);
  return target && role && stage ? `${role.name} · ${stage.name}` : (en ? 'All questions' : '全部题目');
}

function selectedRole() { return roles.find(role => role.id === roleSelect?.value); }
function selectedStage() { return selectedRole()?.stages.find(stage => stage.id === stageSelect?.value); }

function describe() {
  const stage = selectedStage();
  if (description) description.textContent = stage?.summary ?? (en ? 'Stages describe responsibility, not years of experience or company title equivalence.' : '阶段表示责任要求，不按年限或公司职级名称换算。');
  if (applyButton) applyButton.disabled = !stage;
  if (stageSelect) stageSelect.disabled = !selectedRole();
}

function fillRoles() {
  if (!roleSelect || roleSelect.dataset.ready === 'true') return;
  const group = document.createElement('optgroup');
  group.label = en ? 'Engineering roles' : '工程师方向';
  for (const role of roles) group.append(new Option(role.name, role.id));
  roleSelect.append(group);
  roleSelect.dataset.ready = 'true';
}

function fillStages(selected = '') {
  if (!stageSelect) return;
  const role = selectedRole();
  stageSelect.replaceChildren(new Option(en ? 'Choose a stage' : '选择阶段', ''));
  if (role) {
    for (const track of ['professional', 'management'] as const) {
      const stages = role.stages.filter(stage => ['manager', 'organization'].includes(stage.tier) === (track === 'management'));
      if (!stages.length) continue;
      const group = document.createElement('optgroup');
      group.label = track === 'professional' ? (en ? 'Professional contribution' : '专业贡献路径') : (en ? 'Management responsibility' : '管理责任路径');
      for (const stage of stages) group.append(new Option(stage.name, stage.id));
      stageSelect.append(group);
    }
    if (role.stages.some(stage => stage.id === selected)) stageSelect.value = selected;
  }
  describe();
}

function focusTrigger() {
  window.setTimeout(() => trigger?.focus(), 0);
}

function tabbables(root: HTMLElement) {
  return [...root.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]')]
    .filter(element => element.tabIndex >= 0 && !element.hasAttribute('disabled') && !element.closest('[hidden]'));
}

function containTab(event: KeyboardEvent) {
  if (!dialog || event.key !== 'Tab' || event.altKey || event.ctrlKey || event.metaKey) return;
  const items = tabbables(dialog);
  const first = items[0];
  const last = items[items.length - 1];
  if (!first || !last) return;
  const active = document.activeElement;
  if (event.shiftKey && (active === first || !dialog.contains(active))) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && (active === last || !dialog.contains(active))) {
    event.preventDefault();
    first.focus();
  }
}

async function openEditor() {
  if (!dialog || !roleSelect) return;
  roles = await loadTargetRoles();
  fillRoles();
  const remembered = rememberedTarget(getTargetContext().preference) ?? rememberedTarget(getStoredPreference());
  roleSelect.value = remembered?.roleId ?? '';
  fillStages(remembered?.stageId ?? '');
  if (!dialog.open) dialog.showModal();
  roleSelect.focus();
}

export function initTargetSelector() {
  if (!dialog || !trigger || !roleSelect || !stageSelect) return;
  roleSelect.addEventListener('change', () => fillStages(''));
  stageSelect.addEventListener('change', describe);
  applyButton?.addEventListener('click', () => {
    const stage = selectedStage();
    if (!stage || !roleSelect.value) return;
    choosePreference(targetPreference({ roleId: roleSelect.value, stageId: stage.id }));
    dialog.close();
  });
  dialog.querySelector('[data-profile-all]')?.addEventListener('click', () => {
    choosePreference(allPreference(getStoredPreference()));
    dialog.close();
  });
  dialog.querySelector('[data-profile-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', containTab);
  dialog.addEventListener('cancel', () => { dismissTargetPrompt(); });
  dialog.addEventListener('close', () => {
    dismissTargetPrompt();
    focusTrigger();
  });
  trigger.addEventListener('click', () => { void openEditor(); });
  window.addEventListener('compass-open-target', () => { void openEditor(); });
  subscribeTarget(() => { if (label) label.textContent = currentLabel(); });
  void loadTargetRoles().then(loaded => {
    roles = loaded;
    if (label) label.textContent = currentLabel();
    if (needsTargetPrompt()) void openEditor();
  }).catch(() => { /* The trigger still offers the dialog once the index can load. */ });
}
