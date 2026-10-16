import { expect, test } from '@playwright/test';

const key = 'interview-compass.target.v1';

test('first visit selects a role and stage and preserves it across pages and locales', async ({ page }) => {
  await page.goto('./');
  const dialog = page.getByRole('dialog', { name: '选择你的准备目标' });
  await expect(dialog).toBeVisible({ timeout: 5000 });
  await expect(dialog.getByRole('button', { name: '按此目标浏览' })).toBeDisabled();
  await dialog.getByLabel('岗位类型', { exact: true }).selectOption('frontend');
  await dialog.getByLabel('目标阶段', { exact: true }).selectOption('senior-engineer');
  await dialog.getByRole('button', { name: '按此目标浏览' }).click();
  await expect(dialog).not.toBeVisible();
  await expect(page.locator('[data-profile-trigger]')).toContainText('前端');
  await page.goto('questions/');
  const rows = page.locator('#question-list > li:visible');
  await expect(rows.first()).toBeVisible();
  expect(await rows.evaluateAll(items => items.every(item => (item.getAttribute('data-question-profiles') ?? '').split(' ').includes('frontend:senior-engineer')))).toBe(true);
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page.locator('[data-profile-trigger]')).toContainText('Frontend');
  expect(await page.evaluate(storageKey => JSON.parse(localStorage.getItem(storageKey)!).target, key)).toEqual({ roleId: 'frontend', stageId: 'senior-engineer' });
});

test('temporary dismissal stays within the session while explicit all mode is persistent', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await page.goto('handbook/');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await page.locator('[data-profile-trigger]').click();
  await page.getByRole('button', { name: '先看全部题目' }).click();
  expect(await page.evaluate(storageKey => JSON.parse(localStorage.getItem(storageKey)!).mode, key)).toBe('all');
});

test('link target overrides local choice without saving it and local filters remain an intersection', async ({ page }) => {
  await page.addInitScript(storageKey => { if (!localStorage.getItem(storageKey)) localStorage.setItem(storageKey, JSON.stringify({ version: 1, mode: 'target', target: { roleId: 'backend', stageId: 'mid-level-engineer' } })); }, key);
  await page.goto('questions/?profileRole=frontend&profileStage=junior-engineer&capability=people-organization.hiring');
  await expect(page.locator('[data-target-summary]')).toContainText('来自链接的目标');
  await expect(page.locator('#no-results')).toBeVisible();
  await expect(page.locator('#no-results')).toContainText('没有交集');
  expect(await page.evaluate(storageKey => JSON.parse(localStorage.getItem(storageKey)!).target.roleId, key)).toBe('backend');
  await page.getByRole('button', { name: '清除页面条件', exact: true }).click();
  await expect(page.locator('#question-list > li:visible').first()).toBeVisible();
  await expect(page).toHaveURL(/profileRole=frontend/);
  await page.getByRole('button', { name: '移除链接目标', exact: true }).click();
  await expect(page.locator('[data-profile-trigger]')).toContainText('后端');
  await expect(page).not.toHaveURL(/profileRole/);
});

test('target changes reset pagination, role changes clear incompatible stages, and all mode remembers the previous target', async ({ page }) => {
  await page.goto('questions/?profileRole=frontend&profileStage=senior-engineer&page=2');
  await expect(page.locator('#page-status')).toContainText('第 2 /');
  await page.locator('[data-profile-trigger]').click();
  const dialog = page.getByRole('dialog');
  await dialog.getByLabel('岗位类型', { exact: true }).selectOption('data');
  await expect(dialog.getByLabel('目标阶段', { exact: true })).toHaveValue('');
  await expect(dialog.getByRole('button', { name: '按此目标浏览' })).toBeDisabled();
  await dialog.getByLabel('目标阶段', { exact: true }).selectOption('data-independent');
  await dialog.getByRole('button', { name: '按此目标浏览' }).click();
  await expect(page.locator('#page-status')).toContainText('第 1 /');
  await expect(page).not.toHaveURL(/page=2|profileRole/);
  await page.getByRole('button', { name: '查看全部题目', exact: true }).first().click();
  await expect(page.locator('[data-profile-trigger]')).toContainText('全部题目');
  await page.locator('[data-profile-trigger]').click();
  await expect(dialog.getByLabel('岗位类型', { exact: true })).toHaveValue('data');
  await expect(dialog.getByLabel('目标阶段', { exact: true })).toHaveValue('data-independent');
});

test('sharing includes the effective target and page filters while adopting a link is explicit', async ({ page }) => {
  await page.goto('questions/?profileRole=frontend&profileStage=senior-engineer&topic=reliability');
  await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async (value: string) => { document.body.dataset.copiedUrl = value; } } }));
  await page.getByRole('button', { name: '复制筛选链接' }).click();
  const copied = new URL((await page.locator('body').getAttribute('data-copied-url'))!);
  expect(copied.searchParams.get('profileRole')).toBe('frontend');
  expect(copied.searchParams.get('profileStage')).toBe('senior-engineer');
  expect(copied.searchParams.get('topic')).toBe('reliability');
  expect(await page.evaluate(storageKey => localStorage.getItem(storageKey), key)).toBeNull();
  await page.getByRole('button', { name: '设为我的默认', exact: true }).click();
  expect(await page.evaluate(storageKey => JSON.parse(localStorage.getItem(storageKey)!).target.roleId, key)).toBe('frontend');
  await expect(page).not.toHaveURL(/profileRole/);
  await page.getByRole('button', { name: '查看全部题目', exact: true }).first().click();
  await page.getByRole('button', { name: '复制筛选链接' }).click();
  expect(new URL((await page.locator('body').getAttribute('data-copied-url'))!).searchParams.get('profile')).toBe('all');
});

