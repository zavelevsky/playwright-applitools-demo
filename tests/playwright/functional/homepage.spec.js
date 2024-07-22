import { test, expect } from '@playwright/test';

test('homepage has correct title and products', async ({ page }) => {
  await page.goto('/');
  
  // Check the title
  await expect(page).toHaveTitle('Playwright Applitools Demo');
  
  // Check the main heading
  await expect(page.getByRole('heading', { name: 'Welcome to our Store', level: 1 })).toBeVisible();
  
  // Check that we have a list of products
  const productList = page.getByRole('list');
  await expect(productList).toBeVisible();
  
  // Check that we have exactly three products
  const products = productList.getByRole('listitem');
  await expect(products).toHaveCount(3);
  
  // Check the first product
  const firstProduct = products.first();
  await expect(firstProduct).toContainText('Product 1');
  await expect(firstProduct).toContainText('$19.99');
});