import { expect, test } from '@playwright/test';

test('practice starts from a question, keeps the draft locally, and builds a private AI handoff', async ({ page }) => {
  await page.goto('questions/a-coding-abstraction-defensive-edge-cases/');
  await page.getByRole('link', { name: /开始练习/ }).click();
  await expect(page).toHaveURL(/\/practice\/\?question=a-coding-abstraction-defensive-edge-cases/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('回答练习');
  await expect(page.getByRole('heading', { name: '读懂题目' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '这道题想了解什么？' })).toBeVisible();
  await expect(page.locator('#practice-analysis-status')).toContainText('逐题分析待校准');
  await expect(page.getByRole('heading', { name: '先弄清题目要解决什么' })).toBeVisible();
  await expect(page.locator('#selected-question-objective')).toContainText('专属客观问题尚未复核');
  await expect(page.getByRole('heading', { name: '回答时可以留意这些信号' })).toBeVisible();
  await expect(page.getByLabel('用自己的话自由作答')).toBeHidden();
  await page.getByLabel('试着用自己的话复述题意（可选）').fill('我需要说明怎么处理输入边界，并复盘一次真实失误。');
  await page.getByRole('button', { name: '开始组织回答' }).click();
  await expect(page.getByRole('heading', { name: '经历与技术复盘提纲' })).toBeVisible();
  const answer = page.getByLabel('用自己的话自由作答');
  await answer.fill('我先确认了边界条件，再设计回归测试。');
  await expect(page.getByText('草稿已保存在本机浏览器')).toBeVisible();
  await page.getByRole('button', { name: '复盘与反馈' }).last().click();
  await expect(page.getByText('证据不足，暂不评分')).toBeVisible();
  const selfCheckRows = page.locator('[data-self-check-row]');
  for (let index = 0; index < await selfCheckRows.count(); index += 1) {
    await selfCheckRows.nth(index).locator('input[value="supported"]').check();
  }
  await expect(page.locator('[data-self-check-row] input[value="supported"]:checked')).toHaveCount(4);
  await page.locator('.practice-optional-context summary').click();
  await page.getByLabel('目标岗位').fill('高级工程师');
  await page.getByRole('button', { name: '生成外部分析请求' }).click();
  const prompt = page.locator('#practice-prompt');
  await expect(prompt).toHaveValue(/考察意图/);
  await expect(prompt).toHaveValue(/分析复核状态/);
  await expect(prompt).toHaveValue(/我先确认了边界条件/);
  await expect(prompt).toHaveValue(/我需要说明怎么处理输入边界/);
  await expect(prompt).toHaveValue(/自查/);
  await expect(prompt).toHaveValue(/不提供示范答案/);
  await expect.poll(async () => {
    const saved = await page.evaluate(() => localStorage.getItem('interview-compass:practice:zh-CN:a-coding-abstraction-defensive-edge-cases'));
    return saved ? (JSON.parse(saved) as { selfAssessment: string[] }).selfAssessment : [];
  }).toEqual(['supported', 'supported', 'supported', 'supported']);
  await page.reload();
  await expect(page.locator('[data-self-check-row] input[value="supported"]:checked')).toHaveCount(4);
  await page.getByRole('button', { name: '返回组织回答' }).click();
  await expect(answer).toHaveValue('我先确认了边界条件，再设计回归测试。');
  await page.getByRole('button', { name: /1\. 读懂题目/ }).click();
  await expect(page.getByLabel('试着用自己的话复述题意（可选）')).toHaveValue('我需要说明怎么处理输入边界，并复盘一次真实失误。');
  await page.getByRole('button', { name: '开始组织回答' }).click();
  await page.getByRole('button', { name: '复盘与反馈' }).last().click();
  await page.locator('.practice-optional-context summary').click();
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

test('practice guide and self-check are available in English', async ({ page }) => {
  await page.goto('en/practice/?question=a-coding-abstraction-defensive-edge-cases');
  await expect(page.getByRole('heading', { level: 2, name: 'Understand the question' })).toBeVisible();
  await expect(page.getByLabel('Put the question in your own words (optional)')).toBeVisible();
  await page.getByRole('button', { name: 'Organize my answer' }).click();
  await expect(page.getByRole('heading', { name: 'Technical experience reflection outline' })).toBeVisible();
  await page.getByRole('button', { name: /3\. Review/ }).click();
  await expect(page.getByText(/Not enough evidence yet; do not score/)).toBeVisible();
  await page.getByRole('button', { name: 'Create external analysis request' }).click();
  await expect(page.getByLabel('External AI analysis request')).toHaveValue(/Self-check/);
});

test('changing the selected question clears the previous question prompt', async ({ page }) => {
  await page.goto('practice/?question=a-coding-abstraction-defensive-edge-cases');
  await page.getByRole('button', { name: '开始组织回答' }).click();
  await page.getByLabel('用自己的话自由作答').fill('这是第一道题的回答。');
  await page.getByRole('button', { name: '复盘与反馈' }).last().click();
  await page.getByRole('button', { name: '生成外部分析请求' }).click();
  await expect(page.locator('#practice-prompt')).toHaveValue(/这是第一道题的回答/);

  await page.getByLabel('搜索并选择问题').fill('有限资源');
  await page.getByRole('option').first().click();
  await expect(page.locator('#selected-question-title')).toContainText(/资源|优先级/);
  await expect(page.locator('#practice-prompt')).toHaveValue('');
  await expect(page.locator('#practice-prompt-panel')).toBeHidden();
});

test('switching questions flushes the current answer before the debounce timer fires', async ({ page }) => {
  await page.addInitScript(() => {
    const nativeSetTimeout = window.setTimeout.bind(window);
    window.setTimeout = ((handler: TimerHandler, timeout?: number, ...args: unknown[]) =>
      nativeSetTimeout(handler, timeout === 120 ? 10_000 : timeout, ...args)) as typeof window.setTimeout;
  });
  await page.goto('practice/?question=a-coding-abstraction-defensive-edge-cases');
  await page.getByRole('button', { name: '开始组织回答' }).click();
  const answer = page.getByLabel('用自己的话自由作答');
  await answer.fill('切题前最后一刻补充的证据。');

  await page.getByLabel('搜索并选择问题').fill('有限资源');
  await page.getByRole('option').first().click();
  await expect(page.locator('#selected-question-title')).toContainText(/资源|优先级/);
  await page.getByLabel('搜索并选择问题').fill('边界和非法输入');
  await page.getByRole('option').first().click();
  await expect(answer).toHaveValue('切题前最后一刻补充的证据。');
});

test('a slower earlier question request cannot replace the latest selection', async ({ page }) => {
  let delayedRequestStarted!: () => void;
  const requestStarted = new Promise<void>((resolve) => { delayedRequestStarted = resolve; });
  let delayedResponseReleased!: () => void;
  const releaseDelayedResponse = new Promise<void>((resolve) => { delayedResponseReleased = resolve; });
  await page.route('**/data/question/zh-CN/a-coding-abstraction-defensive-edge-cases.json', async (route) => {
    delayedRequestStarted();
    await releaseDelayedResponse;
    await route.continue();
  });
  await page.goto('practice/');
  await expect(page.getByLabel('搜索并选择问题')).toBeVisible();

  await page.getByLabel('搜索并选择问题').fill('边界和非法输入');
  await page.getByRole('option').first().click();
  await requestStarted;

  await page.getByLabel('搜索并选择问题').fill('有限资源');
  await page.getByRole('option').first().click();
  await expect.poll(() => new URL(page.url()).searchParams.get('question')).not.toBeNull();
  await expect.poll(() => new URL(page.url()).searchParams.get('question')).not.toBe('a-coding-abstraction-defensive-edge-cases');
  await expect(page.locator('#selected-question-title')).not.toBeEmpty();
  const latestId = new URL(page.url()).searchParams.get('question');
  const latestTitle = await page.locator('#selected-question-title').textContent();

  delayedResponseReleased();
  await page.waitForResponse('**/data/question/zh-CN/a-coding-abstraction-defensive-edge-cases.json');
  await expect(page.locator('#selected-question-title')).toHaveText(latestTitle!);
  await expect.poll(() => new URL(page.url()).searchParams.get('question')).toBe(latestId);
});

test('practice remains usable when browser storage and clipboard are unavailable', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { configurable: true, get() { throw new Error('blocked'); } });
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => { throw new Error('denied'); } } });
  });
  await page.goto('practice/?question=a-coding-abstraction-defensive-edge-cases');
  await page.getByRole('button', { name: '开始组织回答' }).click();
  await page.getByLabel('用自己的话自由作答').fill('我先验证了一个真实边界条件。');
  await expect(page.getByText(/浏览器无法保存|本机存储不可用/)).toBeVisible();
  await page.getByRole('button', { name: '复盘与反馈' }).last().click();
  await page.getByRole('button', { name: '生成外部分析请求' }).click();
  await page.getByRole('button', { name: '复制分析请求' }).click();
  await expect(page.getByText('自动复制不可用，分析请求已选中，可手动复制。')).toBeVisible();
  await expect(page.locator('#practice-prompt')).toBeFocused();
});
