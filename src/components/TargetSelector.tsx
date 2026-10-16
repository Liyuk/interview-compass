import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { allPreference, rememberedTarget, targetPreference, type ResolvedPreference } from '../lib/target-preferences';
import { choosePreference, dismissTargetPrompt, getStoredPreference, getTargetContext, needsTargetPrompt, subscribeTarget } from '../lib/target-state';

export interface TargetRoleOption {
  id: string; name: string;
  stages: { id: string; name: string; summary: string; tier: string }[];
}
interface Props { roles: TargetRoleOption[]; locale: string }
function Chevron() { return <svg className="site-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>; }

export default function TargetSelector({ roles, locale }: Props) {
  const en = locale === 'en';
  const [context, setContext] = useState<ResolvedPreference>();
  const [open, setOpen] = useState(false);
  const [roleId, setRole] = useState('');
  const [stageId, setStage] = useState('');
  const selectedRole = roles.find(role => role.id === roleId);
  const selectedStage = selectedRole?.stages.find(stage => stage.id === stageId);
  const target = context?.preference.mode === 'target' ? context.preference.target : undefined;
  const currentRole = roles.find(role => role.id === target?.roleId);
  const currentStage = currentRole?.stages.find(stage => stage.id === target?.stageId);


  function edit() {
    const remembered = rememberedTarget(getTargetContext().preference) ?? rememberedTarget(getStoredPreference());
    setRole(remembered?.roleId ?? ''); setStage(remembered?.stageId ?? ''); setOpen(true);
  }
  useEffect(() => {
    const stop = subscribeTarget(next => setContext(next));
    if (needsTargetPrompt()) edit();
    window.addEventListener('compass-open-target', edit);
    return () => { stop(); window.removeEventListener('compass-open-target', edit); };
  }, []);

  function close(next: boolean) { setOpen(next); if (!next) dismissTargetPrompt(); }
  function apply() {
    if (!selectedStage) return;
    choosePreference(targetPreference({ roleId, stageId })); setOpen(false);
  }
  return <Dialog.Root open={open} onOpenChange={close}>
    <Dialog.Trigger asChild><button type="button" className="profile-trigger" data-profile-trigger onClick={edit}>
      <span>{target ? `${currentRole?.name} · ${currentStage?.name}` : (en ? 'All questions' : '全部题目')}</span><Chevron />
    </button></Dialog.Trigger>
    <Dialog.Portal><Dialog.Overlay className="profile-overlay" /><Dialog.Content className="profile-dialog">
      <Dialog.Title>{en ? 'Choose your preparation target' : '选择你的准备目标'}</Dialog.Title>
      <Dialog.Description>{en ? 'For engineers: choose your specialization and target responsibility. Questions and search will show only reviewed matches. You can switch or explore everything at any time.' : '面向工程师，选择专业方向和准备承担的责任阶段。题目与搜索将只显示已审核的匹配内容，随时可以切换或查看全部。'}</Dialog.Description>
      <label htmlFor="profile-role">{en ? 'Role type' : '岗位类型'}</label>
      <span className="select-control"><select id="profile-role" value={roleId} onChange={event => { setRole(event.target.value); setStage(''); }}>
        <option value="">{en ? 'Choose a role' : '选择岗位'}</option>
        <optgroup label={en ? 'Engineering roles' : '工程师方向'}>{roles.map(role => <option key={role.id} value={role.id}>{role.name}</option>)}</optgroup>
      </select><Chevron /></span>
      <label htmlFor="profile-stage">{en ? 'Target stage' : '目标阶段'}</label>
      <span className="select-control"><select id="profile-stage" value={stageId} disabled={!selectedRole} onChange={event => setStage(event.target.value)}>
        <option value="">{en ? 'Choose a stage' : '选择阶段'}</option>
        {['professional', 'management'].map(track => {
          const stages = selectedRole?.stages.filter(stage => ['manager', 'organization'].includes(stage.tier) === (track === 'management')) ?? [];
          return stages.length ? <optgroup key={track} label={track === 'professional' ? (en ? 'Professional contribution' : '专业贡献路径') : (en ? 'Management responsibility' : '管理责任路径')}>{stages.map(stage => <option key={stage.id} value={stage.id}>{stage.name}</option>)}</optgroup> : null;
        })}
      </select><Chevron /></span>
      <p className="profile-stage-description" aria-live="polite">{selectedStage?.summary ?? (en ? 'Stages describe responsibility, not years of experience or company title equivalence.' : '阶段表示责任要求，不按年限或公司职级名称换算。')}</p>
      <div className="profile-dialog-actions">
        <button type="button" className="profile-apply" disabled={!selectedStage} onClick={apply}>{en ? 'Browse this target' : '按此目标浏览'}</button>
        <button type="button" className="secondary-button" onClick={() => { choosePreference(allPreference(getStoredPreference())); setOpen(false); }}>{en ? 'Explore all questions' : '先看全部题目'}</button>
      </div>
      <p className="profile-local-note">{en ? 'Saved only in this browser. No account required.' : '仅保存在当前浏览器，无需账号。'}</p>
      <Dialog.Close className="profile-close" aria-label={en ? 'Close target selection' : '关闭目标选择'}>{en ? 'Close' : '关闭'}</Dialog.Close>
    </Dialog.Content></Dialog.Portal>
  </Dialog.Root>;
}
