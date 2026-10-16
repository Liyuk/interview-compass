import { test as base, expect } from '@playwright/test';

// Existing journeys choose all mode; target onboarding is covered in fresh-context suites.
export const test = base.extend({
  page: async ({ page }, use) => {
    await page.addInitScript(() => localStorage.setItem('interview-compass.target.v1', JSON.stringify({ version: 1, mode: 'all' })));
    await use(page);
  },
});
export { expect };
