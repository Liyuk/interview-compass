import { expect, test } from '@playwright/test';

const QUESTION = 'questions/prioritization-limited-resources/';

test('home page offers search, three entry choices, all eight domains and the product path', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('searchbox')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('找到问题，也看懂它想了解什么');
  for (const name of ['主题', '能力', '岗位', '场景']) await expect(page.getByRole('link', { name: new RegExp(name) }).first()).toBeVisible();
  for (const letter of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) await expect(page.locator('.band .facet-card', { hasText: `${letter} ·` })).toHaveCount(1);
  await expect(page.getByRole('heading', { name: '产品与全链路思维' })).toBeVisible();
});

test('capability path: home to domain to leaf to question with a canonical breadcrumb', async ({ page }) => {
  await page.goto('./');
  await page.locator('.band .facet-card', { hasText: 'D ·' }).click();
  await expect(page).toHaveURL(/\/interview-compass\/capabilities\/delivery\/$/);
  await page.getByRole('link', { name: '容量与依赖' }).first().click();
  await expect(page).toHaveURL(/\/capabilities\/delivery\/capacity-planning\/$/);
  await page.getByRole('link', { name: /调整计划/ }).first().click();
  const crumbs = page.getByRole('navigation', { name: '面包屑' });
  await expect(crumbs.locator('li')).toHaveText(['首页', '问题库', '交付执行与持续运营', '容量与依赖', /调整计划/]);
  await expect(crumbs.locator('[aria-current="page"]')).toContainText('调整计划');
});

test('question detail explains intent and signals, links its source, and keeps the Pages subpath', async ({ page }) => {
  await page.goto(QUESTION);
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('资源只够做两项');
  await expect(page.getByRole('heading', { name: '考察意图' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '需要解决或厘清的客观问题' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '回答还可能说明什么' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '值得观察的信号' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '值得补充询问的上下文' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '基于上下文的决策' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '方案收益' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '方案成本与风险' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '评估参考' })).toBeVisible();
  for (const level of ['1 · 不通过', '2 · 通过', '3 · 优秀', '4 · 卓越']) await expect(page.getByRole('heading', { name: level, exact: true })).toBeVisible();
  await expect(page.getByText('本站原创')).toBeVisible();
  const href = await page.locator('.metadata-block a', { hasText: '产品' }).first().getAttribute('href');
  expect(href).toMatch(/^\/interview-compass\/roles\/product\/$/);
  await page.getByRole('link', { name: 'EN' }).click();
  await expect(page).toHaveURL(/\/interview-compass\/en\/questions\/prioritization-limited-resources\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('How would you plan next quarter');
});

test('role, scenario and topic pages group the same questions by capability', async ({ page }) => {
  for (const [path, heading] of [['roles/product/', '产品'], ['scenarios/promotion/', '晋升'], ['topics/planning/', '规划']] as const) {
    await page.goto(path);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading);
    await expect(page.locator('.question-list li').first()).toBeVisible();
  }
  await page.goto('en/roles/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Roles');
});

test('question library filters combine, update the shareable URL, and clear', async ({ page }) => {
  await page.goto('questions/');
  const total = await page.locator('#question-list > li:visible').count();
  expect(total).toBeGreaterThan(10);
  await page.locator('select[name="scenario"]').selectOption('promotion');
  await page.locator('select[name="role"]').selectOption('product');
  await expect(page).toHaveURL(/scenario=promotion/);
  await expect(page).toHaveURL(/role=product/);
  const filtered = await page.locator('#question-list > li:visible').count();
  expect(filtered).toBeGreaterThan(0);
  expect(filtered).toBeLessThan(total);
  await expect(page.locator('#result-count')).toContainText(String(filtered));
  await page.reload();
  await expect(page.locator('select[name="role"]')).toHaveValue('product');
  expect(await page.locator('#question-list > li:visible').count()).toBe(filtered);
  await page.getByRole('button', { name: '清除筛选' }).click();
  expect(await page.locator('#question-list > li:visible').count()).toBe(total);
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
  await expect(page.locator('.search-results a').first()).toHaveAttribute('href', /\/interview-compass\/en\//);
  await expect(page.locator('.search-results')).not.toContainText('资源只够做两项');
});

test('skip link and navigation are keyboard reachable', async ({ page }) => {
  await page.goto('./');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: '跳到正文' })).toBeFocused();
  await expect(page.getByRole('navigation', { name: '主导航' }).getByRole('link')).toHaveText(['问题库', '能力地图', '岗位', '面试与晋升']);
});

test('deep links resolve under the Pages base in both languages', async ({ page }) => {
  for (const path of ['capabilities/', 'en/capabilities/delivery/', 'paths/product-end-to-end/', 'en/scenarios/interview/']) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  }
});

test('mobile layout keeps the main content within the viewport', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile viewport only');
  for (const path of ['./', 'questions/', QUESTION, 'capabilities/']) {
    await page.goto(path);
    const dimensions = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
    expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.client + 1);
  }
  await expect(page.getByRole('searchbox')).toBeVisible();
});
