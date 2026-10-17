import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('interview-compass.target.v1', JSON.stringify({ version: 1, mode: 'all' })));
});

test('Chinese search finds promotion questions through the 升职 synonym', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('searchbox').fill('升职');
  await expect(page.locator('.search-results .search-result').first()).toBeVisible();
  const titles = await page.locator('.search-results .search-result').allTextContents();
  expect(titles.length).toBeGreaterThan(0);
  expect(titles.join('\n')).not.toContain('No matching');
});

test('Chinese search finds promotion questions through 职级评审', async ({ page }) => {
  await page.goto('search/?q=职级评审');
  await expect(page.locator('.search-page-result-title').first()).toBeVisible();
  const count = await page.locator('.search-page-result-title').count();
  expect(count).toBeGreaterThan(0);
  await expect(page.locator('#search-page-status')).toContainText('条匹配结果');
});
