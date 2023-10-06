import { getShirts } from '../../app/database/shirts';
import { getCookie } from './cookies';
import { parseJson } from './json';

const shirtItemCookie = getCookie('shirtQuantity');
const shirtsQuantity = !shirtItemCookie ? [] : parseJson(shirtItemCookie);

export async function getCartItems() {
  const shirts = await getShirts();

  const shirtsInCart = shirts.map((shirt) => {
    const matchingShirtsFromCookie = shirtsQuantity.find(
      (shirtQuantity) => shirt.id === shirtQuantity.id,
    );
    return { ...shirt, quantity: matchingShirtsFromCookie?.quantity };
  });

  return shirtsInCart.filter((shirtInCart) => {
    return shirtInCart.quantity >= 1;
  });
}

export const allShirts = await getCartItems();

export const removeShirtById = (shirtIdToDelete) => {
  const updatedShirts = allShirts.filter(
    (shirt) => shirt.id !== shirtIdToDelete,
  );
  return updatedShirts;
};
