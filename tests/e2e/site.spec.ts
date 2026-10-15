import { expect, test } from '@playwright/test';

const QUESTION = 'questions/prioritization-limited-resources/';

test('home page offers search, task entry choices, all eight domains and curated paths', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('searchbox')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('找到问题，也看懂它想了解什么');
  for (const name of ['主题', '能力', '岗位', '场景']) await expect(page.getByRole('link', { name: new RegExp(name) }).first()).toBeVisible();
  for (const letter of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) await expect(page.locator('.band .facet-card', { hasText: `${letter} ·` })).toHaveCount(1);
  await expect(page.getByRole('heading', { name: '产品与全链路思维' })).toBeVisible();
});

test('primary navigation follows task discovery before capability reference', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('navigation', { name: '主导航' }).getByRole('link')).toHaveText([
    '面试题库', '主题索引', '岗位导航', '使用场景', '能力地图', '阶段能力',
  ]);
  await page.getByRole('navigation', { name: '主导航' }).getByRole('link', { name: '主题索引' }).click();
  await expect(page).toHaveURL(/\/topics\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('主题索引');

  await page.goto('./');
  const paths = page.locator('.cross-path').first();
  expect(await paths.evaluate(node => Boolean(node.compareDocumentPosition(document.querySelector('#map-title')!) & Node.DOCUMENT_POSITION_FOLLOWING))).toBe(true);
  if (await page.evaluate(() => window.innerWidth <= 760)) {
    expect(await page.locator('.primary-nav').evaluate(node => getComputedStyle(node).gridTemplateColumns.split(' ').length)).toBe(3);
  }
  await page.goto('en/');
  await expect(page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link')).toHaveText([
    'Question bank', 'Topics', 'Role paths', 'Use cases', 'Capability map', 'Stage expectations',
  ]);
});

test('mobile English navigation labels fit within their grid cells', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto('en/');
  const overflow = await page.locator('.primary-nav').evaluate((nav) => {
    const links = [...nav.querySelectorAll('a')];
    return {
      nav: nav.scrollWidth > nav.clientWidth,
      labels: links.filter((link) => link.scrollWidth > link.clientWidth).map((link) => link.textContent?.trim()),
    };
  });
  expect(overflow).toEqual({ nav: false, labels: [] });
});

test('audit paths show tagged questions in Chinese and English without changing primary ownership', async ({ page }) => {
  const paths = [
    ['paths/asking-better-questions/', '提问、追问与探询', 'Questioning, probing, and inquiry'],
    ['paths/business-planning/', '业务规划', 'Business planning'],
    ['paths/technical-planning/', '技术规划', 'Technical planning'],
    ['paths/team-planning/', '团队规划', 'Team planning'],
  ] as const;
  for (const [path, zhTitle, enTitle] of paths) {
    await page.goto(path);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(zhTitle);
    await expect(page.locator('.question-list li').first()).toBeVisible();
    await expect(page.locator('.leaf-section').first()).toBeVisible();
    await page.goto(`en/${path}`);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(enTitle);
    await expect(page.locator('.question-list li').first()).toBeVisible();
  }
});

test('capability leaves explain their classification boundary in both languages', async ({ page }) => {
  await page.goto('capabilities/professional/product-discovery-design/');
  const zhBoundary = page.locator('.leaf-boundary');
  await expect(zhBoundary.getByRole('heading', { name: '分类边界' })).toBeVisible();
  await expect(zhBoundary).toContainText('收录');
  await expect(zhBoundary).toContainText('相邻分类判断');
  await page.goto('en/capabilities/professional/product-discovery-design/');
  const enBoundary = page.locator('.leaf-boundary');
  await expect(enBoundary.getByRole('heading', { name: 'Classification boundary' })).toBeVisible();
  await expect(enBoundary).toContainText('Include');
  await expect(enBoundary).toContainText('Choose a neighboring leaf when');
});

