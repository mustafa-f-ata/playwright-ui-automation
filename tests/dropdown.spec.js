import { test, expect } from '@playwright/test';

test('Select dropdown option', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/dropdown');

  await page.locator('#dropdown').selectOption('2');

  await expect(
      page.locator('#dropdown')
  ).toHaveValue('2');

});