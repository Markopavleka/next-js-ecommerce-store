'use server';
import { getCookie, setCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';

export default async function DeleteShirt(id) {
  const shirtItemCookie = getCookie('shirtQuantity');

  const shirtsQuantity1 = !shirtItemCookie ? [] : parseJson(shirtItemCookie);
  console.log(shirtItemCookie);

  const updatedShirtsQuantity = shirtsQuantity1.filter(
    (item) => item.id !== id,
  );

  await setCookie('shirtQuantity', JSON.stringify(updatedShirtsQuantity));

  return updatedShirtsQuantity.length;
}
