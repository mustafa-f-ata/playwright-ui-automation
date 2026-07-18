import { test, expect } from '@playwright/test';

test('Locator examples', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // ID ile
  await page.locator('#user-name').fill('standard_user');

  // data-test ile
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Role ile
  await page.getByRole('button', { name: 'Login' }).click();

  // URL doğrulama
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});