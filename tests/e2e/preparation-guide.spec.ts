import {expect,test} from '@playwright/test';

test('a new visitor reads the capability framework before choosing a target',async({page})=>{
 await page.goto('guide/');
 await expect(page.locator('#primary-navigation a')).toHaveCount(3);
 await expect(page.locator('[data-profile-dialog]')).not.toBeVisible();
 await page.locator('main').getByRole('link',{name:'理解能力框架',exact:true}).first().click();
 await expect(page.locator('main h1')).toHaveText('理解能力框架');
 await page.locator('main').getByRole('link',{name:'确定准备方向',exact:true}).first().click();
 await expect(page.locator('main h1')).toHaveText('确定准备方向');
 await page.getByRole('button',{name:'选择准备或评估目标',exact:true}).click();
 await expect(page.locator('[data-profile-dialog]')).toBeVisible();
 await page.locator('#profile-role').selectOption('frontend');
 await page.locator('#profile-stage').selectOption('senior-engineer');
 await page.locator('[data-profile-apply]').click();
 await expect(page.locator('[data-profile-dialog]')).not.toBeVisible();
 await page.locator('main').getByRole('link',{name:'进入面试题库',exact:true}).click();
 await expect(page.locator('[data-profile-label]')).toContainText('高级工程师');
});

test('global search is neutral and preparation documents share their board in both languages',async({page})=>{
 await page.setViewportSize({width:1440,height:900});
 for(const prefix of ['', 'en/']){
  for(const route of ['guide/','handbook/','framework/','capability-model/','browse/','roles/frontend/']){
   await page.goto(`${prefix}${route}`);
   await expect(page.locator('#primary-navigation [aria-current=page]')).toHaveAttribute('href',new RegExp(`/${prefix}guide/`));
   await expect(page.locator('[data-wiki-sidebar]')).toBeVisible();
   await expect(page.locator('.breadcrumbs')).toContainText(prefix ? 'Preparation guide' : '准备指南');
  }
  await page.goto(`${prefix}search/?q=rollback`);
  await expect(page.locator('#primary-navigation [aria-current=page]')).toHaveCount(0);
  await expect(page.locator('[data-search-scope]')).toHaveCount(3);
  await expect(page.locator('#site-search')).toBeVisible();
  await expect(page.locator('#filters input[name=q]')).toBeHidden();
 }
});

test('the shared header searches the whole site from a filtered question library',async({page})=>{
 await page.goto('questions/?topic=system-design&profile=all');
 await page.locator('#site-search').fill('使用说明');
 await page.locator('.search-form').getByRole('button',{name:'搜索',exact:true}).click();
 await expect(page).toHaveURL(/\/search\//);
 expect(new URL(page.url()).searchParams.has('topic')).toBe(false);
 await expect(page.locator('#document-results').getByRole('link',{name:/使用说明/}).first()).toBeVisible();
});

test('search scope links retain the keyword and linked target after changing the query',async({page})=>{
 await page.goto('search/?q=rollback&profile=all');
 const docs = page.locator('[data-search-scope=docs]');
 await expect(docs).toHaveAttribute('href',/q=rollback/);
 await page.locator('#site-search').fill('使用说明');
 await page.locator('.search-form').getByRole('button',{name:'搜索',exact:true}).click();
 await expect(docs).toHaveAttribute('href',/q=%E4%BD%BF/);
 if (!await docs.isVisible()) await page.locator('[data-wiki-disclosure] > summary').click();
 await docs.click();
 expect(new URL(page.url()).searchParams.get('q')).toBe('使用说明');
 expect(new URL(page.url()).searchParams.get('profile')).toBe('all');
 await expect(page.locator('#document-results').getByRole('link',{name:/使用说明/}).first()).toBeVisible();
});
