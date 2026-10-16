import { expect, test } from './all-questions-fixture';

test('question page generates the platform analysis prompt without collecting an answer', async ({ page }) => {
  await page.goto('questions/a-coding-abstraction-defensive-edge-cases/');
  await expect(page.locator('#question-analysis-prompt-panel')).toBeHidden();
  await expect(page.getByRole('button', { name: '生成 AI 分析 Prompt' })).toBeVisible();

  await page.getByRole('button', { name: '生成 AI 分析 Prompt' }).click();
  const prompt = page.getByLabel('AI 分析 Prompt');
  await expect(prompt).toBeVisible();
  await expect(prompt).toHaveValue(/考察意图/);
  await expect(prompt).toHaveValue(/观察信号/);
  await expect(prompt).toHaveValue(/1 · 不通过/);
  await expect(prompt).toHaveValue(/4 · 卓越/);
  await expect(prompt).toHaveValue(/不要编写示范答案/);
  await expect(prompt).toHaveValue(/回答尚未提供/);
  await expect(page.getByLabel('用自己的话自由作答')).toHaveCount(0);
  expect(await page.evaluate(() => Object.keys(localStorage).filter((key) => key.includes('practice')))).toEqual([]);
});

test('generated prompt can be copied and external submission stays under user control', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  const outbound: string[] = [];
  page.on('request', (request) => {
    if (!request.url().includes('127.0.0.1')) outbound.push(request.url());
  });
  await page.goto('questions/a-ai-engineering-agent-duplicate-side-effect/');
  await page.getByRole('button', { name: '生成 AI 分析 Prompt' }).click();
  const prompt = page.getByLabel('AI 分析 Prompt');
  await expect(prompt).toBeVisible();
  await page.getByRole('button', { name: '复制 Prompt' }).click();
  await expect(page.getByRole('status')).toContainText('已复制');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain('分析复核状态');
  expect(outbound).toEqual([]);
});

test('prompt generator works in English and unreviewed questions stay clearly labeled', async ({ page }) => {
  await page.goto('en/questions/a-coding-abstraction-defensive-edge-cases/');
  await page.getByRole('button', { name: 'Generate AI analysis prompt' }).click();
  const prompt = page.getByLabel('AI analysis prompt');
  await expect(prompt).toBeVisible();
  await expect(prompt).toHaveValue(/Assessment intent/);
  await expect(prompt).toHaveValue(/Shared reading guide/);
  await expect(prompt).toHaveValue(/Do not write a sample answer/);
  await expect(prompt).toHaveValue(/If the response is not provided/);
  await expect(page.getByRole('button', { name: 'Copy prompt' })).toBeVisible();
});

test('the former practice page is removed in both languages', async ({ page }) => {
  expect((await page.goto('practice/'))?.status()).toBe(404);
  expect((await page.goto('en/practice/'))?.status()).toBe(404);
});
