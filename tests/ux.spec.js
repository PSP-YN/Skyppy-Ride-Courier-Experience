const { test, expect } = require('@playwright/test');

test('rider booking starts with route context and a visible journey stepper', async ({ page }) => {
  await page.goto('/app/?screen=ride-home');
  await expect(page.locator('.journey-progress')).toContainText('Step 1 of 8');
  await expect(page.locator('.route-visual')).toBeVisible();
  await expect(page.locator('.demo-form')).toBeVisible();
  const sizes = await page.evaluate(() => ({
    heading: parseFloat(getComputedStyle(document.querySelector('#screenMount h1')).fontSize),
    body: parseFloat(getComputedStyle(document.querySelector('.screen-intro p')).fontSize),
    input: parseFloat(getComputedStyle(document.querySelector('.demo-form input')).fontSize)
  }));
  expect(sizes.heading).toBeGreaterThanOrEqual(24);
  expect(sizes.body).toBeGreaterThanOrEqual(12);
  expect(sizes.input).toBeGreaterThanOrEqual(13);
});

test('rider can choose a vehicle before reviewing the ride', async ({ page }) => {
  await page.goto('/app/?screen=ride-options');
  const bike = page.locator('.choice-card').filter({ hasText: 'Bike' });
  await bike.click();
  await expect(bike).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.screen-actions button')).toContainText('Continue with Bike');
  await page.locator('.screen-actions button').click();
  await expect(page.locator('#screenMount h1')).toHaveText('Review before you confirm.');
  await expect(page.locator('.journey-progress')).toContainText('Step 3 of 8');
});

test('welcome screen gives first-time visitors a clear primary action', async ({ page }) => {
  await page.goto('/app/?screen=welcome');
  await expect(page.getByRole('button', { name: /Book a ride/ })).toBeVisible();
  await page.getByRole('button', { name: /Book a ride/ }).click();
  await expect(page.locator('#screenMount h1')).toHaveText('Where would you like to go?');
});

test('sender journey explains progress across shipment steps', async ({ page }) => {
  await page.goto('/app/?screen=sender-details');
  await expect(page.locator('.journey-progress')).toContainText('YOUR SHIPMENT');
  await expect(page.locator('.journey-progress')).toContainText('Step 2 of 6');
});

test('mobile app fits below the prototype banner without horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/app/?screen=ride-home');
  const metrics = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    document: document.documentElement.scrollWidth,
    phoneTop: document.querySelector('.phone-device').getBoundingClientRect().top,
    phoneBottom: document.querySelector('.phone-device').getBoundingClientRect().bottom,
    viewportHeight: window.innerHeight,
    navPosition: getComputedStyle(document.querySelector('.mobile-rolebar')).position
  }));
  expect(metrics.document).toBeLessThanOrEqual(metrics.viewport);
  expect(metrics.phoneBottom).toBeLessThanOrEqual(metrics.viewportHeight + 1);
  expect(metrics.navPosition).toBe('fixed');
});
