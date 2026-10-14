import { expect, test } from '@playwright/test';

test('question pages preserve the bilingual reading path and Pages subpath', async ({ page }) => {
  await page.goto('questions/prioritization-limited-resources/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('资源只够做两项');
  await expect(page.getByRole('heading', { name: '考察意图' }).first()).toBeVisible();
  await expect(page.getByRole('heading', { name: '相关主题' }).first()).toBeVisible();
  const topicHref = await page.getByRole('link', { name: '规划' }).first().getAttribute('href');
  expect(topicHref).toMatch(/^\/interview-compass\/topics\/planning\/$/);
  await page.getByRole('link', { name: 'EN' }).click();
  await expect(page).toHaveURL(/\/interview-compass\/en\/questions\/prioritization-limited-resources\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('How would you plan next quarter');
});

test('search supports keyboard focus and finds a localized question', async ({ page }) => {
  await page.goto('./');
  await page.keyboard.press('Control+k');
  await expect(page.getByRole('searchbox')).toBeFocused();
  await page.getByRole('searchbox').fill('资源只够做两项');
  await expect(page.locator('.search-results')).toBeVisible();
  await expect(page.locator('.search-results')).toContainText('资源只够做两项');
  await page.keyboard.press('Escape');
  await expect(page.locator('.search-results')).toBeHidden();
});

test('English search stays within the English index', async ({ page }) => {
  await page.goto('en/');
  await page.getByRole('searchbox').fill('capacity');
  await expect(page.locator('.search-results')).toBeVisible();
  await expect(page.locator('.search-results')).toContainText('How would you plan next quarter');
  await expect(page.locator('.search-results a').first()).toHaveAttribute('href', /\/interview-compass\/en\//);
  await expect(page.locator('.search-results')).not.toContainText('资源只够做两项');
});

test('mobile layout keeps the main content within the viewport', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile viewport only');
  await page.goto('./');
  const dimensions = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
  expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.client + 1);
  await expect(page.getByRole('searchbox')).toBeVisible();
});
