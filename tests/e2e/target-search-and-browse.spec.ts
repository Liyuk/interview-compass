import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { matchesTarget, type ApplicabilityEntry } from '../../src/lib/question-applicability';
const entries: ApplicabilityEntry[] = JSON.parse(readFileSync(new URL('../../src/content/question-applicability.json', import.meta.url), 'utf8'));
const target = { roleId: 'frontend', stageId: 'senior-engineer' };
const applicable = new Set(entries.filter(entry => matchesTarget(entry, target)).map(entry => entry.questionId));

test('real Pagefind applies target filtering before full-page and instant ranking limits', async ({ page }) => {
  await page.goto('search/?q=回滚&searchScope=questions&profileRole=frontend&profileStage=senior-engineer');
  await expect(page.locator('.search-page-result-title').first()).toBeVisible();
  const results = await page.locator('.search-page-result-title').evaluateAll(links => links.map(link => new URL((link as HTMLAnchorElement).href).pathname));
  expect(results.length).toBeGreaterThan(0);
  expect(results.every(path => applicable.has(path.split('/').filter(Boolean).at(-1)!))).toBe(true);
  const expected = await page.evaluate(async () => {
    const index = await import(location.origin + '/interview-compass/pagefind/pagefind.js');
    const response = await index.search('回滚', { filters: { locale: 'zh-CN', profile: 'frontend:senior-engineer' } });
    return Promise.all(response.results.slice(0, 50).map(async (item: { data(): Promise<{ url: string }> }) => new URL((await item.data()).url, location.origin).pathname));
  });
  expect(results).toEqual(expected);
  await page.locator('#site-search').fill('取消');
  const instant = await page.evaluate(async () => {
    const index = await import(location.origin + '/interview-compass/pagefind/pagefind.js');
    const response = await index.search('取消', { filters: { locale: 'zh-CN', profile: 'frontend:senior-engineer' } });
    return Promise.all(response.results.slice(0, 8).map(async (item: { data(): Promise<{ url: string }> }) => new URL((await item.data()).url, location.origin).pathname));
  });
  await expect(page.locator('.search-results .search-result')).toHaveCount(instant.length);
  expect(await page.locator('.search-results .search-result').evaluateAll(links => links.map(link => new URL((link as HTMLAnchorElement).href).pathname))).toEqual(instant);
  await page.goto('en/search/?q=rollback&searchScope=questions&profileRole=frontend&profileStage=senior-engineer');
  await expect(page.locator('.search-page-result-title').first()).toBeVisible();
  const english = await page.locator('.search-page-result-title').evaluateAll(links => links.map(link => new URL((link as HTMLAnchorElement).href).pathname));
  expect(english.every(path => path.includes('/en/') && applicable.has(path.split('/').filter(Boolean).at(-1)!))).toBe(true);
});

test('curated sets retain selection order, filter counts, and never fill gaps with unrelated questions', async ({ page }) => {
  await page.goto('collections/technical-selected/?profileRole=frontend&profileStage=senior-engineer');
  const rows = page.locator('.collection-question-list > li:visible');
  await expect(rows.first()).toBeVisible();
  const ids = await rows.evaluateAll(items => items.map(item => item.getAttribute('data-question-id')!));
  expect(ids.every(id => applicable.has(id))).toBe(true);
  expect(await rows.locator('[data-curated-number]').allTextContents()).toEqual(ids.map((_id, index) => String(index + 1).padStart(2, '0')));
  await page.goto('collections/?profileRole=frontend&profileStage=senior-engineer');
  const card = page.locator('.collection-card[href*="/technical-selected/"]');
  await expect(card.locator('[data-profile-counts]')).toHaveText(`${ids.length} 道问题`);
});

test('an invalid link is explained without overriding a saved target', async ({ page }) => {
  await page.addInitScript(() => { localStorage.setItem('interview-compass.target.v1', JSON.stringify({ version: 1, mode: 'target', target: { roleId: 'backend', stageId: 'mid-level-engineer' } })); });
  await page.goto('questions/?profileRole=data&profileStage=senior-engineer');
  await expect(page.locator('[data-target-summary]')).toContainText('链接中的目标无效');
  await expect(page.locator('[data-profile-trigger]')).toContainText('全部题目');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await page.locator('[data-profile-trigger]').click();
  await page.getByRole('button', { name: '移除链接目标', exact: true }).click();
  await expect(page.locator('[data-profile-trigger]')).toContainText('后端');
});

test('stage model links select the exact role-stage temporarily and leave model comparison readable', async ({ page }) => {
  await page.goto('capability-model/roles/data/?profile=all#data-independent');
  const stage = page.locator('#data-independent');
  await expect(stage).toHaveAttribute('open', '');
  await stage.getByRole('link', { name: '浏览本阶段匹配题目' }).click();
  await expect(page).toHaveURL(/profileRole=data&profileStage=data-independent/);
  await expect(page.locator('[data-profile-trigger]')).toContainText('数据工程');
  expect(await page.evaluate(() => localStorage.getItem('interview-compass.target.v1'))).toBeNull();
});

test('static no-JavaScript browsing remains available without a blocking chooser', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}questions/`);
  await expect(page.locator('#question-list > li').first()).toBeVisible();
  await expect(page.getByRole('dialog')).not.toBeVisible();
  const wikiNavigation = page.getByRole('navigation', { name: '主导航' });
  await expect(wikiNavigation).toBeVisible();
  await expect(wikiNavigation.getByRole('link', { name: '面试题库' })).toBeVisible();
  await context.close();
});