test('capability counts agree with the target library and previews filter before their limit', async ({ page }) => {
  await page.goto('questions/?profileRole=frontend&profileStage=junior-engineer');
  await expect(page.locator('#question-list > li:visible').first()).toBeVisible();
  const expected = await page.locator('#question-list > li').evaluateAll(rows => {
    const counts: Record<string, number> = {};
    for (const row of rows) if ((row.getAttribute('data-question-profiles') ?? '').split(' ').includes('frontend:junior-engineer')) {
      const domain = row.getAttribute('data-capability')!.split('.')[0]; counts[domain] = (counts[domain] ?? 0) + 1;
    }
    return counts;
  });
  await page.goto('capabilities/?profileRole=frontend&profileStage=junior-engineer');
  for (const [domain, count] of Object.entries(expected)) {
    const block = page.locator('.domain-block').filter({ has: page.locator(`h3 a[href*="/capabilities/${domain}/"]`) });
    await expect(block.locator('h3 [data-profile-counts]')).toHaveText(`${count} 道问题`);
  }
  await page.goto('capabilities/professional/?profileRole=frontend&profileStage=junior-engineer');
  for (const list of await page.locator('[data-target-list]').all()) {
    const rows = list.locator('li:visible');
    expect(await rows.count()).toBeLessThanOrEqual(3);
    expect(await rows.evaluateAll(items => items.every(item => (item.getAttribute('data-question-profiles') ?? '').split(' ').includes('frontend:junior-engineer')))).toBe(true);
  }
});

test('direct questions stay readable outside the target and comparison lenses do not change the browsing target', async ({ page }) => {
  await page.goto('questions/f-hiring-headcount-trade-offs/?profileRole=frontend&profileStage=junior-engineer');
  await expect(page.locator('[data-question-detail-profiles]')).toBeVisible();
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('[data-profile-trigger]')).toContainText('初级');
  await page.locator('[data-stage-select]').selectOption('staff-engineer');
  await expect(page.locator('[data-profile-trigger]')).toContainText('初级');
  await expect(page).toHaveURL(/targetStage=staff-engineer/);
  await page.locator('[data-generate-analysis]').click();
  await expect(page.locator('#question-ai-prompt')).toHaveValue(/资深工程师/);
});

test('blocked browser storage still allows a current-page choice with an honest persistence notice', async ({ page }) => {
  await page.addInitScript(() => { for (const storage of ['localStorage', 'sessionStorage']) Object.defineProperty(window, storage, { configurable: true, get() { throw new Error('storage blocked'); } }); });
  await page.goto('questions/');
  const dialog = page.getByRole('dialog');
  await dialog.getByLabel('岗位类型', { exact: true }).selectOption('backend');
  await dialog.getByLabel('目标阶段', { exact: true }).selectOption('mid-level-engineer');
  await dialog.getByRole('button', { name: '按此目标浏览' }).click();
  await expect(page.locator('[data-profile-trigger]')).toContainText('后端');
  await expect(page.locator('[data-target-summary]')).toContainText('仅在当前页有效');
  expect(await page.locator('#question-list > li:visible').evaluateAll(rows => rows.every(row => (row.getAttribute('data-question-profiles') ?? '').split(' ').includes('backend:mid-level-engineer')))).toBe(true);
});

test('target selection stays keyboard-contained and the header remains usable at narrow widths', async ({ page }) => {
  await page.goto('./');
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  for (let index = 0; index < 9; index++) { await page.keyboard.press('Tab'); expect(await dialog.evaluate(node => node.contains(document.activeElement))).toBe(true); }
  await page.keyboard.press('Escape');
  await expect(page.locator('[data-profile-trigger]')).toBeFocused();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
});

test('a target change in another tab updates the current tab', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('button', { name: '先看全部题目' }).click();
  const second = await page.context().newPage();
  await second.goto('questions/');
  await second.locator('[data-profile-trigger]').click();
  const dialog = second.getByRole('dialog');
  await dialog.getByLabel('岗位类型', { exact: true }).selectOption('backend');
  await dialog.getByLabel('目标阶段', { exact: true }).selectOption('mid-level-engineer');
  await dialog.getByRole('button', { name: '按此目标浏览' }).click();
  await expect(page.locator('[data-profile-trigger]')).toContainText('后端');
  await second.close();
});

test('an out-of-range shared library page is corrected before copying its link', async ({ page }) => {
  await page.goto('questions/?profileRole=frontend&profileStage=senior-engineer&page=999999');
  await expect(page.locator('#question-list > li:visible').first()).toBeVisible();
  const status = await page.locator('#page-status').textContent();
  const lastPage = Number(status?.match(/第 (\d+) \/ (\d+) 页/)?.[2]);
  expect(lastPage).toBeGreaterThan(1);
  await expect(page).toHaveURL(new RegExp(`page=${lastPage}(?:&|$)`));
});
