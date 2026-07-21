import { test, expect } from '@playwright/test';

test('Right Click Me Right Button', async ({ page }) => {

    await page.goto('https://demoqa.com/buttons');

    await page.getByRole('button', { name: 'Right Click Me' }).click({
        button: 'right'
    });

    await expect(
        page.locator('#rightClickMessage')
    ).toHaveText('You have done a right click');

});