import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});


test.describe('Lorem ipsum', () => {
  test('Lorem ipsum', async ({ page }) => {

 

  });

});

