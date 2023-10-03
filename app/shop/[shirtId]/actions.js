'use server';

// Case A: cookie is undefined
// Case B: cookie is defined but have the fruit id
// Case C: cookie is defined but doesn't have the fruit id

import { cookies } from 'next/headers';
import { getCookie } from '../../../public/util/cookies';
import { parseJson } from '../../../public/util/json';

export async function createOrUpdateItem(shirtId, quantity) {
  // 1. get the current cookie
  const shirtItemCookie = getCookie('shirtQuantity');
  // 2. parse the cookie value

  // !fruitsCommentsCookie <=> fruitsCommentsCookie === undefined
  const shirtsQuantity = !shirtItemCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie with an empty array
      []
    : parseJson(shirtItemCookie);

  // 3. we edit the cookie value
  // We get the the object for the fruit on cookies or undefined
  const shirtToUpdate = shirtsQuantity.find((shirtQuantity) => {
    return shirtQuantity.id === shirtId;
  });
  // Case B: cookie is defined and fruit id already exists!
  // if we are in fruit id = 1
  if (shirtToUpdate) {
    shirtToUpdate.quantity = quantity;
  } else {
    // Case C: cookie is defined and fruit id doesn't exist!
    shirtsQuantity.push({
      id: shirtId,
      quantity: quantity,
    });
  }

  // 4. we override the cookie
  await cookies().set('shirtQuantity', JSON.stringify(shirtsQuantity));
}
