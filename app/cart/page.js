import Head from 'next/head';
import Link from 'next/link';
import { getShirts } from '../../database/shirts';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import DeleteButton from './DeleteButton';
import style from './page.module.scss';

export default async function Cart() {
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
        <title>三刀流 || Shopping Cart</title>
        <meta
          name="description"
          content="Review and edit the items in your shopping cart before proceeding to checkout."
        />
      </Head>
      <div className={style.cartBody}>
        {cartItemsWithQuantityGreaterThanOne.map((shirt) => {
          return (
            <div key={`shirt-${shirt.id}`} className={style.cartItem}>
              <h3 className={style.itemDescription}>{shirt.description}</h3>
              <p className={style.itemQuantity}>Quantity: {shirt.quantity}</p>
              <p className={style.itemPrice}>
                Price: {shirt.price} {shirt.currency}
              </p>
              <p className={style.itemSubtotal}>
                Subtotal Price: {shirt.price * shirt.quantity} €
              </p>
              <DeleteButton />
            </div>
          );
        })}
        <p>Price without Tax: {priceWithoutTaxes} €</p>
        <p>Tax: {taxAmount} €</p>
        <p>Total price: {cartTotalPrice} €</p>
        <Link href="/checkout" className={style.checkoutLink}>
          Checkout
        </Link>
      </div>
    </div>
  );
}
