import { test, expect } from '@playwright/test';

test('product page visual test', async ({ page }) => {
  await page.goto('/product/1');
  
  // Wait for any animations or dynamic content to settle
  await page.waitForTimeout(1000);
  
  // Take a screenshot of the entire page
  await expect(page).toHaveScreenshot('product-page.png', {
    fullPage: true,
    maxDiffPixelRatio: 0.2
  });
});