import { expect, test } from './all-questions-fixture';

const QUESTION = 'questions/prioritization-limited-resources/';


test('home starts with goals and keeps category and curated entry points', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('searchbox')).toBeVisible();
  await expect(page.locator('.hero-primary')).toHaveText(/按目标开始/);
  await expect(page.locator('.hero-entry')).toHaveCount(4);
  await page.locator('.hero-primary').click();
  await page.locator('#interviewer > summary').click();
  await expect(page.locator('#interviewer')).toHaveAttribute('open', '');
  await expect(page.locator('#interviewer .scenario-steps')).toBeVisible();
});

test('primary navigation separates goals, questions, methods, guide, categories and stages', async ({ page }) => {
  await page.goto('./');
  if (await page.locator('.nav-toggle').isVisible()) await page.locator('.nav-toggle').click();
  await expect(page.locator('.primary-nav a')).toHaveText(['目标路径', '面试题库', '提问方法', '使用说明', '分类索引', '阶段能力']);
  await page.locator('.primary-nav').getByRole('link', { name: '分类索引' }).click();
  await page.locator('.browse-index').getByRole('link', { name: /主题索引/ }).click();
  await expect(page).toHaveURL(/\/topics\/$/);
  await page.goto('en/');
  if (await page.locator('.nav-toggle').isVisible()) await page.locator('.nav-toggle').click();
  await expect(page.locator('.primary-nav a')).toHaveText(['Goal paths', 'Question bank', 'Questioning methods', 'How to use', 'Browse', 'Stage expectations']);
});

