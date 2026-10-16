const panel = document.querySelector<HTMLElement>('[data-analysis-panel]');
const generate = document.querySelector<HTMLButtonElement>('[data-generate-analysis]');
const textarea = document.querySelector<HTMLTextAreaElement>('#question-ai-prompt');
const copy = document.querySelector<HTMLButtonElement>('[data-copy-analysis]');
const copyStatus = document.querySelector<HTMLElement>('[data-copy-status]');
const en = document.documentElement.lang === 'en';
const basePrompt = textarea?.value ?? '';

function syncStagePrompt() {
  const addition = document.querySelector<HTMLElement>('[data-question-stage]')?.dataset.stagePrompt;
  if (textarea) textarea.value = addition ? `${basePrompt}\n\n${addition}` : basePrompt;
}

document.addEventListener('question-stage-change', syncStagePrompt);
syncStagePrompt();
generate?.addEventListener('click', () => {
  syncStagePrompt();
  if (panel) panel.hidden = false;
  textarea?.focus();
});
copy?.addEventListener('click', async () => {
  if (!textarea || !copyStatus) return;
  try {
    await navigator.clipboard.writeText(textarea.value);
    copyStatus.textContent = en ? 'Copied.' : '已复制';
  } catch {
    textarea.focus();
    textarea.select();
    copyStatus.textContent = en ? 'Clipboard unavailable. The prompt is selected for manual copying.' : '无法访问剪贴板，已选中 Prompt，可手动复制。';
  }
});
