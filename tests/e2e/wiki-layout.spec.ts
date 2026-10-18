import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('interview-compass.target.v1', JSON.stringify({ version: 1, mode: 'all' })));
});

test('custom knowledge page has one active wiki rail, breadcrumbs, and article content', async ({ page }) => {
  await page.goto('questions/');
  const details = page.locator('[data-wiki-disclosure]');
  if ((page.viewportSize()?.width ?? 1280) <= 760) await details.locator('summary').click();
  const rail = page.getByRole('navigation', { name: '知识导航' });
  await expect(rail).toBeVisible();
  await expect(rail.getByRole('link', { name: '面试题库' })).toHaveAttribute('aria-current', 'page');
  await expect(page.getByRole('navigation', { name: '面包屑' })).toBeVisible();
  await expect(page.locator('main#main h1')).toBeVisible();
  await expect(page.getByRole('navigation', { name: '本页目录' })).toHaveCount(0);
  await expect(page.locator('body')).toHaveAttribute('data-route-type', 'questions');
});

test('homepage keeps its task-oriented navigation and does not gain the wiki rail', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('navigation', { name: '知识导航' })).toHaveCount(0);
  if ((page.viewportSize()?.width ?? 1280) <= 760) await page.getByRole('button', { name: '导航' }).click();
  await expect(page.getByRole('navigation', { name: '主导航' }).getByRole('link')).toHaveCount(6);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('wiki outline is omitted when a page has no substantial outline entries', async ({ page }) => {
  await page.goto('search/?q=rollback');
  await expect(page.locator('main#main h1')).toBeVisible();
  await expect(page.getByRole('navigation', { name: '本页目录' })).toHaveCount(0);
});

test('question outlines link only to rendered sections and omit missing comparison analysis', async ({ page }) => {
  await page.goto('questions/prioritization-limited-resources/');
  const outlineDetails = page.locator('[data-wiki-outline]');
  if ((page.viewportSize()?.width ?? 1280) <= 760) await outlineDetails.locator('summary').click();
  const outline = page.getByRole('navigation', { name: '本页目录' });
  await expect(outline).toBeVisible();
  await expect(page.locator('#comparisons-h')).toHaveCount(0);
  await expect(outline.locator('a[href="#comparisons-h"]')).toHaveCount(0);
  const anchors = await outline.locator('a').evaluateAll(links => links.map(link => (link as HTMLAnchorElement).hash.slice(1)));
  for (const id of anchors) {
    const heading = page.locator(`main h2[id="${id}"]`);
    await expect(heading).toHaveCount(1);
    await expect(heading).toBeVisible();
  }
});

test('mobile wiki rail closes on load and Escape restores focus to its disclosure button', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('questions/');
  const details = page.locator('[data-wiki-disclosure]');
  const summary = details.locator('summary');
  await expect(details).not.toHaveAttribute('open', '');
  await summary.click();
  await expect(details).toHaveAttribute('open', '');
  await page.keyboard.press('Escape');
  await expect(details).not.toHaveAttribute('open', '');
  await expect(summary).toBeFocused();
  await expect(summary).toHaveAttribute('aria-expanded', 'false');
});

test('wiki rail remains available as server-rendered links without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}questions/`);
  const details = page.locator('[data-wiki-disclosure]');
  await expect(details).toHaveAttribute('open', '');
  await expect(page.getByRole('navigation', { name: '知识导航' }).getByRole('link', { name: '面试题库' })).toBeVisible();
  await expect(page.locator('#question-list > li').first()).toBeVisible();
  await context.close();
});
