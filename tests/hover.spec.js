import { test, expect } from '@playwright/test';

test('Verify hover information for first and second users', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/hovers');

    const firstImage = page.locator('.figure').first();

    await firstImage.hover();

    await expect(
        firstImage.locator('.figcaption')
    ).toBeVisible();

    await expect(
        firstImage.locator('.figcaption h5')
    ).toHaveText('name: user1');

    const secondImage = page.locator('.figure').nth(1);

    await secondImage.hover();

    await expect(
        secondImage.locator('.figcaption')
    ).toBeVisible();

    await expect(
        secondImage.locator('.figcaption h5')
    ).toHaveText('name: user2');



});