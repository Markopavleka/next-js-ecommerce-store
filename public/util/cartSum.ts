const calculateItemTotal = (quantity: number, price: number, total: number) => {
  return Number((total += price * quantity));
};

export { calculateItemTotal };
