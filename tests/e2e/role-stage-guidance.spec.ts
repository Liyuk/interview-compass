import { expect, test } from '@playwright/test';

test('role models distinguish product IC responsibility and leadership', async ({ page }) => {
  await page.goto('capability-model/');
  await page.locator('.role-model-links').getByRole('link', { name: '产品 查看阶段' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('产品 · 阶段能力');
  await page.locator('#product-independent > summary').click();
  await expect(page.locator('#product-independent')).toContainText('专业贡献路径');
  await expect(page.locator('#product-independent')).toContainText('研究、产品模型与实验');
  await expect(page.locator('#product-manager')).not.toHaveAttribute('open');
  await page.locator('.stage-jump').getByRole('link', { name: '产品团队管理者', exact: true }).click();
  await expect(page.locator('#product-manager')).toHaveAttribute('open', '');
  await expect(page.locator('#product-independent')).not.toHaveAttribute('open');
  await expect(page.locator('#product-manager')).toContainText('招聘、绩效');
});

test('one question changes evidence by stage and carries the selection into the external AI prompt', async ({ page }) => {
  await page.goto('questions/a-ai-engineering-agent-duplicate-side-effect/');
  await page.locator('[data-stage-role]').selectOption('ai-engineer');
  await page.locator('[data-stage-select]').selectOption('junior-engineer');
  await expect(page.locator('[data-stage-field="boundary"]')).toContainText('不要求招聘');
  const first = await page.locator('[data-stage-field="result"]').textContent();
  await page.locator('[data-stage-select]').selectOption('senior-engineer');
  expect(await page.locator('[data-stage-field="result"]').textContent()).not.toBe(first);
  await page.getByRole('button', { name: '生成 AI 分析 Prompt' }).click();
  await expect(page.getByLabel('AI 分析 Prompt')).toHaveValue(/目标岗位与责任阶段/);
  await expect(page.getByLabel('AI 分析 Prompt')).toHaveValue(/AI 工程 · 高级工程师/);
  await expect(page.getByLabel('AI 分析 Prompt')).toHaveValue(/不能证明已经取得行业领先结果/);
  await page.reload();
  await expect(page.locator('[data-stage-select]')).toHaveValue('senior-engineer');
  await page.locator('.language-switch a').click();
  await expect(page.locator('[data-stage-select]')).toHaveValue('senior-engineer');
  await expect(page.locator('[data-stage-field="scope"]')).toContainText('complex');
  await page.getByRole('button', { name: 'Generate AI analysis prompt' }).click();
  await expect(page.getByLabel('AI analysis prompt')).toHaveValue(/AI engineering · Senior Engineer/);
  const width = await page.evaluate(() => ({ body: document.documentElement.scrollWidth, viewport: innerWidth }));
  expect(width.body).toBeLessThanOrEqual(width.viewport);
});
