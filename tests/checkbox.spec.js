import { test, expect } from '@playwright/test';

test('Select first checkbox', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const firstCheckbox = page.locator('input[type="checkbox"]').first();

    await firstCheckbox.check();

    await expect(firstCheckbox).toBeChecked();

});
    


