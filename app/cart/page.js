import Link from 'next/link';
import { allShirts } from './CartUtil';
import style from './page.module.scss';

export default function Cart() {
  const totalPrice = allShirts.reduce((sum, shirt) => {
    const itemTotal = parseFloat(shirt.price * shirt.quantity);
    sum += itemTotal;
    return sum;
  }, 0);
  const priceWithoutTaxes = (totalPrice / 1.2).toFixed(2);
  const tax = (totalPrice - priceWithoutTaxes).toFixed(2);

  return (
    <div className={style.cartBody}>
      {allShirts.map((shirt) => {
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
