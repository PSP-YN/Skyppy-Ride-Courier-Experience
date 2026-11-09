const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

const tab = key => `.app-tabbar [data-view="${key}"]`;

test('all five primary journey areas are navigable', async ({ page }) => {
  const journeys = [
    ['ride', '#v-ride'],
    ['courier', '#v-courier'],
    ['driver', '#v-driver'],
    ['receiver', '#v-receiver'],
    ['business', '#v-business']
  ];

  for (const [key, selector] of journeys) {
    await page.locator(tab(key)).click();
    await expect(page.locator(selector)).toBeVisible();
  }
});

test('ride vehicle selection updates the sample fare', async ({ page }) => {
  await page.locator('[data-ride="Bike"]').click();
  await expect(page.locator('#ridePrice')).toHaveText('₹69');
  await expect(page.locator('#rideTotal')).toHaveText('₹69');
});

test('driver demo reaches trip completion', async ({ page }) => {
  await page.locator(tab('driver')).click();
  await page.locator('#accept').click();
  await page.locator('#driverStep').click(); // arrived
  await page.locator('#driverStep').click(); // trip started
  await page.locator('#driverStep').click(); // trip completed
  await expect(page.locator('#driverTitle')).toHaveText('Trip completed');
});

test('receiver rejects an incorrect PIN', async ({ page }) => {
  await page.locator(tab('receiver')).click();
  await page.locator('#pin').fill('0000');
  await page.locator('#handover').check();
  await page.locator('#confirmReceipt').click();
  await expect(page.locator('#receiverMsg')).toContainText('PIN does not match');
  await expect(page.locator('#podReceipt')).toBeHidden();
});

test('receiver demo PIN confirms the simulated handover and receipt', async ({ page }) => {
  await page.locator(tab('receiver')).click();
  await expect(page.getByText('SKP-DEMO-2401')).toBeVisible();
  await page.locator('#pin').fill('4821');
  await page.locator('#handover').check();
  await page.locator('#confirmReceipt').click();
  await expect(page.locator('#podReceipt')).toBeVisible();
  await expect(page.locator('#podDetails')).toContainText('SKP-DEMO-2401');
  await expect(page.locator('#receiverMsg')).toContainText('demo');
});

test('business dashboard adds a local sample row', async ({ page }) => {
  await page.locator(tab('business')).click();
  await expect(page.locator('#count')).toHaveText('4');
  await page.locator('#addRow').click();
  await expect(page.locator('#count')).toHaveText('5');
});

test('mobile layout has no document-wide horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.reload();
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth
  }));
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
});
