import { expect, test } from './all-questions-fixture';

test('preparation targets are engineering specializations while business expansion stays visible', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('.hero-copy')).toContainText('先看清岗位，再讲清证据');
  await expect(page.locator('.engineering-expansion')).toContainText('产品 sense、运营工作流理解、设计协作');
  await page.locator('[data-profile-trigger]').click();
  await page.locator('[data-edit-target]').click();
  const roles = await page.locator('#profile-role option').evaluateAll(options => options.map(option => (option as HTMLOptionElement).value).filter(Boolean));
  expect(roles).toEqual(['engineering', 'frontend', 'backend', 'mobile', 'ai-engineer', 'data']);
  await expect(page.locator('#profile-role')).toContainText('通用工程');
  await page.keyboard.press('Escape');
  await page.goto('roles/');
  await expect(page.locator('.facet-card')).toHaveCount(6);
});

test('commercial case explains engineering scope and keeps it in the external analysis prompt', async ({ page }) => {
  await page.goto('questions/bulk-b-commercial-02/?profileRole=frontend&profileStage=senior-engineer');
  await expect(page.locator('[data-question-detail-profiles]')).not.toBeVisible();
  await expect(page.locator('[data-engineering-context]')).toContainText('不要求拥有定价');
  await page.locator('[data-generate-analysis]').click();
  await expect(page.locator('#question-ai-prompt')).toHaveValue(/工程师从业务规则/);
  await page.locator('[data-profile-trigger]').click();
  await expect(page.locator('[data-target-summary]')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
});