test('capability path: home to domain to leaf to question with a canonical breadcrumb', async ({ page }) => {
  await page.goto('./');
  await page.locator('.band .facet-card', { hasText: 'D ·' }).click();
  await expect(page).toHaveURL(/\/interview-compass\/capabilities\/delivery\/$/);
  await page.getByRole('link', { name: '容量与依赖' }).first().click();
  await expect(page).toHaveURL(/\/capabilities\/delivery\/capacity-planning\/$/);
  const targetBatch = page.locator('.reading-batch').filter({ has: page.getByRole('link', { name: /调整计划/, includeHidden: true }) }).first();
  if (!await targetBatch.getAttribute('open').then(value => value !== null)) await targetBatch.locator('summary').click();
  await targetBatch.getByRole('link', { name: /调整计划/ }).first().click();
  const crumbs = page.getByRole('navigation', { name: '面包屑' });
  await expect(crumbs.locator('li')).toHaveText(['首页', '面试题库', '交付执行与持续运营', '容量与依赖', /调整计划/]);
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
  for (const heading of [
    'Objective problem to resolve or clarify',
    'What it examines',
    'What else the answer may imply',
    'Signals worth noticing',
    'Context worth asking for',
    'Decision after context',
    'Benefits created',
    'Costs and risks',
    'Assessment guide',
  ]) await expect(page.getByRole('heading', { name: heading })).toBeVisible();
  for (const level of ['1 · Not passing', '2 · Passing', '3 · Excellent', '4 · Exceptional']) {
    await expect(page.getByRole('heading', { name: level, exact: true })).toBeVisible();
  }
});

test('role, scenario and topic pages group the same questions by capability', async ({ page }) => {
  for (const [path, heading] of [['roles/product/', '产品'], ['scenarios/promotion/', '晋升准备'], ['topics/planning/', '规划']] as const) {
    await page.goto(path);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading);
    await expect(page.locator('.question-list li').first()).toBeVisible();
  }
  await page.goto('scenarios/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('使用场景');
  await page.goto('scenarios/promotion/');
  await expect(page.getByRole('heading', { name: '把晋升准备成一组持续证据' })).toBeVisible();
  await expect(page.getByText(/这是共用题库的浏览路径，不是公司职级标准/)).toBeVisible();
  await expect(page.getByRole('link', { name: /专业贡献者晋升/ })).toHaveAttribute('href', /scenario=promotion.*track=individual-contributor/);
  await expect(page.getByRole('link', { name: /转向或发展为一线管理者/ })).toHaveAttribute('href', /scenario=promotion.*track=team-manager/);
  await expect(page.getByRole('link', { name: /管理管理者/ })).toHaveAttribute('href', /scenario=promotion.*track=senior-manager/);
  await page.getByRole('link', { name: /专业贡献者晋升/ }).click();
  await expect(page).toHaveURL(/questions\/?\?/);
  await expect(page.locator('select[name="scenario"]')).toHaveValue('promotion');
  await expect(page.locator('select[name="track"]')).toHaveValue('individual-contributor');
  await expect(page.locator('#question-list > li:visible').first()).toBeVisible();
  await page.goto('en/scenarios/promotion/');
  await expect(page.getByRole('heading', { name: 'Prepare for promotion as a body of evidence' })).toBeVisible();
  await page.goto('en/roles/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Role paths');
});

