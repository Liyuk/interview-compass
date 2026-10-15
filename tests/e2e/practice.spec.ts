import { expect, test } from '@playwright/test';

test('practice starts from a question, keeps the draft locally, and builds a private AI handoff', async ({ page }) => {
  await page.goto('questions/a-coding-abstraction-defensive-edge-cases/');
  await page.getByRole('link', { name: /开始练习/ }).click();
  await expect(page).toHaveURL(/\/practice\/\?question=a-coding-abstraction-defensive-edge-cases/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('回答练习');
  const answer = page.getByLabel('你的回答');
  await answer.fill('我先确认了边界条件，再设计回归测试。');
  await page.getByLabel('目标岗位').fill('高级工程师');
  await expect(page.getByText('草稿已保存在本机浏览器')).toBeVisible();
  await page.getByRole('button', { name: '生成分析提示词' }).click();
  const prompt = page.locator('#practice-prompt');
  await expect(prompt).toHaveValue(/考察意图/);
  await expect(prompt).toHaveValue(/我先确认了边界条件/);
  await expect(prompt).toHaveValue(/不提供示范答案/);
  await page.reload();
  await expect(answer).toHaveValue('我先确认了边界条件，再设计回归测试。');
  await expect(page.getByLabel('目标岗位')).toHaveValue('高级工程师');
  await page.getByRole('button', { name: '清除本题草稿' }).click();
  await expect(answer).toHaveValue('');
});

test('practice offers a question picker for an invalid ID and does not send answers anywhere', async ({ page }) => {
  const outbound: string[] = [];
  page.on('request', (request) => {
    if (request.method() !== 'GET' && !request.url().includes('127.0.0.1')) outbound.push(request.url());
  });
  await page.goto('practice/?question=not-a-real-question');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('回答练习');
  await expect(page.getByLabel('搜索并选择问题')).toBeVisible();
  await expect(page.getByText('没有找到这道题，请从题库选择。')).toBeVisible();
  await page.getByLabel('搜索并选择问题').fill('边界和非法输入');
  await page.getByRole('option').first().click();
  await expect(page.locator('#selected-question-title')).toContainText('非法输入');
  expect(outbound).toEqual([]);
});

test('practice remains usable when browser storage and clipboard are unavailable', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { configurable: true, get() { throw new Error('blocked'); } });
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => { throw new Error('denied'); } } });
  });
  await page.goto('practice/?question=a-coding-abstraction-defensive-edge-cases');
  await page.getByLabel('你的回答').fill('我先验证了一个真实边界条件。');
  await expect(page.getByText(/浏览器无法保存|本机存储不可用/)).toBeVisible();
  await page.getByRole('button', { name: '生成分析提示词' }).click();
  await page.getByRole('button', { name: '复制提示词' }).click();
  await expect(page.getByText('自动复制不可用，提示词已选中，可手动复制。')).toBeVisible();
  await expect(page.locator('#practice-prompt')).toBeFocused();
});
