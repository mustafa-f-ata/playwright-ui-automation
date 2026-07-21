import { test, expect } from '@playwright/test';

test('Double click button', async ({ page }) => {

    await page.goto('https://demoqa.com/buttons');

    await page.getByRole('button', { name: 'Double Click Me' }).dblclick();

     await expect(
    page.locator('#doubleClickMessage')
).toHaveText('You have done a double click');

});