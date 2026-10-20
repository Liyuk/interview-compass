import { expect, test } from '@playwright/test';

test('readers change boards through global navigation and see only local entries', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('handbook/');
  const tree = page.getByRole('navigation', { name: '板块目录', exact: true });
  await expect(tree).toBeVisible();
  await expect(tree.getByRole('link', { name: '使用说明', exact: true })).toHaveAttribute('aria-current', 'page');
  await expect(tree.getByRole('link', { name: '提问框架', exact: true })).toBeVisible();
  await tree.getByRole('link', { name: '提问框架', exact: true }).click();
  await expect(page).toHaveURL(/\/framework\/$/);
  await expect(page.locator('main h1')).toBeVisible();
  await expect(page.getByRole('navigation', { name: '板块目录', exact: true }).getByRole('link', { name: '提问框架', exact: true })).toHaveAttribute('aria-current', 'page');
});

test('a directly opened question exposes its permanent knowledge path', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('questions/prioritization-limited-resources/');
  const tree = page.getByRole('navigation', { name: '板块目录', exact: true });
  const parent = tree.locator('a[href="/interview-compass/capabilities/value-direction/prioritization/"]');
  await expect(parent).toBeVisible();
  await parent.click();
  await expect(page).toHaveURL(/\/capabilities\/value-direction\/prioritization\/$/);
  await expect(page.locator('main h1')).toBeVisible();
});

test('mobile bilingual document navigation opens and returns keyboard focus', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const prefix of ['', 'en/']) {
    await page.goto(`${prefix}handbook/`);
    const disclosure = page.locator('[data-wiki-disclosure]');
    await expect(disclosure).not.toHaveAttribute('open', '');
    const trigger = disclosure.locator(':scope > summary');
    await trigger.click();
    const tree = page.getByRole('navigation', { name: prefix ? 'Section navigation' : '板块目录', exact: true });
    await expect(tree).toBeVisible();
    await expect(tree.getByRole('link', { name: prefix ? 'How to use' : '使用说明', exact: true })).toHaveAttribute('href', `/interview-compass/${prefix}handbook/`);
    await page.keyboard.press('Escape');
    await expect(disclosure).not.toHaveAttribute('open', '');
    await expect(trigger).toBeFocused();
  }
});

test('question lists and articles keep the same local board navigation', async ({ page }) => {
  await page.setViewportSize({width:1440,height:900});
  for (const prefix of ['', 'en/']) {
    const board = page.locator('[data-wiki-sidebar]');
    await page.goto(`${prefix}questions/?profile=all`);
    await expect(board).toBeVisible();
    const links = await board.locator('.document-tree-list a').evaluateAll(nodes=>nodes.map(node=>new URL((node as HTMLAnchorElement).href).pathname));
    expect(links).toContain(`/interview-compass/${prefix}collections/`);
    expect(links).not.toContain(`/interview-compass/${prefix}handbook/`);
    const before = await board.boundingBox();
    await page.goto(`${prefix}questions/prioritization-limited-resources/?profile=all`);
    await expect(board).toBeVisible();
    expect(await board.locator('.document-tree-list a').evaluateAll(nodes=>nodes.map(node=>new URL((node as HTMLAnchorElement).href).pathname))).toEqual(links);
    expect((await board.boundingBox())!.x).toBe(before!.x);
    await expect(board.locator('a[href*="/capabilities/value-direction/prioritization/"]')).toBeVisible();
    await expect(page.locator('#primary-navigation a')).toHaveCount(3);
  }
});
