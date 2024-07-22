import { test, expect } from '@playwright/test';

test('product page displays correct information', async ({ page }) => {
  // Navigate to the first product page
  await page.goto('/product/1');
  
  // Check the title
  await expect(page).toHaveTitle('Playwright Applitools Demo');
  
  // Check the product name
  const productName = page.locator('h1');
  await expect(productName).toHaveText('Product 1');
  
  // Check the product price
  const productPrice = page.locator('p').filter({ hasText: 'Price:' });
  await expect(productPrice).toContainText('$19.99');
  
  // Check the product description
  const productDescription = page.locator('p').filter({ hasText: 'This is product 1' });
  await expect(productDescription).toBeVisible();
});

test('navigating between products works correctly', async ({ page }) => {
  // Start on the homepage
  await page.goto('/');
  
  // Click on the second product
  await page.click('text=Product 2');
  
  // Check we're on the correct product page
  await expect(page).toHaveURL('/product/2');
  const productName = page.locator('h1');
  await expect(productName).toHaveText('Product 2');
});