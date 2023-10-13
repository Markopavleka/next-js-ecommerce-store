import { expect, test } from '@jest/globals';
import { getShirts } from '../dataStructure';

test('getShirts should extract specific properties from a shirt object', () => {
  const shirtData = [
    {
      id: 1,
      name: 'miniLogoWhite',
      description: 'Mini Logo White',
      price: 48,
    },
  ];

  const expectedShirt = {
    id: 1,
    name: 'miniLogoWhite',
    description: 'Mini Logo White',
    price: 48,
  };

  expect(getShirts(shirtData)).toStrictEqual(expectedShirt);
});
