import { expect, test } from '@playwright/test';

test('a preparation target does not hide the handbook from document search', async ({ page }) => {
  await page.goto('search/?q=使用说明&profileRole=frontend&profileStage=senior-engineer');
  const docs = page.getByRole('region', { name: '文档与方法', exact: true });
  await expect(docs.getByRole('link', { name: /使用说明/ }).first()).toBeVisible();
  await docs.locator('a[href*="/handbook/"]').first().click();
  await expect(page).toHaveURL(/\/handbook\//);
});

test('query and independent facets share URLs, back navigation, and locale switching', async ({ page }) => {
  await page.goto('questions/?q=回滚&searchScope=questions&profile=all');
  await expect(page.locator('[data-discovery-results] > li').first()).toBeVisible();
  if (!await page.locator('#advanced-filters > summary').isVisible()) await page.locator('[data-discovery-facets] > summary').click();
  await page.locator('#advanced-filters > summary').click();
  await page.locator('select[name=topic]').selectOption('system-design');
  await expect(page).toHaveURL(/topic=system-design/);
  await expect(page.locator('[data-discovery-results]')).not.toHaveAttribute('aria-busy', 'true');
  const href = page.url();
  await page.getByRole('button', { name: '清除筛选', exact: true }).click();
  await expect(page).not.toHaveURL(/topic=/);
  await page.goBack();
  await expect(page).toHaveURL(href);
  await expect(page.locator('select[name=topic]')).toHaveValue('system-design');
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/questions\/.*topic=system-design.*searchScope=questions/);
});

test('instant search can reach documents while a preparation target is active', async ({ page }) => {
  await page.goto('framework/?profileRole=frontend&profileStage=senior-engineer');
  await page.locator('#site-search').fill('使用说明');
  await expect(page.locator('.search-results .search-result').filter({ hasText: '使用说明' }).first()).toBeVisible();
});

test('a late failed query cannot replace a newer successful response', async ({ page }) => {
  await page.route('**/pagefind/pagefind.js', route => route.fulfill({ contentType: 'text/javascript', body: `export async function search(q, options) {
    if (q === 'slow') { await new Promise(resolve => setTimeout(resolve, 700)); throw new Error('old failure'); }
    return { results: options.filters.kind === 'questions' ? [{ id: 'new', data: async () => ({url:'/interview-compass/questions/h-attribution-team-vs-personal/', meta:{title:'New result'}}) }] : [] };
  }` }));
  await page.goto('search/?q=slow&profile=all');
  await page.locator('#filters [name=q]').fill('new');
  await page.locator('#filters').getByRole('button', { name: '查找', exact: true }).click();
  await expect(page.locator('[data-discovery-results]')).toContainText('New result');
  await page.waitForTimeout(850);
  await expect(page.locator('[data-discovery-results]')).toContainText('New result');
  await expect(page.locator('#discovery-error')).toBeHidden();
});

test('invalid filters and pages are removed instead of leaving a misleading address', async ({ page }) => {
  await page.goto('questions/?topic=does-not-exist&page=NaN&profile=all');
  await expect(page.locator('[data-discovery-results] > li')).toHaveCount(50);
  await expect(page).not.toHaveURL(/topic=|page=/);
});

test('document browsing without keywords works with the search engine unavailable', async ({ page }) => {
  await page.route('**/pagefind/**',route=>route.abort());
  await page.goto('questions/?searchScope=docs&profile=all');
  await expect(page.locator('#document-results').getByRole('link',{name:'使用说明',exact:true})).toBeVisible();
  await expect(page.locator('#discovery-error')).toBeHidden();
  await expect(page.locator('[data-discovery-results] > li')).toHaveCount(0);
});