test('handbook uses the shared knowledge rail, Starlight TOC, search, language and footer', async ({ page }) => {
  await page.goto('handbook/');
  if ((page.viewportSize()?.width ?? 1280) <= 760) await page.locator('[data-wiki-disclosure] > summary').click();
  const zhSidebar = page.getByRole('navigation', { name: '知识导航' });
  await expect(zhSidebar.getByRole('link', { name: '使用说明' })).toHaveAttribute('aria-current', 'page');
  await expect(page.getByRole('navigation', { name: '本页内容' })).toBeVisible();
  await expect(page.getByRole('searchbox')).toBeVisible();
  await expect(page.locator('.breadcrumbs')).toContainText('使用说明');
  await expect(page.locator('main')).toContainText('共用的 1–4 分证据参考');
  await expect(page.locator('main')).toContainText('少部分已复核题目另有专属锚点');
  await expect(page.locator('main')).toContainText('提问方法');
  await expect(page.getByRole('main').getByRole('link', { name: '提问方法', exact: true })).toBeVisible();
  await expect(page.locator('.site-footer')).toContainText('© 2026 Liyuk');
  await page.getByRole('link', { name: 'EN' }).click();
  await expect(page).toHaveURL(/\/en\/handbook\//);
  if ((page.viewportSize()?.width ?? 1280) <= 760) await page.locator('[data-wiki-disclosure] > summary').click();
  await expect(page.getByRole('navigation', { name: 'Knowledge navigation' }).getByRole('link', { name: 'How to use' })).toHaveAttribute('aria-current', 'page');
  await expect(page.getByRole('navigation', { name: 'On this page' })).toBeVisible();
  await expect(page.getByRole('searchbox')).toBeVisible();
  await expect(page.locator('.site-footer')).toContainText('Content license · CC BY-NC-SA 4.0');
});

test('mobile navigation opens and closes without horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto('en/');
  await expect(page.locator('.primary-nav')).toBeHidden();
  await page.locator('.nav-toggle').click();
  await expect(page.locator('.primary-nav')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.keyboard.press('Escape');
  await expect(page.locator('.primary-nav')).toBeHidden();
  await expect(page.locator('.nav-toggle')).toBeFocused();
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
  await page.locator('.hero-entry').filter({ hasText: '看懂问题主要在考察什么' }).click();
  await page.locator('.domain-block h3 a', { hasText: 'D ·' }).click();
  await expect(page).toHaveURL(/\/interview-compass\/capabilities\/delivery\/$/);
  await page.getByRole('link', { name: '容量与依赖' }).first().click();
  await expect(page).toHaveURL(/\/capabilities\/delivery\/capacity-planning\/$/);
  const targetBatch = page.locator('.reading-batch').filter({ has: page.getByRole('link', { name: /可用工时减少三成/, includeHidden: true }) }).first();
  if (!await targetBatch.getAttribute('open').then(value => value !== null)) await targetBatch.locator('summary').click();
  await targetBatch.getByRole('link', { name: /可用工时减少三成/ }).first().click();
  const crumbs = page.getByRole('navigation', { name: '面包屑' });
  await expect(crumbs.locator('li')).toHaveText(['首页', '面试题库', '交付执行与持续运营', '容量与依赖', '题目详情']);
  await expect(crumbs.locator('[aria-current="page"]')).toHaveText('题目详情');
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
  await expect(page.getByText('共用阅读框架 · 逐题分析待校准', { exact: true })).toBeVisible();
  await expect(page.locator('.analysis-review-status')).toContainText('通用追问提示');
  for (const level of ['1 · 不通过', '2 · 通过', '3 · 优秀', '4 · 卓越']) await expect(page.getByRole('heading', { name: level, exact: true })).toBeVisible();
  await expect(page.getByText('本站原创')).toBeVisible();
  const href = await page.locator('.metadata-block a', { hasText: '通用工程' }).first().getAttribute('href');
  expect(href).toMatch(/^\/interview-compass\/roles\/engineering\/$/);
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

test('reviewed question analyses expose question-specific comparisons in both languages', async ({ page }) => {
  await page.goto('questions/c-metrics-causality-competitor-benchmark/');
  await expect(page.getByText('逐题分析 · 已复核', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: '可以比较的思路' })).toBeVisible();
  await expect(page.getByText('数据口径', { exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'EN' }).click();
  await expect(page.getByText('Question-specific analysis · reviewed', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Comparisons to consider' })).toBeVisible();
  await expect(page.getByText('Measurement basis', { exact: true })).toBeVisible();
});

test('role, scenario and topic pages group the same questions by capability', async ({ page }) => {
  for (const [path, heading] of [['roles/frontend/', '前端'], ['scenarios/promotion/', '晋升准备'], ['topics/planning/', '规划']] as const) {
    await page.goto(path);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading);
    await expect(page.locator('.question-list li').first()).toBeVisible();
  }
  await page.goto('scenarios/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('按目标开始');
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

test('use cases present six goal-based paths and connect them to the right tools', async ({ page }) => {
  await page.goto('scenarios/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('按目标开始');
  const paths = page.locator('.scenario-path');
  await expect(paths).toHaveCount(6);
  for (const title of [
    '候选人求职', '招聘面试官', '晋升候选人', '晋升评审者', '自我准备与复盘', '项目与运营复盘',
  ]) await expect(paths.filter({ has: page.getByText(title, { exact: true }) })).toHaveCount(1);

  const candidate = paths.filter({ hasText: '候选人求职' });
  await candidate.locator('summary').click();
  await expect(candidate.getByRole('link', { name: '练习行为面试问题' })).toHaveAttribute('href', /scenario=interview.*format=behavioral/);
  const questionLinks = await page.locator('.scenario-path a[href*="/questions/?"]').evaluateAll(links => links.map(link => (link as HTMLAnchorElement).href));
  expect(questionLinks.length).toBeGreaterThan(10);
  for (const href of questionLinks) {
    await page.goto(href);
    await expect(page.locator('#question-list > li:visible').first(), `Expected task path link to open a populated question list: ${href}`).toBeVisible();
  }

  await page.goto('scenarios/');
  const interviewer = page.locator('.scenario-path').filter({ hasText: '招聘面试官' });
  await interviewer.locator('summary').click();
  await expect(interviewer.getByText('把证据分配到面试轮次')).toBeVisible();
  const productQuestions = interviewer.getByRole('link', { name: '产品判断能力' });
  await expect(productQuestions).toHaveAttribute('href', /scenario=hiring.*topic=product-thinking.*format=case/);
  await productQuestions.click();
  await expect(page.locator('select[name="scenario"]')).toHaveValue('hiring');
  await expect(page.locator('select[name="topic"]')).toHaveValue('product-thinking');
  await expect(page.locator('#question-list > li:visible').first()).toBeVisible();
  await page.goto('scenarios/');
  const hiringPath = page.locator('.scenario-path').filter({ hasText: '招聘面试官' });
  await hiringPath.locator('summary').click();
  await hiringPath.getByRole('link', { name: '运营工作流理解' }).click();
  await expect(page.locator('select[name="topic"]')).toHaveValue('operations');
  await expect(page.locator('#question-list > li:visible').first()).toBeVisible();
  await page.goto('scenarios/');
  const promotionCandidate = page.locator('.scenario-path').filter({ hasText: '晋升候选人' });
  await promotionCandidate.locator('summary').click();
  await promotionCandidate.getByRole('link', { name: '一线管理者' }).click();
  await expect(page.locator('select[name="track"]')).toHaveValue('team-manager');
  await expect(page.locator('#question-list > li:visible').first()).toBeVisible();

  await page.goto('scenarios/');
  const selfReview = paths.filter({ hasText: '自我准备与复盘' });
  await selfReview.locator('summary').click();
  await expect(selfReview.getByRole('link', { name: '浏览复盘问题' })).toHaveAttribute('href', /\/scenarios\/self-reflection\/$/);
  await expect(selfReview.locator('a[href*="practice"]')).toHaveCount(0);

  await page.goto('en/scenarios/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Choose a goal');
  await expect(page.locator('.scenario-path')).toHaveCount(6);
  await expect(page.getByText('Job candidate', { exact: true })).toBeVisible();
});

test('removed legacy question URLs return 404 in both locales', async ({ page }) => {
  const zhResponse = await page.goto('questions/bulk-b-commercial-05/');
  expect(zhResponse?.status()).toBe(404);

  const enResponse = await page.goto('en/questions/exp1500-b-015/');
  expect(enResponse?.status()).toBe(404);
});

test('footer publishes copyright and the separate code and content licenses', async ({ page }) => {
  await page.goto('./');
  const footer = page.locator('.site-footer');
  await expect(footer).toContainText('© 2026 Liyuk');
  await expect(footer.getByRole('link', { name: '代码许可 · MIT' })).toHaveAttribute('href', '/interview-compass/LICENSE');
  await expect(footer.getByRole('link', { name: '内容许可 · CC BY-NC-SA 4.0' })).toHaveAttribute('href', '/interview-compass/CONTENT-LICENSE.md');
  for (const file of ['LICENSE', 'CONTENT-LICENSE.md']) {
    const response = await page.request.get(new URL(file, page.url()).href);
    expect(response.ok()).toBeTruthy();
  }
});

test('question library filters combine, update the shareable URL, and clear', async ({ page }) => {
  await page.goto('questions/');
  const total = Number((await page.locator('#result-count').innerText()).match(/^\d+/)?.[0]);
  expect(total).toBeGreaterThan(10);
  await page.locator('select[name="scenario"]').selectOption('promotion');
  await page.locator('select[name="role"]').selectOption('frontend');
  await expect(page).toHaveURL(/scenario=promotion/);
  await expect(page).toHaveURL(/role=frontend/);
  const filtered = Number((await page.locator('#result-count').innerText()).match(/^\d+/)?.[0]);
  expect(filtered).toBeGreaterThan(0);
  expect(filtered).toBeLessThan(total);
  await expect(page.locator('#result-count')).toContainText(String(filtered));
  await page.reload();
  await expect(page.locator('select[name="role"]')).toHaveValue('frontend');
  expect(await page.locator('#question-list > li:visible').count()).toBe(Math.min(50, filtered));
  await page.getByRole('button', { name: '清除筛选' }).click();
  expect(await page.locator('#question-list > li:visible').count()).toBe(Math.min(50, total));
});

test('question library keeps common filters visible and reveals advanced filters on demand', async ({ page }) => {
  await page.goto('questions/');
  await expect(page.locator('.filters-primary select')).toHaveCount(4);
  await expect(page.locator('#advanced-filters')).not.toHaveAttribute('open', '');
  await expect(page.locator('select[name="capability"]')).toBeHidden();
  await page.locator('#advanced-filters > summary').click();
  await expect(page.locator('select[name="capability"]')).toBeVisible();
  await page.locator('select[name="capability"]').selectOption('delivery.capacity-planning');
  await expect(page).toHaveURL(/capability=delivery.capacity-planning/);
  await expect(page.locator('#advanced-filter-count')).toContainText('1');
  await expect(page.locator('#selected-filters button')).toContainText('能力：');
  await page.locator('#selected-filters button').click();
  await expect(page.locator('select[name="capability"]')).toHaveValue('');
  await expect(page.locator('#advanced-filter-count')).toBeEmpty();
});

test('search supports keyboard focus and finds a localized question', async ({ page }) => {
  await page.goto('./');
  await page.keyboard.press('Control+k');
  await expect(page.getByRole('searchbox')).toBeFocused();
  await page.keyboard.press('Escape');
  await page.keyboard.press('Meta+k');
  await expect(page.getByRole('searchbox')).toBeFocused();
  await page.getByRole('searchbox').fill('资源只够做两项');
  await expect(page.locator('.search-results')).toBeVisible();
  await expect(page.locator('.search-results')).toContainText('资源只够做两项');
  const allMatches = new URL(await page.locator('.search-all').getAttribute('href')!);
  expect(allMatches.pathname).toBe('/interview-compass/search/');
  expect(allMatches.searchParams.get('q')).toBe('资源只够做两项');
  await page.keyboard.press('Escape');
  await expect(page.locator('.search-results')).toBeHidden();
});

test('language switching keeps search and question-library state', async ({ page }) => {
  await page.goto('search/?q=资源只够做两项');
  await page.locator('.language-switch a').click();
  await expect(page).toHaveURL(/\/en\/search\//);
  expect(new URL(page.url()).searchParams.get('q')).toBe('资源只够做两项');
  await expect(page.getByRole('searchbox')).toHaveValue('资源只够做两项');

  await page.goto('questions/?role=backend&scenario=promotion&page=2');
  await page.locator('.language-switch a').click();
  await expect(page).toHaveURL(/\/en\/questions\//);
  expect(new URL(page.url()).search).toBe('?role=backend&scenario=promotion&page=2');
  await expect(page.locator('select[name="role"]')).toHaveValue('backend');
  await expect(page.locator('select[name="scenario"]')).toHaveValue('promotion');
  await expect(page.locator('#page-status')).toContainText('Page 2 of');
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

test('search submits to the complete results page and opens a result under the Pages base path', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('searchbox').fill('资源只够做两项');
  await page.getByRole('searchbox').press('Enter');
  await expect(page).toHaveURL(/\/search\/?\?q=%E8%B5%84%E6%BA%90%E5%8F%AA%E5%A4%9F%E5%81%9A%E4%B8%A4%E9%A1%B9/);
  const result = page.locator('.search-page-result a').filter({ hasText: '资源只够做两项' }).first();
  await expect(result).toBeVisible();
  await expect(result).toHaveAttribute('href', /^\/interview-compass\/questions\//);
  await result.click();
  await expect(page).toHaveURL(/\/interview-compass\/questions\//);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('资源只够做两项');
});

test('English results are selected before the visible-result limit', async ({ page }) => {
  await page.goto('en/');
  await page.getByRole('searchbox').fill('AI');
  const resultLinks = page.locator('.search-results .search-result');
  await expect(resultLinks).toHaveCount(8);
  const hrefs = await resultLinks.evaluateAll((links) => links.map((link) => (link as HTMLAnchorElement).getAttribute('href')));
  expect(hrefs.length).toBeGreaterThan(0);
  expect(hrefs.every((href) => href?.includes('/interview-compass/en/'))).toBe(true);
});

test('search preserves Pagefind ranking and caps the visible results at eight', async ({ page }) => {
  await page.route('**/interview-compass/pagefind/pagefind.js', (route) => route.fulfill({
    contentType: 'application/javascript',
    body: `export async function search() { return { results: Array.from({ length: 12 }, (_, index) => ({ data: async () => ({ url: '/interview-compass/questions/result-' + index + '/', meta: { title: 'Result ' + index }, excerpt: 'Ranked result' }) })) }; }`,
  }));
  await page.goto('./');
  await page.getByRole('searchbox').fill('ranked');
  const results = page.locator('.search-results .search-result');
  await expect(results).toHaveCount(8);
  await expect(results.first()).toContainText('Result 0');
  await expect(results.last()).toContainText('Result 7');
  await expect(page.locator('.search-results')).not.toContainText('Result 8');
});

test('full search results paginate all matches, retain the query, and follow browser history', async ({ page }) => {
  await page.route('**/interview-compass/pagefind/pagefind.js', (route) => route.fulfill({
    contentType: 'application/javascript',
    body: `export async function search() { return { results: Array.from({ length: 43 }, (_, index) => ({ data: async () => ({ url: '/interview-compass/questions/result-' + index + '/', meta: { title: 'Result ' + index }, excerpt: 'Ranked result ' + index }) })) }; }`,
  }));
  await page.goto('search/?q=ranked');
  await expect(page.locator('#search-page-results > li')).toHaveCount(20);
  await expect(page.locator('#search-page-status')).toContainText('43 条匹配结果');
  await page.getByRole('button', { name: '下一页' }).click();
  await expect(page).toHaveURL(/q=ranked&page=2/);
  await expect(page.locator('#search-page-results > li').first()).toContainText('Result 20');
  await page.getByRole('button', { name: '下一页' }).click();
  await expect(page.locator('#search-page-results > li')).toHaveCount(3);
  await page.goBack();
  await expect(page).toHaveURL(/q=ranked&page=2/);
  await expect(page.locator('#search-page-results > li').first()).toContainText('Result 20');
  await page.getByRole('button', { name: '上一页' }).click();
  await expect(page).toHaveURL(/\/search\/?\?q=ranked$/);
  await expect(page.locator('#search-page-results > li').first()).toContainText('Result 0');
});

test('search renders untrusted metadata as text and discards unsafe destinations', async ({ page }) => {
  await page.route('**/interview-compass/pagefind/pagefind.js', (route) => route.fulfill({
    contentType: 'application/javascript',
    body: `export async function search() { return { results: [
      { data: async () => ({ url: '/interview-compass/questions/safe/', meta: { title: '<img src=x onerror="window.searchXss = true">Safe result' }, excerpt: '<img src=x onerror="window.searchXss = true">safe excerpt' }) },
      { data: async () => ({ url: 'https://example.com/phishing', meta: { title: 'External result' }, excerpt: 'external' }) },
      { data: async () => ({ url: 'javascript:window.searchXss = true', meta: { title: 'Script result' }, excerpt: 'script' }) },
      { data: async () => ({ url: 'http://[', meta: { title: 'Malformed result' }, excerpt: 'malformed' }) },
      { data: async () => ({ url: '/outside/questions/escape/', meta: { title: 'Outside base result' }, excerpt: 'outside base' }) },
    ] }; }`,
  }));
  await page.goto('./');
  await page.getByRole('searchbox').fill('safe');
  await expect(page.locator('.search-results')).toContainText('safe excerpt');
  await expect(page.locator('.search-results')).toContainText('<img src=x onerror="window.searchXss = true">Safe result');
  await expect(page.locator('.search-results .search-result')).toHaveCount(1);
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

test('clearing the query hides and invalidates an in-flight response', async ({ page }) => {
  await page.route('**/interview-compass/pagefind/pagefind.js', (route) => route.fulfill({
    contentType: 'application/javascript',
    body: `export async function search(query) { window.searchStarted = true; await new Promise(resolve => setTimeout(resolve, 500)); return { results: [{ data: async () => ({ url: '/interview-compass/questions/late/', meta: { title: query }, excerpt: query }) }] }; }`,
  }));
  await page.goto('./');
  const search = page.getByRole('searchbox');
  const results = page.locator('.search-results');
  await search.fill('late');
  await page.waitForFunction(() => Boolean((window as Window & { searchStarted?: boolean }).searchStarted));
  await search.fill('');
  await expect(results).toBeHidden();
  await page.waitForTimeout(550);
  await expect(results).toBeHidden();
  await expect(results.locator('a')).toHaveCount(0);
});

test('a slow result-data lookup cannot replace results for a newer query', async ({ page }) => {
  await page.route('**/interview-compass/pagefind/pagefind.js', (route) => route.fulfill({
    contentType: 'application/javascript',
    body: `export async function search(query) { return { results: [{ data: async () => { if (query === 'slow') { window.slowDataStarted = true; await new Promise(resolve => setTimeout(resolve, 500)); } return { url: '/interview-compass/questions/' + query + '/', meta: { title: query }, excerpt: query }; } }] }; }`,
  }));
  await page.goto('./');
  const search = page.getByRole('searchbox');
  const results = page.locator('.search-results');
  await search.fill('slow');
  await page.waitForFunction(() => Boolean((window as Window & { slowDataStarted?: boolean }).slowDataStarted));
  await search.fill('fast');
  await expect(results).toContainText('fast');
  await page.waitForTimeout(550);
  await expect(results).toContainText('fast');
  await expect(results).not.toContainText('slow');
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
  if (await page.locator('.nav-toggle').isVisible()) {
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(page.locator('.nav-toggle')).toBeFocused();
    await page.keyboard.press('Enter');
  }
  await expect(page.getByRole('navigation', { name: '主导航' }).getByRole('link')).toHaveText([
    '目标路径', '面试题库', '提问方法', '使用说明', '分类索引', '阶段能力',
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

test('newly populated AI governance capability references link to its question leaf', async ({ page }) => {
  for (const route of ['capability-model/stages/junior-engineer/', 'capability-model/dimensions/domain-expertise/']) {
    await page.goto(route);
    const reference = page.locator('a.capability-reference[href*="ai-evaluation-governance"]');
    await expect(reference.first()).toBeVisible();
    await expect(reference.first()).toContainText('AI 评估与治理');
    await expect(page.locator('.planned-capability').filter({ hasText: 'AI 评估与治理' })).toHaveCount(0);
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
    await expect(page.locator('.depth-legend > div')).toHaveCount(6);
    const firstCell = matrix.locator('tbody tr').first().locator('td').first();
    await firstCell.getByText(prefix ? 'Details' : '行为锚点').click();
    await expect(firstCell.locator('details')).toHaveAttribute('open', '');
    await expect(firstCell.getByRole('link')).toHaveAttribute('href', /capability-model\/stages\/junior-engineer\/#apply-foundations/);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBe(true);
  }
});

test('stage profiles explain evaluation lenses, evidence limits, and conditional standards', async ({ page }) => {
  await page.goto('capability-model/stages/junior-engineer/');
  await expect(page.getByRole('heading', { name: '四个互补的评价视角' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '面试中需要核验的证据链' })).toBeVisible();
  await expect(page.getByText('仅当岗位规则允许且任务适合 AI 辅助时观察；不使用 AI 不能单独作为负面判断。')).toBeVisible();
  await expect(page.getByText('本标准的基础要求').first()).toBeVisible();
  await page.goto('en/capability-model/stages/engineering-manager/');
  await expect(page.getByRole('heading', { name: 'Four complementary evaluation lenses' })).toBeVisible();
  await expect(page.getByText('Understands the team’s business flow, key domain rules, and data definitions')).toBeVisible();
  await expect(page.getByText(/Assess AI risk only when the team’s products, tools, or workflows involve AI\./)).toBeVisible();
});

test('native filters share inset Lucide chevrons and keep keyboard filtering', async ({ page }) => {
  await page.goto('questions/');
  await page.locator('#advanced-filters > summary').click();
  const control = page.locator('.select-control').filter({ has: page.locator('select[name="capability"]') });
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

 test('return from a question preserves filters and the current page', async ({ page }) => {
  await page.goto('questions/?role=backend&page=2');
  await expect(page.locator('#page-status')).toContainText('2 /');
  const original = page.url();
  const first = await page.locator('#question-list > li:visible a').first().getAttribute('href');
  await page.locator('#question-list > li:visible a').first().click();
  await expect(page.locator('[data-reading-return]').first()).toBeVisible();
  await expect(page.locator('.question-fit')).toBeVisible();
  await page.locator('[data-reading-return]').first().click();
  await expect(page).toHaveURL(original);
  await expect(page.locator('#page-status')).toContainText('2 /');
  await expect(page.locator('#question-list > li:visible a').first()).toHaveAttribute('href', first!);
  await page.locator('#selected-filters button').first().click();
  await expect(page.locator('select[name="role"]')).toHaveValue('');
  await expect(page.locator('#page-status')).toContainText('1 /');
});

test('return link restores the saved reading position and expanded filter groups', async ({ page }) => {
  await page.goto('questions/?role=backend&page=2');
  await page.locator('#advanced-filters > summary').click();
  await page.evaluate(() => scrollTo(0, 650));
  const first = page.locator('#question-list > li:visible a').first();
  await first.click();
  const saved = await page.evaluate(() => JSON.parse(sessionStorage.getItem('interview-compass-reading-return') || 'null'));
  expect(saved).toMatchObject({ y: expect.any(Number), open: expect.arrayContaining(['#advanced-filters']) });
  await page.locator('[data-reading-return]').first().click();
  await expect(page).toHaveURL(/questions\/\?role=backend&page=2/);
  await expect(page.locator('#advanced-filters')).toHaveAttribute('open', '');
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(saved.y);
});
