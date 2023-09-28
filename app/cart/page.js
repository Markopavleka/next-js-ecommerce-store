import { shirts } from '../database/shirts';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

export default function cart() {
  const shirtItemCookie = getCookie('shirtQuantity');
  const shirtsQuantity = !shirtItemCookie ? [] : parseJson(shirtItemCookie);

  const shirtInCart = shirts.map((shirt) => {
    const matchingShirtsFromCookie = shirtsQuantity.find(
      (shirtQuantity) => shirt.id === shirtQuantity.id,
    );
    return { ...shirt, quantity: matchingShirtsFromCookie?.quantity };
  });
  console.log(shirtInCart);

  return (
    <div>
      {shirtInCart.map((shirt) => {
        return (
          <div key={`shirt-${shirt.id}`}>
            <h1>
              {shirt.description} {shirt.quantity}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
