import { expect, test } from '@playwright/test';

test('reader can follow the document tree between guide and methods', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('handbook/');
  const tree = page.getByRole('navigation', { name: '文档目录', exact: true });
  await expect(tree).toBeVisible();
  await expect(tree.getByRole('link', { name: '使用说明', exact: true })).toHaveAttribute('aria-current', 'page');
  await tree.getByRole('link', { name: '提问框架', exact: true }).click();
  await expect(page).toHaveURL(/\/framework\/$/);
  await expect(page.locator('main h1')).toBeVisible();
  await expect(page.getByRole('navigation', { name: '文档目录', exact: true }).getByRole('link', { name: '提问框架', exact: true })).toHaveAttribute('aria-current', 'page');
});

test('a directly opened question exposes its permanent knowledge path', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('questions/prioritization-limited-resources/');
  const tree = page.getByRole('navigation', { name: '文档目录', exact: true });
  const parent = tree.locator('a[href="/interview-compass/capabilities/value-direction/prioritization/"]');
  await expect(parent).toBeVisible();
  await parent.click();
  await expect(page).toHaveURL(/\/capabilities\/value-direction\/prioritization\/$/);
  await expect(page.locator('main h1')).toBeVisible();
});

test('mobile bilingual document navigation opens and returns keyboard focus', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const prefix of ['', 'en/']) {
    await page.goto(`${prefix}handbook/`);
    const disclosure = page.locator('[data-wiki-disclosure]');
    await expect(disclosure).not.toHaveAttribute('open', '');
    const trigger = disclosure.locator(':scope > summary');
    await trigger.click();
    const tree = page.getByRole('navigation', { name: prefix ? 'Document navigation' : '文档目录', exact: true });
    await expect(tree).toBeVisible();
    await expect(tree.getByRole('link', { name: prefix ? 'Questioning framework' : '提问框架', exact: true })).toHaveAttribute('href', `/interview-compass/${prefix}framework/`);
    await page.keyboard.press('Escape');
    await expect(disclosure).not.toHaveAttribute('open', '');
    await expect(trigger).toBeFocused();
  }
});
