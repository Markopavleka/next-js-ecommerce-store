import { expect, test } from '@jest/globals';
import { quantity, Shirt } from '../cartQuantity';

const cartItemsWithQuantityGreaterThanOne: Shirt[] = [
  {
    id: 1,
    name: 'miniLogoWhite',
    description: 'Mini Logo White',
    price: 48,
    quantity: 4,
  },
  {
    id: 2,
    name: 'miniLogoBlack',
    description: 'Mini Logo Black',
    price: 36,
    quantity: 2,
  },
  {
    id: 3,
    name: 'miniLogoPurple',
    description: 'Mini Logo Purple',
    price: 40,
    quantity: 3,
  },
];

test('add quantity', () => {
  expect(quantity(cartItemsWithQuantityGreaterThanOne)).toBe(9);
});
