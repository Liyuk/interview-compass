import { expect, test } from '@playwright/test';
declare global { interface Window { compassLayoutShift: number } }

test('a failed stage model offers recovery and actually retries the request', async ({ page }) => {
  await page.route('**/data/stage-model/*.json', route => route.fulfill({status:503,body:'unavailable'}));
  await page.goto('questions/h-attribution-team-vs-personal/?profile=all');
  const panel = page.locator('[data-question-stage]');
  await expect(panel.getByRole('button',{name:'重试阶段模型',exact:true})).toBeVisible();
  await expect(panel.locator('[data-stage-role]')).toBeDisabled();
  await page.unroute('**/data/stage-model/*.json');
  await panel.getByRole('button',{name:'重试阶段模型',exact:true}).click();
  await expect(panel.locator('[data-stage-role]')).toBeEnabled();
  await panel.locator('[data-stage-select]').selectOption('senior-engineer');
  await expect(panel.locator('[data-stage-status]')).toContainText('高级工程师');
});

test('the question catalog retains a labelled static fallback and retries after a 503', async ({ page }) => {
  await page.route('**/data/questions/*.json', route => route.fulfill({status:503,body:'unavailable'}));
  await page.goto('questions/?topic=system-design&profile=all');
  await expect(page.locator('#discovery-error')).toContainText('筛选尚未应用');
  await expect(page.locator('#question-list > li')).toHaveCount(50);
  await expect(page.locator('select[name=topic]')).toBeDisabled();
  await page.unroute('**/data/questions/*.json');
  await page.locator('[data-discovery-retry]').click();
  await expect(page.locator('#discovery-error')).toBeHidden();
  await expect(page.locator('select[name=topic]')).toBeEnabled();
  await expect(page.locator('#question-list > li')).toHaveCount(50);
});

test('a failed search module can be loaded again through Retry', async ({ page }) => {
  await page.route('**/pagefind/pagefind.js*', route => route.fulfill({status:503,body:'unavailable'}));
  await page.goto('search/?q=回滚&profile=all');
  await expect(page.locator('#discovery-error')).toBeVisible();
  await page.unroute('**/pagefind/pagefind.js*');
  await page.locator('[data-discovery-retry]').click();
  await expect(page.locator('#discovery-error')).toBeHidden();
  await expect(page.locator('[data-discovery-results] > li').first()).toBeVisible();
});

test('the question and its intent are read before optional comparison tools', async ({ page }) => {
  await page.goto('questions/h-attribution-team-vs-personal/?profile=all');
  const intent = await page.locator('#intent-h').boundingBox();
  const stage = await page.locator('#question-stage-heading').boundingBox();
  expect(intent!.y).toBeLessThan(stage!.y);
});

test('mobile document navigation overlays without moving the article', async ({ page }) => {
  await page.setViewportSize({width:390,height:844});
  await page.goto('framework/?profile=all');
  const before = await page.locator('main').boundingBox();
  await page.locator('[data-wiki-disclosure] > summary').click();
  const after = await page.locator('main').boundingBox();
  expect(Math.abs(after!.y-before!.y)).toBeLessThan(.5);
  await expect(page.getByRole('navigation',{name:'文档目录',exact:true})).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('[data-wiki-disclosure] > summary')).toBeFocused();
});

test('the first handbook chapter can be clicked without the masthead covering it', async ({ page }) => {
  await page.setViewportSize({width:1440,height:900});
  await page.goto('handbook/?profile=all');
  await page.getByRole('navigation',{name:'本页目录',exact:true}).locator('a').first().click({timeout:2000});
  await expect(page).toHaveURL(/#%E5%B2%97|#岗位/);
});

test('without JavaScript articles and native navigation remain usable and tools are honest', async ({ browser, baseURL }) => {
  const context = await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
  const page = await context.newPage();
  await page.goto(`${baseURL}questions/h-attribution-team-vs-personal/`);
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('[data-profile-trigger]')).toBeHidden();
  await expect(page.locator('[data-generate-analysis]')).toBeHidden();
  await expect(page.locator('[data-stage-role]')).toBeDisabled();
  await page.goto(`${baseURL}questions/`);
  await expect(page.locator('#filters')).toBeHidden();
  await expect(page.locator('#question-list > li')).toHaveCount(50);
  await expect(page.getByRole('navigation',{name:'主导航',exact:true})).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  await context.close();
});

test('delayed scripts keep the reading layout stable during a cold load', async ({ page }) => {
  await page.addInitScript(() => {
    window.compassLayoutShift=0;
    new PerformanceObserver(list => { for(const item of list.getEntries() as (PerformanceEntry & {hadRecentInput:boolean;value:number})[]) if(!item.hadRecentInput) window.compassLayoutShift+=item.value; }).observe({type:'layout-shift',buffered:true});
  });
  await page.route('**/_astro/*.js',async route => { await new Promise(resolve => setTimeout(resolve,800)); await route.continue(); });
  await page.goto('framework/?profile=all');
  await page.waitForLoadState('networkidle');
  expect(await page.evaluate(() => window.compassLayoutShift)).toBeLessThan(.05);
});

test('old chapter links reveal the shared reference and remain readable', async ({ page }) => {
  await page.goto('questions/h-attribution-team-vs-personal/?profile=all#benefits-h');
  await expect(page.locator('#benefits-h')).toBeVisible();
  await expect(page.locator('details.shared-question-framework')).toHaveAttribute('open','');
});
