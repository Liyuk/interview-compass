import { expect, test, devices } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('interview-compass.target.v1', JSON.stringify({ version: 1, mode: 'all' })));
});

test('all route families retain global navigation with task appropriate content', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  for (const prefix of ['', 'en/']) {
    for (const route of ['', 'questions/', 'questions/prioritization-limited-resources/', 'search/?q=rollback', 'browse/', 'roles/frontend/', 'topics/planning/', 'scenarios/promotion/', 'capabilities/delivery/', 'capabilities/delivery/capacity-planning/', 'capability-model/', 'capability-model/stages/junior-engineer/', 'capability-model/dimensions/business-results/', 'capability-model/mapping/', 'collections/', 'collections/general-interview/', 'paths/business-planning/', 'framework/', 'handbook/']) {
      await page.goto(`${prefix}${route}`);
      await expect(page.locator('main h1').first()).toBeVisible();
      const primary = page.locator('#primary-navigation');
      await expect(primary).toBeVisible();
      await expect(primary.locator('a')).toHaveCount(6);
      if (route) await expect(primary.locator('[aria-current="page"]')).toHaveCount(1);
      if (route) {
        const sidebar = page.locator('[data-wiki-sidebar]');
        await expect(sidebar).toBeVisible();
        const activeHref = await primary.locator('[aria-current=page]').getAttribute('href');
        await expect(sidebar.locator('.document-tree-list').first().locator(':scope > li')).toHaveCount(1);
        await expect(sidebar.locator('.document-tree-list').first().locator(':scope > li > a')).toHaveAttribute('href', activeHref!);
      } else await expect(page.locator('[data-wiki-sidebar]')).toHaveCount(0);
    }
  }
});

test('section navigation stays local and mobile menus do not move the article', async ({ page }) => {
  for (const width of [320,390,768,1024,1440]) {
    await page.setViewportSize({width,height:900});
    for (const route of ['questions/', 'capabilities/delivery/capacity-planning/', 'handbook/', 'en/handbook/']) {
      await page.goto(route);
      await expect(page.locator('main h1').first()).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      if (route === 'questions/' && width >= 768 && width <= 1024) {
        const main = await page.locator('main').boundingBox();
        expect(main!.width).toBeGreaterThan(width * 0.5);
        const sidebar = await page.locator('[data-wiki-sidebar]').boundingBox();
        expect(sidebar!.x + sidebar!.width).toBeLessThan(main!.x);
      }
      if (width <= 760 && await page.locator('[data-wiki-outline]').count()) await expect(page.locator('[data-wiki-outline]')).not.toHaveAttribute('open', '');
      const toggle=page.locator('[data-site-navigation-toggle]');
      if (width<=1280) {
        const before=await page.locator('main').first().boundingBox();
        await toggle.click();
        await expect(page.locator('#primary-navigation')).toBeVisible();
        const after=await page.locator('main').first().boundingBox();
        expect(after!.y).toBe(before!.y);
        await page.keyboard.press('Escape');
        await expect(toggle).toBeFocused();
        await expect(page.locator('#primary-navigation')).not.toBeVisible();
      }
      if(route.includes('handbook')) {
        await expect(page.locator('h1')).toHaveCount(1);
        await expect(page.locator('.sl-menu-button')).toHaveCount(0);
        await expect(page.locator('mobile-starlight-toc, .right-sidebar')).not.toHaveCount(0);
      }
    }
  }
});

test('static navigation is usable without JavaScript', async ({browser,baseURL})=>{
  const context=await browser.newContext({javaScriptEnabled:false});
  const page=await context.newPage();
  await page.goto(`${baseURL}questions/`);
  await expect(page.locator('#primary-navigation a')).toHaveCount(6);
  await expect(page.locator('#primary-navigation a').first()).toBeVisible();
  await expect(page.locator('#question-list > li').first()).toBeVisible();
  await context.close();
});

test('mobile article outline appears before the article body', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto('questions/prioritization-limited-resources/');
  const outline = page.locator('[data-wiki-outline] > summary');
  await expect(outline).toBeVisible();
  const [outlineBox, headingBox] = await Promise.all([
    outline.boundingBox(),
    page.locator('main h1').boundingBox(),
  ]);
  expect(outlineBox).not.toBeNull();
  expect(headingBox).not.toBeNull();
  expect(outlineBox!.y + outlineBox!.height).toBeLessThan(headingBox!.y);
});

test('mobile page load does not cause a large layout shift', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ ...devices['iPhone 13'], baseURL });
  const page = await context.newPage();
  await page.route('**/*.js', async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    await route.continue();
  });
  await page.addInitScript(() => {
    (window as Window & { __layoutShifts?: number[] }).__layoutShifts = [];
    (window as Window & { __paintOutlineOpen?: boolean[] }).__paintOutlineOpen = [];
    new PerformanceObserver((entries) => {
      const states = (window as Window & { __paintOutlineOpen?: boolean[] }).__paintOutlineOpen;
      states?.push(...entries.getEntries().filter((entry) => entry.name === 'first-contentful-paint').map(() => Boolean(document.querySelector('[data-wiki-outline]')?.hasAttribute('open'))));
    }).observe({ type: 'paint', buffered: true });
    new PerformanceObserver((entries) => {
      const shifts = (window as Window & { __layoutShifts?: number[] }).__layoutShifts;
      const layoutShifts = entries.getEntries() as Array<PerformanceEntry & { value: number; hadRecentInput: boolean }>;
      shifts?.push(...layoutShifts.filter((entry) => !entry.hadRecentInput).map((entry) => entry.value));
    }).observe({ type: 'layout-shift', buffered: true });
  });
  for (const path of ['questions/prioritization-limited-resources/', 'handbook/']) {
  await page.goto(path);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(250);
  const totalShift = await page.evaluate(() => (window as Window & { __layoutShifts?: number[] }).__layoutShifts?.reduce((sum, value) => sum + value, 0) ?? 0);
  const firstPaintOpen = await page.evaluate(() => (window as Window & { __paintOutlineOpen?: boolean[] }).__paintOutlineOpen?.[0]);
  if (!path.includes('handbook')) expect(firstPaintOpen).toBe(false);
  expect(totalShift).toBeLessThan(0.05);
  }
  await context.close();
});

test('mobile home renders its collapsed navigation before first paint', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ ...devices['iPhone 13'], baseURL });
  const page = await context.newPage();
  await page.route('**/*.js', async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    await route.continue();
  });
  await page.addInitScript(() => {
    (window as Window & { __navAtPaint?: Array<{ nav: string; toggle: string }> }).__navAtPaint = [];
    new PerformanceObserver((entries) => {
      const states = (window as Window & { __navAtPaint?: Array<{ nav: string; toggle: string }> }).__navAtPaint;
      states?.push(...entries.getEntries().filter((entry) => entry.name === 'first-contentful-paint').map(() => ({
        nav: getComputedStyle(document.querySelector('#primary-navigation')!).display,
        toggle: getComputedStyle(document.querySelector('.nav-toggle')!).display,
      })));
    }).observe({ type: 'paint', buffered: true });
  });
  await page.goto('./');
  await page.waitForLoadState('networkidle');
  const navAtPaint = await page.evaluate(() => (window as Window & { __navAtPaint?: Array<{ nav: string; toggle: string }> }).__navAtPaint?.[0]);
  expect(navAtPaint).toEqual({ nav: 'none', toggle: 'flex' });
  await context.close();
});
