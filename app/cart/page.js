import Link from 'next/link';
import { getShirts } from '../database/shirts';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

export default async function cart() {
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

  return (
    <div>
      {shirtsWithQuantity.map((shirt) => {
        return (
          <div key={`shirt-${shirt.id}`}>
            <h3>{shirt.description}</h3>
            <p>Quantity: {shirt.quantity}</p>
            <p>
              Price: {shirt.price} {shirt.currency}
            </p>
            <p>Subtotal Price: {shirt.price * shirt.quantity} €</p>
          </div>
        );
      })}

      <Link href="/checkout">Checkout</Link>
    </div>
  );
}
