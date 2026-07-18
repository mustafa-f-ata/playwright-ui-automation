import { test, expect } from '@playwright/test';

test('Button should be enabled', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await expect(
    page.locator('[data-test="login-button"]')
  ).toBeEnabled();

});