test('footer publishes copyright and the separate code and content licenses', async ({ page }) => {
  await page.goto('./');
  const footer = page.locator('.site-footer');
  await expect(footer).toContainText('© 2026 Li Yu');
  await expect(footer.getByRole('link', { name: '代码许可 · MIT' })).toHaveAttribute('href', '/interview-compass/LICENSE');
  await expect(footer.getByRole('link', { name: '内容许可 · CC BY-NC-SA 4.0' })).toHaveAttribute('href', '/interview-compass/CONTENT-LICENSE.md');
  for (const file of ['LICENSE', 'CONTENT-LICENSE.md']) {
    const response = await page.request.get(new URL(file, page.url()).href);
    expect(response.ok()).toBeTruthy();
  }
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

test('search shows a localized empty state and hides it when the query is cleared', async ({ page }) => {
  await page.goto('./');
  const search = page.getByRole('searchbox');
  const results = page.locator('.search-results');
  await search.fill('zxqvplm49372');
  await expect(results).toContainText('没有找到匹配的问题。');
  await search.fill('');
  await expect(results).toBeHidden();
});

test('search submits by Enter and opens a result under the Pages base path', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('searchbox').fill('资源只够做两项');
  await page.getByRole('searchbox').press('Enter');
  const result = page.locator('.search-results a').filter({ hasText: '资源只够做两项' }).first();
  await expect(result).toBeVisible();
  await expect(result).toHaveAttribute('href', /^\/interview-compass\/questions\//);
  await result.click();
  await expect(page).toHaveURL(/\/interview-compass\/questions\//);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('资源只够做两项');
});

test('English results are selected before the visible-result limit', async ({ page }) => {
  await page.goto('en/');
  await page.getByRole('searchbox').fill('AI');
  const resultLinks = page.locator('.search-results a');
  await expect(resultLinks.first()).toBeVisible();
  const hrefs = await resultLinks.evaluateAll((links) => links.map((link) => (link as HTMLAnchorElement).getAttribute('href')));
  expect(hrefs.length).toBeGreaterThan(0);
  expect(hrefs.every((href) => href?.includes('/interview-compass/en/'))).toBe(true);
});

test('search treats Pagefind excerpts as text instead of executable markup', async ({ page }) => {
  await page.route('**/interview-compass/pagefind/pagefind.js', (route) => route.fulfill({
    contentType: 'application/javascript',
    body: `export async function search() { return { results: [{ data: async () => ({ url: '/interview-compass/questions/safe/', meta: { title: 'Safe result' }, excerpt: '<img src=x onerror="window.searchXss = true">safe excerpt' }) }] }; }`,
  }));
  await page.goto('./');
  await page.getByRole('searchbox').fill('safe');
  await expect(page.locator('.search-results')).toContainText('safe excerpt');
  await expect(page.locator('.search-results img')).toHaveCount(0);
  expect(await page.evaluate(() => (window as Window & { searchXss?: boolean }).searchXss)).toBeUndefined();
});

test('search reports an index failure in the active language', async ({ page }) => {
  await page.route('**/interview-compass/pagefind/pagefind.js', (route) => route.fulfill({
    contentType: 'application/javascript',
    body: `export async function search() { throw new Error('index unavailable'); }`,
  }));
  await page.goto('en/');
  await page.getByRole('searchbox').fill('failure');
  await expect(page.locator('.search-results')).toContainText('Search is unavailable. Try again.');
});

test('Escape hides results and ignores an in-flight response', async ({ page }) => {
  await page.route('**/interview-compass/pagefind/pagefind.js', (route) => route.fulfill({
    contentType: 'application/javascript',
    body: `export async function search(query) { await new Promise(resolve => setTimeout(resolve, 450)); return { results: [{ data: async () => ({ url: '/interview-compass/questions/late/', meta: { title: query }, excerpt: query }) }] }; }`,
  }));
  await page.goto('./');
  const search = page.getByRole('searchbox');
  await search.fill('late');
  await page.waitForTimeout(220);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(350);
  await expect(page.locator('.search-results')).toBeHidden();
});

test('a slower earlier query cannot replace results for the current query', async ({ page }) => {
  await page.route('**/interview-compass/pagefind/pagefind.js', (route) => route.fulfill({
    contentType: 'application/javascript',
    body: `export async function search(query) { await new Promise(resolve => setTimeout(resolve, query === 'slow' ? 700 : 20)); return { results: [{ data: async () => ({ url: '/interview-compass/questions/' + query + '/', meta: { title: query }, excerpt: query }) }] }; }`,
  }));
  await page.goto('./');
  const search = page.getByRole('searchbox');
  await search.fill('slow');
  await page.waitForTimeout(250);
  await search.fill('fast');
  const results = page.locator('.search-results');
  await expect(results).toContainText('fast');
  await page.waitForTimeout(800);
  await expect(results).toContainText('fast');
  await expect(results).not.toContainText('slow');
});

test('skip link and navigation are keyboard reachable', async ({ page }) => {
  await page.goto('./');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: '跳到正文' })).toBeFocused();
  await expect(page.getByRole('navigation', { name: '主导航' }).getByRole('link')).toHaveText([
    '面试题库', '主题索引', '岗位导航', '使用场景', '能力地图', '阶段能力',
  ]);
});

test('deep links resolve under the Pages base in both languages', async ({ page }) => {
  for (const path of ['capabilities/', 'en/capabilities/delivery/', 'paths/product-end-to-end/', 'en/scenarios/interview/']) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  }
});

