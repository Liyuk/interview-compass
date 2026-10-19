import { expect, test } from '@playwright/test';

test('an explicit method reference leads to its real backlink', async ({ page }) => {
  await page.goto('questions/h-attribution-team-vs-personal/');
  await page.getByRole('navigation', { name: '关联内容', exact: true }).getByRole('link', { name: '提问框架', exact: true }).click();
  await expect(page).toHaveURL(/\/framework\/$/);
  const sources = page.getByRole('navigation', { name: '引用本文', exact: true });
  await sources.locator('a[href$="/questions/h-attribution-team-vs-personal/"]').click();
  await expect(page).toHaveURL(/\/questions\/h-attribution-team-vs-personal\/$/);
});

test('collection membership uses the curated entry rather than a shared tag', async ({ page }) => {
  await page.goto('questions/a-coding-abstraction-defensive-edge-cases/');
  await page.getByRole('navigation', { name: '收录于题单', exact: true }).getByRole('link', { name: '通用面试', exact: true }).click();
  await expect(page).toHaveURL(/\/collections\/general-interview\/$/);
});
