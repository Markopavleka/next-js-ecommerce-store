import { cookies } from 'next/headers';

// nullish coalescing operator
export function getCookie(name) {
  return cookies().get(name)?.value;
}

export function setCookie(data) {
  cookies().set('shirtQuantity', data);
}
