import { Shirts } from '../../migrations/00000-createTableShirts';

export function getShirts(shirt: Shirts[]) {
  if (typeof shirt[0] === 'undefined') {
    throw new Error('No shirt found');
  }
  const shirtsArr = {
    id: shirt[0].id,
    name: shirt[0].name,
    description: shirt[0].description,
    price: shirt[0].price,
  };
  return shirtsArr;
}
