// A Checkout page which shows the total and asks for shipping and payment information

// The form should prevent submission with any of the above fields being empty
// The Confirm Order button needs to have the HTML attribute data-test-id="checkout-confirm-order"
// Privacy: don't save user information (payment or other personal information) anywhere (unless you have a privacy policy and are creating a real ecommerce store)
//  Clicking on the Confirm Order button should empty the cart and navigate to the Thank You page

import style from './page.module.scss';

export default function Checkout() {
  return (
    <div className={style.checkoutContainer}>
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
      <button className={style.submitButton}>Submit</button>
    </div>
  );
}
