export const shirts = [
  {
    id: 1,
    name: 'miniLogoWhite',
    description: 'Mini Logo White',
    price: 48,
    currency: '€',

    size: 'XL',
  },
  {
    id: 2,
    name: 'miniLogoBlack',
    description: 'Mini Logo Black',
    price: 36,
    currency: '€',

    size: 'XL',
  },
  {
    id: 3,
    name: 'miniLogoPurple',
    description: 'Mini Logo Purple',
    price: 40,
    currency: '€',

    size: 'XL',
  },
  {
    id: 4,
    name: 'logoWhite',
    description: 'Logo White',
    price: 35,
    currency: '€',
    size: 'XL',
  },
  {
    id: 5,
    name: 'logoBlack',
    description: 'Logo Black',
    price: 48,
    currency: '€',
    size: 'XL',
  },
  {
    id: 6,
    name: 'logoPurple',
    description: 'Logo Purple',
    price: 30,
    currency: '€',

    size: 'XL',
  },
];
export function getShirts() {
  return shirts;
}

export function getShirtById(id) {
  return shirts.find((shirt) => shirt.id === id);
}
