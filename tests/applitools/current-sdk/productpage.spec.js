import { test } from '@playwright/test';
import { ClassicRunner, Eyes, Target, Configuration } from '@applitools/eyes-playwright';

test.describe('Applitools Visual Tests', () => {
  let eyes;
  let runner;

  test.beforeAll(async () => {
    runner = new ClassicRunner();
  });

  test.beforeEach(async ({ page }) => {
    eyes = new Eyes(runner);
    const configuration = new Configuration();
    configuration.setAppName('Playwright Applitools Demo');
    configuration.setTestName(test.info().title);
    await eyes.setConfiguration(configuration);
    await eyes.open(page);
  });

  test('Product Page', async ({ page }) => {
    await page.goto('/product/1');
    await eyes.check('Product Page', Target.window().fully());
  });

  test.afterEach(async () => {
    await eyes.closeAsync();
  });

  test.afterAll(async () => {
    const results = await runner.getAllTestResults();
    console.log(results);
  });
});