test('capability model internal links retain the GitHub Pages base path', async ({ page }) => {
  await page.goto('capability-model/');
  const stageLink = page.locator('.stage-card').first();
  await expect(stageLink).toHaveAttribute('href', /^\/interview-compass\/capability-model\/stages\//);
  await stageLink.click();
  await expect(page).toHaveURL(/\/interview-compass\/capability-model\/stages\/junior-engineer\//);
  await expect(page.getByRole('link', { name: /查看维度变迁/ }).first()).toHaveAttribute('href', /^\/interview-compass\/capability-model\/dimensions\//);
});

test('capability dimension progression separates the IC and management paths', async ({ page }) => {
  await page.goto('capability-model/dimensions/business-results/');
  await expect(page.getByRole('heading', { name: '专业贡献路径', level: 2 })).toBeVisible();
  await expect(page.getByRole('heading', { name: '管理路径从高级工程师处分叉', level: 2 })).toBeVisible();
});

test('planned capability references are labels instead of broken links', async ({ page }) => {
  for (const route of ['capability-model/stages/junior-engineer/', 'capability-model/dimensions/domain-expertise/']) {
    await page.goto(route);
    const planned = page.locator('.planned-capability').filter({ hasText: 'AI 评估与治理' });
    await expect(planned.first()).toBeVisible();
    await expect(page.locator('a[href*="ai-evaluation-governance"]')).toHaveCount(0);
  }
});

test('level mapping page distinguishes comparison clues from capability standards', async ({ page }) => {
  await page.goto('capability-model/mapping/');
  await expect(page.getByRole('heading', { name: '跨公司职级映射：可比范围与边界', level: 1 })).toBeVisible();
  await expect(page.getByRole('heading', { name: '两个来源各自能提供什么', level: 2 })).toBeVisible();
  await expect(page.locator('.mapping-card')).toHaveCount(2);
  await expect(page.locator('.mapping-card').nth(0)).toContainText('社区补充或调整');
  await expect(page.locator('.mapping-card').nth(1)).toContainText('粗略参考');
  await expect(page.getByText('本站不提供固定等价换算')).toBeVisible();
  await expect(page.getByText(/薪酬/)).toHaveCount(0);
  await page.goto('en/capability-model/mapping/');
  await expect(page.getByRole('heading', { name: 'Cross-company level mapping', level: 1 })).toBeVisible();
  await expect(page.getByText('These references do not define capability standards.')).toBeVisible();
  await page.goto('capability-model/');
  await expect(page.getByText('这是为组织本站题库而整理的通用启发式草稿')).toBeVisible();
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

test('matrix provides anchored expectations in both locales without page overflow', async ({ page }) => {
  for (const prefix of ['', 'en/']) {
    await page.goto(`${prefix}capability-model/`);
    const matrix = page.locator('.capability-matrix');
    await expect(matrix.locator('tbody tr')).toHaveCount(6);
    await expect(matrix.locator('tbody td')).toHaveCount(48);
    await expect(page.locator('.depth-legend > div')).toHaveCount(4);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBe(true);
  }
});

test('native filters share inset Lucide chevrons and keep keyboard filtering', async ({ page }) => {
  await page.goto('questions/');
  const control = page.locator('.select-control').first();
  await expect(control.locator('svg')).toHaveAttribute('stroke-width', '1.75');
  expect(await control.evaluate(el => {
    const icon = el.querySelector('svg')!.getBoundingClientRect();
    return Math.round(el.getBoundingClientRect().right - icon.right);
  })).toBe(12);
  await control.locator('select').selectOption('delivery.capacity-planning');
  await expect(page).toHaveURL(/capability=delivery/);
  await expect(page.locator('#question-list > li:visible').first()).toBeVisible();
});

test('capability leaf reveals questions in bounded reading batches', async ({ page }) => {
  await page.goto('capabilities/delivery/capacity-planning/');
  await expect(page.locator('.reading-batch[open]')).toHaveCount(1);
  expect(await page.locator('.reading-batch[open] .question-list > li').count()).toBeLessThanOrEqual(8);
  const collapsed = page.locator('.reading-batch').nth(1);
  await collapsed.locator('summary').focus();
  await page.keyboard.press('Enter');
  await expect(collapsed).toHaveAttribute('open', '');
  expect(await collapsed.locator('.question-list > li').count()).toBeLessThanOrEqual(8);
});
