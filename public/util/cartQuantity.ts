export interface Shirt {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export function quantity(cartItemsWithQuantityGreaterThanOne: Shirt[]): number {
  return cartItemsWithQuantityGreaterThanOne.reduce((acc, shirt) => {
    acc += Number(shirt.quantity);
    return acc;
  }, 0);
}
