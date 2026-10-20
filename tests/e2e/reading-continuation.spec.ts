import { test, expect } from '@playwright/test';

test('target-filtered paginated results survive reading and return from either action', async ({page}) => {
  await page.goto('questions/?profileRole=frontend&profileStage=senior-engineer&page=2');
  await expect(page.locator('#page-status')).toContainText('第 2 /');
  const source=page.url();
  await page.locator('#question-list > li:visible a').first().click();
  const returns=page.locator('[data-reading-return]');
  await expect(returns).toHaveCount(2);
  await expect(returns.first()).toHaveAttribute('href', new URL(source).pathname + new URL(source).search);
  await expect(returns.last()).toHaveAttribute('href', new URL(source).pathname + new URL(source).search);
  await returns.last().click();
  await expect(page).toHaveURL(source);
  await expect(page.locator('#page-status')).toContainText('第 2 /');
  await expect(page.locator('[data-profile-trigger]')).toContainText('前端');
});

test('first visit is readable and status popover never displaces the content',async({page})=>{
  for (const width of [390,1440]) {
    await page.setViewportSize({width,height:900});
    await page.goto('questions/');
    await expect(page.getByRole('dialog')).not.toBeVisible();
    await expect(page.locator('#question-list > li').first()).toBeVisible();
    const before=await page.locator('main').boundingBox();
    await page.locator('[data-profile-trigger]').click();
    await expect(page.locator('#target-status-panel')).toBeVisible();
    const after=await page.locator('main').boundingBox();
    expect(after!.y).toBe(before!.y);
    await page.keyboard.press('Escape');
    await expect(page.locator('#target-status-panel')).toBeHidden();
    await expect(page.locator('[data-profile-trigger]')).toBeFocused();
  }
});

test('unavailable preparation targets explain the failure and can retry', async ({page}) => {
  await page.route('**/data/target-roles/*.json', route => route.fulfill({status:503,body:'unavailable'}));
  await page.goto('questions/');
  await page.locator('[data-profile-trigger]').click();
  await page.locator('[data-edit-target]').click();
  await expect(page.locator('[data-profile-error]')).toBeVisible();
  await expect(page.locator('[data-profile-retry]')).toBeVisible();
  await page.unroute('**/data/target-roles/*.json');
  await page.locator('[data-profile-retry]').click();
  await expect(page.locator('[data-profile-error]')).toBeHidden();
  await expect(page.locator('#profile-role')).toBeEnabled();
  await expect(page.locator('#profile-role')).toContainText('通用工程');
});
