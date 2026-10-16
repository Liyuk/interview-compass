import { expect, test } from '@playwright/test';

test('question library offers curated collections and a full-library path', async ({ page }) => {
  await page.goto('questions/');
  await expect(page.getByRole('link', { name: '精选题单' })).toHaveAttribute('href', /\/collections\/$/);
  await expect(page.getByRole('link', { name: '全量题库' })).toHaveAttribute('aria-current', 'page');
  await page.getByRole('link', { name: '精选题单' }).click();
  await expect(page).toHaveURL(/\/collections\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('精选题单');
  for (const title of ['通用面试', '技术精选', '面试官取证', '岗位尽调', '晋升对话']) {
    await expect(page.locator('.collection-card h2').filter({ hasText: title })).toBeVisible();
  }
});

test('question collection keeps its ordered entries linked to canonical question cards', async ({ page }) => {
  await page.goto('collections/general-interview/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('通用面试');
  const items = page.locator('.collection-question-list > li');
  expect(await items.count()).toBeGreaterThanOrEqual(8);
  await expect(items.first().locator('a')).toHaveAttribute('href', /\/questions\//);
  await expect(items.first()).toContainText('选择理由');
  await expect(page.locator('.collection-question-list')).toContainText('按目标和容量比较优先级');
  await expect(page.locator('.collection-question-list a[href*="bulk-f-manager-coach-without-taking-over"]')).toHaveCount(0);
});

test('candidate due diligence questions are useful for hiring and promotion without score anchors', async ({ page }) => {
  await page.goto('collections/candidate-due-diligence/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('岗位尽调');
  await expect(page.getByRole('heading', { name: '外部求职' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '晋升沟通' })).toBeVisible();
  await expect(page.getByText('评估参考')).toHaveCount(0);
  await expect(page.getByText('4 · 卓越')).toHaveCount(0);
  await page.goto('en/collections/candidate-due-diligence/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Role due diligence');
  await expect(page.getByRole('heading', { name: 'Promotion conversations' })).toBeVisible();
});

test('questioning framework explains interviewer probes, candidate answers, and reverse questions', async ({ page }) => {
  await page.goto('framework/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('提问框架');
  await expect(page.getByRole('heading', { name: '比较、挑战、执行，再核验证据' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '四项持续成长观察视角' })).toBeVisible();
  for (const lens of ['学习', '自驱', '思维', '韧性']) await expect(page.locator('.growth-lenses').getByText(lens, { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: '项目与运营复盘题' })).toHaveAttribute('href', /scenarios\/operations-review\/$/);
  await expect(page.getByRole('heading', { name: '用问题收集可比较的证据' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '从真实问题到有边界的证据' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '把经历讲成可核验的因果链' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '用反向提问做双向尽调' })).toBeVisible();
  await expect(page.getByText(/前后矛盾是澄清背景的线索/)).toBeVisible();
  await expect(page.locator('.framework-collection-link')).toHaveAttribute('href', /\/collections\/candidate-due-diligence\/$/);
  await page.goto('en/framework/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Questioning framework');
  await expect(page.getByRole('heading', { name: 'Compare, challenge, execute, and verify' })).toBeVisible();
  for (const lens of ['Learning', 'Self-direction', 'Thinking', 'Resilience']) await expect(page.locator('.growth-lenses').getByText(lens, { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Use reverse questions for mutual due diligence' })).toBeVisible();
});
