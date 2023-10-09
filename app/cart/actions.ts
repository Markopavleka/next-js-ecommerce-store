'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';

type CartCookie = {
  id: number;
  quantity: number;
};
export default async function DeleteShirt(id: number) {
  const shirtItemCookie = getCookie('cart');

  const shirtsQuantity = !shirtItemCookie ? [] : parseJson(shirtItemCookie);
  console.log(shirtItemCookie);

  const updatedShirtsQuantity = shirtsQuantity.filter(
    (item: CartCookie) => item.id !== id,
  );

  await cookies().set('cart', JSON.stringify(updatedShirtsQuantity));

  return updatedShirtsQuantity.length;
}
