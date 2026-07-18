import { test, expect } from '@playwright/test';

test('User can login with valid credentials', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

await expect(
    page.locator('.title')
).toBeVisible();

await expect(
    page.locator('.title')
).toHaveText('Products');

await expect(page.locator('.title')).toContainText('Prod');
await expect(
    page.locator('.inventory_item')
).toHaveCount(6);

const firstProduct = page.locator('.inventory_item').first();

await expect(
    firstProduct.locator('.inventory_item_name')
).toHaveText('Sauce Labs Backpack');

const lastProduct = page.locator('.inventory_item').last()

await expect(
lastProduct.locator('.inventory_item_name')
).toHaveText('Test.allTheThings() T-Shirt (Red)');

const secondProduct = page.locator('.inventory_item').nth(1)
await expect (

  secondProduct.locator('.inventory_item_name')
).toHaveText('Sauce Labs Bike Light');



});