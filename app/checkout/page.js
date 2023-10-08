// A Checkout page which shows the total and asks for shipping and payment information

// Privacy: don't save user information (payment or other personal information) anywhere (unless you have a privacy policy and are creating a real ecommerce store)
//  Clicking on the Confirm Order button should empty the cart and navigate to the Thank You page

import Head from 'next/head';
import Link from 'next/link';
import { getShirts } from '../../database/shirts';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import DeleteButton from './DeleteButton';
import style from './page.module.scss';

export default async function Checkout() {
  const cartItemsCookie = getCookie('shirtQuantity');
  const cartItemQuantities = !cartItemsCookie ? [] : parseJson(cartItemsCookie);

  const shirtList = await getShirts();

  const cartItemsWithQuantities = shirtList.map((shirt) => {
    const matchingShirtsFromCookie = cartItemQuantities.find(
      (shirtQuantity) => shirt.id === shirtQuantity.id,
    );
    return { ...shirt, quantity: matchingShirtsFromCookie?.quantity };
  });

  const cartItemsWithQuantityGreaterThanOne = cartItemsWithQuantities.filter(
    (shirtInCart) => {
      return shirtInCart.quantity >= 1;
    },
  );

  const cartTotalPrice = cartItemsWithQuantityGreaterThanOne.reduce(
    (sum, shirt) => {
      const itemTotal = parseFloat(shirt.price * shirt.quantity);
      sum += itemTotal;
      return sum;
    },
    0,
  );
  const priceWithoutTaxes = (cartTotalPrice / 1.2).toFixed(2);
  const taxAmount = (cartTotalPrice - priceWithoutTaxes).toFixed(2);
  return (
    <div>
      <Head>
        <title>三刀流 || Checkout Page</title>
        <meta
          name="description"
          content="Complete your order and provide shipping and payment information."
        />
      </Head>

      <div className={style.checkoutContainer}>
        <p>Price without Tax: {priceWithoutTaxes} €</p>
        <p>Tax: {taxAmount} €</p>
        <p>Total price: {cartTotalPrice} €</p>
        <input
          className={style.inputField}
          placeholder="first name"
          data-test-id="checkout-first-name"
          required
        />
        <input
          className={style.inputField}
          placeholder="last name"
          data-test-id="checkout-last-name"
          required
        />
        <input
          className={style.inputField}
          type="email"
          placeholder="e-mail"
          data-test-id="checkout-email"
          required
        />
        <input
          className={style.inputField}
          placeholder="address"
          data-test-id="checkout-address"
          required
        />
        <input
          className={style.inputField}
          placeholder="city"
          data-test-id="checkout-city"
          required
        />
        <input
          className={style.inputField}
          type="number"
          placeholder="Postal Code"
          data-test-id="checkout-postal-code"
          maxLength={6}
          required
        />
        <input
          className={style.inputField}
          placeholder="country"
          data-test-id="checkout-country"
          required
        />
        <input
          className={style.inputField}
          type="date"
          placeholder="expiration date"
          data-test-id="checkout-credit-card"
          required
        />
        <input
          className={style.inputField}
          placeholder="credit card"
          data-test-id="checkout-expiration-date"
          type="number"
          required
        />
        <input
          className={style.inputField}
          placeholder="cvc"
          data-test-id="checkout-security-code"
          type="number"
          maxLength={3}
          required
        />
        <Link href="/checkout/order">
          <DeleteButton
            data-test-id="checkout-confirm-order"
            className={style.submitButton}
          >
            order now
          </DeleteButton>
        </Link>
      </div>
    </div>
  );
}
