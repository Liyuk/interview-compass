import { expect, test } from '@playwright/test';

test('method subsections appear below their chapter and navigate to the heading', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('framework/');
  const toc = page.getByRole('navigation', { name: '本页目录', exact: true });
  const subsection = toc.locator('ol ol a[href="#core-step-1"]');
  await expect(subsection).toBeVisible();
  await subsection.click();
  await expect(page).toHaveURL(/#core-step-1$/);
  await expect(page.locator('h3#core-step-1')).toBeVisible();
});

test('the handbook exposes the shared outline and maps a section when changing language', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('handbook/#岗位与阶段目标');
  await expect(page.getByRole('navigation', { name: '本页目录', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/handbook\/#role-and-stage-targets$/);
  await expect(page.locator('h2#role-and-stage-targets')).toBeVisible();
});

test('a chapter selected after load remains selected when switching language', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('framework/');
  await page.getByRole('navigation', { name: '本页目录', exact: true }).locator('a[href="#interviewer-step-2"]').click();
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/framework\/#interviewer-step-2$/);
  await expect(page.locator('h3#interviewer-step-2')).toBeVisible();
});

test('mobile outline is initially closed and its nested chapters remain usable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('framework/');
  const outline = page.locator('[data-wiki-outline]');
  await expect(outline).not.toHaveAttribute('open', '');
  await outline.locator(':scope > summary').click();
  await expect(outline.locator('ol ol a[href="#core-step-1"]')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(outline).not.toHaveAttribute('open', '');
  await expect(outline.locator(':scope > summary')).toBeFocused();
  expect(errors).toEqual([]);
});
