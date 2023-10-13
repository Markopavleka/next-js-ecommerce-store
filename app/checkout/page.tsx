// A Checkout page which shows the total and asks for shipping and payment information

// Privacy: don't save user information (payment or other personal information) anywhere (unless you have a privacy policy and are creating a real ecommerce store)
//  Clicking on the Confirm Order button should empty the cart and navigate to the Thank You page

import Head from 'next/head';
import { getShirts } from '../../database/shirts';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
// import DeleteButton from './DeleteButton';
import Form from './Form';

type CartItems = {
  id: number;
  quantity: number;
  price: number;
};

export default async function Checkout() {
  const cartItemsCookie = getCookie('cart');
  const cartItemQuantities = !cartItemsCookie ? [] : parseJson(cartItemsCookie);

  const shirtList = await getShirts();

  const cartItemsWithQuantities = shirtList.map((shirt) => {
    const matchingShirtsFromCookie = cartItemQuantities.find(
      (shirtQuantity: CartItems) => shirt.id === shirtQuantity.id,
    );
    return { ...shirt, quantity: matchingShirtsFromCookie?.quantity };
  });

  const cartItemsWithQuantityGreaterThanOne = cartItemsWithQuantities.filter(
    (shirtInCart) => {
      return shirtInCart.quantity >= 1;
    },
  );

  const cartTotalPrice = cartItemsWithQuantityGreaterThanOne.reduce(
    (sum: number, shirt: CartItems) => {
      const itemTotal = shirt.price * shirt.quantity;
      sum += itemTotal;
      return sum;
    },
    0,
  );

  const priceWithoutTaxes: number = Number((cartTotalPrice / 1.2).toFixed(2));
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

      <Form />

      <div className="card w-96 bg-base-200 shadow-xl mx-auto p-4 my-4">
        <div className="card-body bg-base-200">
          <p>Price without Tax: {priceWithoutTaxes} €</p>
          <p>Tax: {taxAmount} €</p>
          <p>Total price: {cartTotalPrice} €</p>
        </div>
      </div>
    </div>
  );
}
