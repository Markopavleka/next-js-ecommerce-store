import Link from 'next/link';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import { getShirts } from '../database/shirts';
import style from './page.module.scss';

export default async function cartFunction() {
  const shirtItemCookie = getCookie('shirtQuantity');
  const shirtsQuantity = !shirtItemCookie ? [] : parseJson(shirtItemCookie);
  const shirts = await getShirts();

  const shirtsInCart = shirts.map((shirt) => {
    const matchingShirtsFromCookie = shirtsQuantity.find(
      (shirtQuantity) => shirt.id === shirtQuantity.id,
    );
    return { ...shirt, quantity: matchingShirtsFromCookie?.quantity };
  });

  const shirtsWithQuantity = shirtsInCart.filter((shirtInCart) => {
    return shirtInCart.quantity >= 1;
  });

  const totalPrice = shirtsWithQuantity.reduce((sum, shirt) => {
    const itemTotal = parseFloat(shirt.price * shirt.quantity);
    sum += itemTotal;
    return sum;
  }, 0);

  const priceWithoutTaxes = (totalPrice / 1.2).toFixed(2);
  const tax = (totalPrice - priceWithoutTaxes).toFixed(2);

  console.log(shirts);
  return (
    <div className={style.cartBody}>
      {shirtsWithQuantity.map((shirt) => {
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
          </div>
        );
      })}
      <p>Price without Taxes: {priceWithoutTaxes} €</p>
      <p>Tax: {tax} €</p>
      <p>Total price: {totalPrice} €</p>
      <Link href="/checkout" className={style.checkoutLink}>
        Checkout
      </Link>
    </div>
  );
}
