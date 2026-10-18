import { devices, expect, test } from '@playwright/test';

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

test('localized not-found pages use the shared wiki shell', async ({ page }) => {
  await page.goto('404.html');
  await expect(page.locator('main h1')).toHaveText('页面不存在');
  if ((page.viewportSize()?.width ?? 1280) <= 760) await page.locator('[data-wiki-disclosure] summary').click();
  const zhRail = page.getByRole('navigation', { name: '知识导航' });
  await expect(zhRail).toBeVisible();
  await expect(zhRail.getByRole('link', { name: '面试题库' })).toBeVisible();
  await expect(zhRail.locator('a[aria-current="page"]')).toHaveCount(0);
  await expect(page.getByRole('navigation', { name: '面包屑' })).toBeVisible();
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/404\/$/);
  await expect(page.locator('main h1')).toHaveText('Page not found');
  if ((page.viewportSize()?.width ?? 1280) <= 760) await page.locator('[data-wiki-disclosure] summary').click();
  const enRail = page.getByRole('navigation', { name: 'Knowledge navigation' });
  await expect(enRail).toBeVisible();
  await expect(enRail.locator('a[aria-current="page"]')).toHaveCount(0);
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
    const heading = page.locator(`main h1[id="${id}"], main h2[id="${id}"]`);
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
  await page.goto('questions/prioritization-limited-resources/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(250);
  const totalShift = await page.evaluate(() => (window as Window & { __layoutShifts?: number[] }).__layoutShifts?.reduce((sum, value) => sum + value, 0) ?? 0);
  const firstPaintOpen = await page.evaluate(() => (window as Window & { __paintOutlineOpen?: boolean[] }).__paintOutlineOpen?.[0]);
  expect(firstPaintOpen).toBe(false);
  expect(totalShift).toBeLessThan(0.05);
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

test('Starlight handbook reuses the knowledge rail and exposes one localized on-page TOC', async ({ page }) => {
  await page.goto('handbook/');
  await expect(page.locator('h1')).toHaveCount(1);
  if ((page.viewportSize()?.width ?? 1280) <= 760) {
    await page.getByRole('button', { name: '菜单' }).click();
  }
  const sidebar = page.getByRole('navigation', { name: '知识导航' });
  await expect(sidebar).toBeVisible();
  await expect(sidebar.getByRole('link', { name: '使用说明' })).toHaveAttribute('aria-current', 'page');
  await expect(sidebar.getByRole('link', { name: '面试题库' })).toHaveAttribute('href', '/interview-compass/questions/');
  const toc = page.getByRole('navigation', { name: '本页内容' });
  await expect(toc).toBeVisible();
  const anchors = await toc.locator('a').evaluateAll(links => links.map(link => decodeURIComponent((link as HTMLAnchorElement).hash.slice(1))));
  expect(anchors.length).toBeGreaterThan(0);
  expect(new Set(anchors).size).toBe(anchors.length);
  for (const id of anchors) {
    const matches = await page.locator('main h1, main h2').evaluateAll((headings, expectedId) =>
      headings.filter(heading => heading.id === expectedId && heading.getClientRects().length > 0).length,
      id,
    );
    expect(matches).toBe(1);
  }
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/handbook\//);
  await expect(page.locator('h1')).toHaveCount(1);
  if ((page.viewportSize()?.width ?? 1280) <= 760) {
    await page.getByRole('button', { name: 'Menu' }).click();
  }
  const englishSidebar = page.getByRole('navigation', { name: 'Knowledge navigation' });
  await expect(englishSidebar.getByRole('link', { name: 'How to use' })).toHaveAttribute('aria-current', 'page');
  await expect(page.getByRole('navigation', { name: 'On this page' })).toBeVisible();
});

test('Starlight handbook navigation opens in the built-in mobile popover', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto('handbook/');
  await expect(page.getByRole('button', { name: '菜单' })).toBeVisible();
  await expect(page.getByRole('navigation', { name: '知识导航' })).toBeHidden();
  await expect(page.getByRole('navigation', { name: '本页内容' })).toBeVisible();
  await page.getByRole('button', { name: '菜单' }).click();
  await expect(page.getByRole('navigation', { name: '知识导航' })).toBeVisible();
  await expect(page.getByRole('navigation', { name: '知识导航' }).getByRole('link', { name: '使用说明' })).toHaveAttribute('aria-current', 'page');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('Chinese and English non-home route families share the wiki rail', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  const routes = [
    ['questions/', '面试题库', 'Question bank'],
    ['questions/prioritization-limited-resources/', '面试题库', 'Question bank'],
    ['search/?q=rollback', '搜索结果', 'Search results'],
    ['browse/', '分类索引', 'Browse'],
    ['roles/frontend/', '前端', 'Frontend'],
    ['topics/planning/', '规划', 'Planning'],
    ['scenarios/promotion/', '晋升准备', 'Promotion preparation'],
    ['capabilities/delivery/', '交付执行与持续运营', 'Delivery and ongoing operations'],
    ['capabilities/delivery/capacity-planning/', '容量与依赖', 'Capacity and dependencies'],
    ['capability-model/', '阶段能力', 'Stage expectations'],
    ['capability-model/stages/junior-engineer/', '初级工程师', 'Junior Engineer'],
    ['capability-model/dimensions/business-results/', '业务结果', 'Business results'],
    ['capability-model/mapping/', '跨公司职级映射', 'Cross-company level mapping'],
    ['collections/', '精选题单', 'Curated sets'],
    ['collections/general-interview/', '通用面试', 'General interview'],
    ['paths/business-planning/', '业务规划', 'Business planning'],
    ['framework/', '提问框架', 'Questioning framework'],
    ['handbook/', '使用说明', 'How to use'],
  ] as const;

  for (const [route, zhCurrent, enCurrent] of routes) {
    for (const [prefix, locale, current] of [['', 'zh-CN', zhCurrent], ['en/', 'en', enCurrent]] as const) {
      await page.goto(`${prefix}${route}`);
      await expect(page.locator('html')).toHaveAttribute('lang', locale);
      await expect(page.locator('main#main h1, main h1').first()).toBeVisible();
      const rail = page.getByRole('navigation', { name: locale === 'en' ? 'Knowledge navigation' : '知识导航' });
      await expect(rail).toBeVisible();
      await expect(rail.getByRole('link').first()).toBeVisible();
      const currentLinks = rail.locator('a[aria-current="page"]');
      await expect(currentLinks).toHaveCount(1);
      await expect(currentLinks).toContainText(current);
    }
  }
});

test('wiki content stays usable without horizontal overflow at 320px and 390px', async ({ page }) => {
  for (const width of [320, 390]) {
    await page.setViewportSize({ width, height: 844 });
    for (const route of ['questions/', 'capabilities/delivery/capacity-planning/', 'handbook/']) {
      await page.goto(route);
      await expect(page.locator('main h1').first()).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      await expect(page.getByRole('searchbox')).toBeVisible();
      if (route === 'handbook/') {
        const [crumbs, toc] = await Promise.all([
          page.locator('.handbook-crumbs').boundingBox(),
          page.getByRole('navigation', { name: '本页内容' }).boundingBox(),
        ]);
        expect(crumbs).not.toBeNull();
        expect(toc).not.toBeNull();
        expect(crumbs!.y + crumbs!.height <= toc!.y || toc!.y + toc!.height <= crumbs!.y).toBe(true);
      }
    }
  }
});
