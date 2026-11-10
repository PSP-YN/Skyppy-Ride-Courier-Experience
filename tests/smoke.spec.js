const { test, expect } = require('@playwright/test');

test('root route is a product landing page with an app entry point', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Skyppy — Move with more clarity/);
  await expect(page.getByRole('heading', { name: /Your day moves/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Explore the experience/ })).toHaveAttribute('href', '/app/?screen=welcome');
  await expect(page.getByRole('link', { name: /Explore all app screens/ })).toHaveAttribute('href', '/app/?screen=welcome');
});

test('application opens in a mobile device preview with all 46 screens', async ({ page }) => {
  await page.goto('/app/');
  await expect(page).toHaveTitle(/Skyppy App/);
  await expect(page.getByRole('heading', { name: /A clearer way to move/ })).toBeVisible();
  const count = Number(await page.locator('#screenMount').getAttribute('data-screen-count'));
  expect(count).toBe(46);
  await expect(page.locator('.phone-device')).toBeVisible();
  await expect(page.locator('.device-status')).toContainText('9:41');
  await expect(page.locator('#screenMenuButton')).toBeVisible();
  await page.locator('#screenMenuButton').click();
  await expect(page.locator('#screenNavigation [data-go="ride-home"]')).toBeVisible();
});

test('all five workspaces are navigable', async ({ page }) => {
  await page.goto('/app/');
  const roles = [
    ['rider', 'Rider experience', 'ride-home'],
    ['driver', 'Driver partner', 'driver-dashboard'],
    ['sender', 'Sender workspace', 'sender-home'],
    ['receiver', 'Receiver workspace', 'receiver-home'],
    ['business', 'Business workspace', 'business-dashboard']
  ];
  for (const [role, title, screen] of roles) {
    await page.locator('.mobile-rolebar [data-role="' + role + '"]').click();
    await expect(page.locator('#workspaceName')).toHaveText(title);
    await expect(page.locator('#screenMount h1')).toBeVisible();
    await page.locator('#screenMenuButton').click();
    await expect(page.locator('#screenNavigation [data-go="' + screen + '"]')).toBeVisible();
  }
});

test('rider can move through the complete sample booking journey', async ({ page }) => {
  await page.goto('/app/?screen=ride-home');
  await page.locator('#screenMount .demo-form button[type="submit"]').click();
  await expect(page.locator('#screenMount h1')).toHaveText('Choose the ride that fits.');
  await page.locator('#screenMount [data-go="ride-review"]').first().click();
  await expect(page.locator('#screenMount h1')).toHaveText('Review before you confirm.');
  await page.locator('#screenMount [data-go="ride-matching"]').click();
  await page.locator('#screenMount [data-go="ride-driver"]').click();
  await page.locator('#screenMount [data-go="ride-live"]').click();
  await page.locator('#screenMount [data-go="ride-payment"]').click();
  await page.locator('#screenMount [data-go="ride-rating"]').first().click();
  await expect(page.locator('#screenMount h1')).toHaveText('How was your ride?');
});

test('driver journey covers request, pickup and trip completion screens', async ({ page }) => {
  await page.goto('/app/?screen=driver-dashboard');
  await page.locator('#screenMount [data-go="driver-request"]').first().click();
  await page.locator('#screenMount [data-go="driver-navigation"]').click();
  await page.locator('#screenMount [data-go="driver-trip"]').click();
  await page.locator('#screenMount [data-go="driver-earnings"]').first().click();
  await expect(page.locator('#screenMount h1')).toHaveText('Your earnings, clearly shown.');
});

test('receiver rejects an incorrect demo PIN', async ({ page }) => {
  await page.goto('/app/?screen=receiver-verify');
  await page.locator('#field-1').fill('0000');
  await page.locator('#field-3').check();
  await page.locator('#screenMount .demo-form button[type="submit"]').click();
  await expect(page.locator('#toast')).toContainText('does not match');
  await expect(page.locator('#screenMount h1')).toHaveText('Confirm the right parcel.');
});

test('receiver confirms only the correct demo handover', async ({ page }) => {
  await page.goto('/app/?screen=receiver-verify');
  await page.locator('#field-1').fill('4821');
  await page.locator('#field-3').check();
  await page.locator('#screenMount .demo-form button[type="submit"]').click();
  await expect(page.locator('#screenMount h1')).toHaveText('Receipt recorded in the demo.');
  await expect(page.locator('#screenMount')).toContainText('SKP-DEMO-2401');
});

test('receiver routes damaged parcel to issue reporting, not receipt', async ({ page }) => {
  await page.goto('/app/?screen=receiver-verify');
  await page.locator('#field-1').fill('4821');
  await page.locator('#field-2').selectOption({ label: 'Package damaged' });
  await page.locator('#field-3').check();
  await page.locator('#screenMount .demo-form button[type="submit"]').click();
  await expect(page.locator('#screenMount h1')).toHaveText('Something isn’t right?');
});

test('business workspace exposes operations, analytics and billing', async ({ page }) => {
  await page.goto('/app/?screen=business-dashboard');
  await expect(page.locator('#screenMount h1')).toHaveText('Your shipments, at a glance.');
  await page.locator('#screenMenuButton').click();
  await page.locator('#screenNavigation [data-go="business-shipments"]').click();
  await expect(page.locator('#screenMount table')).toBeVisible();
  await page.locator('#screenMenuButton').click();
  await page.locator('#screenNavigation [data-go="business-analytics"]').click();
  await expect(page.locator('#screenMount')).toContainText('Sample on-time');
  await page.locator('#screenMenuButton').click();
  await page.locator('#screenNavigation [data-go="business-billing"]').click();
  await expect(page.locator('#screenMount')).toContainText('INV-DEMO-108');
});


test('desktop app presentation is a phone-sized viewport, not a desktop dashboard', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/app/');
  const device = await page.locator('.phone-device').boundingBox();
  expect(device.width).toBeLessThanOrEqual(420);
  expect(device.width).toBeGreaterThanOrEqual(380);
  await expect(page.locator('.mobile-rolebar')).toBeVisible();
  await page.locator('#screenMenuButton').click();
  await page.locator('#screenNavigation [data-go="ride-history"]').click();
  await expect(page.locator('#screenMount h1')).toHaveText('Your recent rides.');
});

test('app is usable at a 320px viewport without document overflow', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto('/app/');
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth
  }));
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
});

test('landing page is responsive at a 320px viewport', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto('/');
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth
  }));
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
});
