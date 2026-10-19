import { expect, test } from '@playwright/test';

test('curated reading retains its authored order, refresh, and translated return', async ({ page }) => {
  await page.goto('collections/general-interview/?profile=all');
  await page.locator('.collection-question-link').nth(1).click();
  const reading = page.getByRole('navigation', { name: '本次阅读', exact: true });
  await expect(reading).toBeVisible();
  await expect(reading.locator('[data-reading-previous]')).toHaveAttribute('href', /a-coding-abstraction-defensive-edge-cases/);
  await expect(reading.locator('[data-reading-next]')).toHaveAttribute('href', /bulk-c-metrics-03/);
  await page.reload();
  await expect(reading.locator('[data-reading-next]')).toHaveAttribute('href', /bulk-c-metrics-03/);
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page.locator('[data-reading-next]')).toHaveAttribute('href', /\/en\/questions\/bulk-c-metrics-03\//);
  await page.locator('[data-session-return]').click();
  await expect(page).toHaveURL(/\/en\/collections\/general-interview\//);
});

test('reading continues beyond the end of a visible results page', async ({ page }) => {
  await page.goto('questions/?page=3&profile=all');
  await expect(page.locator('#page-status')).toContainText('第 3 /');
  const expected = await page.locator('#question-list > li a').first().getAttribute('href');
  await page.goto('questions/?page=2&profile=all');
  await expect(page.locator('#page-status')).toContainText('第 2 /');
  await page.locator('#question-list > li a').last().click();
  await expect(page.locator('[data-reading-next]')).toHaveAttribute('href', expected!);
});

test('a local collection can be reordered, resumed, and edited without jumping away', async ({ page }) => {
  await page.goto('questions/h-attribution-team-vs-personal/?profile=all');
  const panel = page.locator('[data-current-collection]');
  await panel.locator(':scope > summary').click();
  await panel.locator('[data-collection-add]').click();
  await expect(panel.locator('[data-collection-count]')).toHaveText('1 / 200');
  await page.goto('questions/a-coding-abstraction-defensive-edge-cases/?profile=all');
  await panel.locator(':scope > summary').click();
  await panel.locator('[data-collection-add]').click();
  await expect(panel.locator('[data-collection-list] > li')).toHaveCount(2);
  await panel.locator('[data-collection-list] > li').last().getByRole('button', {name:/^上移/}).click();
  await panel.locator('[data-collection-list] > li').last().locator('a').click();
  await expect(page.locator('[data-reading-previous]')).toHaveAttribute('href',/a-coding-abstraction-defensive-edge-cases/);
  await panel.locator(':scope > summary').click();
  await panel.locator('[data-collection-list] > li').last().getByRole('button',{name:/^移除/}).click();
  await expect(page.locator('[data-reading-position]')).toContainText('当前题已不在本次集合中');
  await expect(page).toHaveURL(/h-attribution-team-vs-personal/);
  await expect(page.locator('[data-reading-next]')).toBeHidden();
});

test('ordinary documents continue through their authored directory order', async ({ page }) => {
  await page.goto('handbook/?profile=all');
  await page.getByRole('navigation',{name:'继续阅读',exact:true}).getByRole('link',{name:/下一页.*提问框架/}).click();
  await expect(page).toHaveURL(/\/framework\//);
  await expect(page.getByRole('navigation',{name:'继续阅读',exact:true}).getByRole('link',{name:/上一页.*使用说明/})).toBeVisible();
});

test('keyword search retains the full resolved order across a page boundary', async ({ page }) => {
  await page.goto('search/?q=回滚&searchScope=questions&page=2&profile=all');
  await expect(page.locator('#page-status')).toContainText('第 2 /');
  const expected = await page.locator('[data-discovery-results] > li > a').first().getAttribute('href');
  await page.goto('search/?q=回滚&searchScope=questions&profile=all');
  await expect(page.locator('[data-discovery-results]')).not.toHaveAttribute('aria-busy','true');
  await page.locator('[data-discovery-results] > li > a').last().click();
  await expect(page.locator('[data-reading-next]')).toHaveAttribute('href',expected!);
});

test('all return links retain the original results after moving and translating', async ({ page }) => {
  await page.goto('questions/?page=2&profile=all');
  await expect(page.locator('#page-status')).toContainText('第 2 /');
  await page.locator('#question-list > li a').first().click();
  await page.locator('[data-reading-next]').click();
  const source = '/interview-compass/questions/?page=2&profile=all';
  await expect(page.locator('[data-session-return]')).toHaveAttribute('href', source);
  for (const link of await page.locator('[data-reading-return]').all()) await expect(link).toHaveAttribute('href', source);
  await page.getByRole('link', {name:'EN',exact:true}).click();
  for (const link of await page.locator('[data-reading-return]').all()) await expect(link).toHaveAttribute('href', '/interview-compass/en/questions/?page=2&profile=all');
});
