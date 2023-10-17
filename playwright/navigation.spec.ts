import test, { expect } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // go to shop
  await expect(page.getByRole('link', { name: 'Shop now' })).toBeVisible();
  await page.getByRole('link', { name: 'Shop now' }).click();
  await page.waitForURL('http://localhost:3000/shop');
  await expect(page).toHaveURL('http://localhost:3000/shop');
  await expect(page.getByTestId('product-3')).toBeVisible();
  // select the first product
  await page.getByTestId('product-3').click();
  await page.waitForURL('http://localhost:3000/shop/3');
  await expect(page).toHaveURL('http://localhost:3000/shop/3');
  await expect(page.getByRole('spinbutton')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveCount(1);
  await page.getByRole('spinbutton').fill('4');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: '4' }).click();
  await expect(page.getByText('4 Items')).toBeVisible();
  // go to the main shop again
  await page.getByRole('button').first().click();
  await page.getByRole('link', { name: 'Shop' }).click();
  await page.waitForURL('http://localhost:3000/shop');
  await expect(page).toHaveURL('http://localhost:3000/shop');
  // select the second product
  await page.getByTestId('product-1').click();
  await page.waitForURL('http://localhost:3000/shop/1');
  await expect(page).toHaveURL('http://localhost:3000/shop/1');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  // go to cart
  await page.getByRole('button', { name: '5' }).click();
  await page.getByRole('link', { name: 'View cart' }).click();
  await page.waitForURL('http://localhost:3000/cart');
  await expect(page).toHaveURL('http://localhost:3000/cart');
  // remove one product
  await page.getByTestId('cart-product-remove-<product id>').first().click();
  await expect(
    page.getByText('Mini Logo WhiteQuantity: 1Price: 48€Subtotal: 48 €Remove'),
  ).toBeHidden();
  // see if price is visible
  await expect(page.getByText('Price without Tax: 133.33 €')).toBeVisible();
  await expect(page.getByText('Tax: 26.67 €')).toBeVisible();
  await expect(page.getByText('Total price: 160 €')).toBeVisible();

  // checkout process
  await page.getByRole('link', { name: 'Checkout' }).click();
  await page.waitForURL('http://localhost:3000/checkout');
  await expect(page).toHaveURL('http://localhost:3000/checkout');

  await page.getByTestId('checkout-first-name').fill('marko');
  await page.getByTestId('checkout-last-name').fill('pavleka');
  await page.getByTestId('checkout-email').fill('mp@gmx.at');
  await page.getByTestId('checkout-address').fill('otk street');
  await page.getByTestId('checkout-city').fill('vienna');
  await page.getByTestId('checkout-postal-code').fill('1170');
  await page.getByTestId('checkout-country').fill('austria');

  await page.getByTestId('checkout-expiration-date').fill('12343564567');
  await page.getByTestId('checkout-credit-card').fill('1997-07-28');
  await page.getByTestId('checkout-security-code').fill('117');
  await page.getByTestId('checkout-confirm-order').click();
  // thx for your order page
  await page.waitForURL('http://localhost:3000/order');
  await expect(page).toHaveURL('http://localhost:3000/order');
});
// pnpm playwright test
