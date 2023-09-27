export const shirts = [
  {
    id: 1,
    name: 'miniLogoWhite',
    description: 'Mini Logo White',
    price: 48,
    currency: '€',
    quantity: 1,
    size: 'XL',
  },
  {
    id: 1,
    name: 'miniLogoBlack',
    description: 'Mini Logo Black',
    price: 48,
    currency: '€',
    quantity: 1,
    size: 'XL',
  },
  {
    id: 1,
    name: 'miniLogoPurple',
    description: 'Mini Logo Purple',
    price: 48,
    currency: '€',
    quantity: 1,
    size: 'XL',
  },
  {
    id: 1,
    name: 'logoWhite',
    description: 'Logo White',
    price: 48,
    currency: '€',
    quantity: 1,
    size: 'XL',
  },
  {
    id: 1,
    name: 'logoBlack',
    description: 'Logo Black',
    price: 48,
    currency: '€',
    quantity: 1,
    size: 'XL',
  },
  {
    id: 1,
    name: 'logoPurple',
    description: 'Logo Purple',
    price: 48,
    currency: '€',
    quantity: 1,
    size: 'XL',
  },
];
export function getShirts() {
  return shirts;
}

export function getShirtByName(name) {
  return shirts.find((shirt) => shirt.name === name);
}
