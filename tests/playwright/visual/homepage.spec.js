import { test, expect } from '@playwright/test';

test('homepage visual test', async ({ page }) => {
  await page.goto('/');
  
  // Wait for any animations or dynamic content to settle
  await page.waitForTimeout(1000);
  
  // Take a screenshot of the entire page
  await expect(page).toHaveScreenshot('homepage.png', {
    fullPage: true,
    // Adjust threshold as needed. 0.2 means 20% pixel difference is allowed.
    maxDiffPixelRatio: 0.2
  });
});