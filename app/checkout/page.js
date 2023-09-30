// A Checkout page which shows the total and asks for shipping and payment information

// The address input needs to have the HTML attribute data-test-id="checkout-address"
// The city input needs to have the HTML attribute data-test-id="checkout-city"
// The postal code input needs to have the HTML attribute data-test-id="checkout-postal-code"
// The country input needs to have the HTML attribute data-test-id="checkout-country"
// The credit card input needs to have the HTML attribute data-test-id="checkout-credit-card"
// The expiration date input needs to have the HTML attribute data-test-id="checkout-expiration-date"
// The security code input needs to have the HTML attribute data-test-id="checkout-security-code"
// The form should prevent submission with any of the above fields being empty
// The Confirm Order button needs to have the HTML attribute data-test-id="checkout-confirm-order"
// Privacy: don't save user information (payment or other personal information) anywhere (unless you have a privacy policy and are creating a real ecommerce store)
//  Clicking on the Confirm Order button should empty the cart and navigate to the Thank You page

export default function checkout() {
  return (
    <div>
      <input
        placeholder="First Name"
        data-test-id="checkout-first-name"
        required
      />
      <input
        placeholder="Last Name"
        data-test-id="checkout-last-name"
        required
      />
      <input
        type="email"
        placeholder="E-Mail"
        data-test-id="checkout-email"
        required
      />
      <input placeholder="Adress" data-test-id="checkout-address" required />
    </div>
  );
}
