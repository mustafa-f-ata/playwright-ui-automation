import { test, expect } from '@playwright/test';

test('Select first checkbox', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const firstCheckbox = page.locator('input[type="checkbox"]').first();

    await firstCheckbox.check();

    await expect(firstCheckbox).toBeChecked();

});

import { test, expect } from '@playwright/test';

test('Select first checkbox', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const firstCheckbox = page.locator('input[type="checkbox"]').first();
    const secondCheckbox = page.locator('input[type="checkbox"]').nth(1);


    await firstCheckbox.check();
    await secondCheckbox.uncheck();

    await expect(firstCheckbox).toBeChecked();
    await expect(secondCheckbox).not.toBeChecked();

});
    


