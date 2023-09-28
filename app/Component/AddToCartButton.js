'use client';
import { useState } from 'react';

export default function AddToCartButton() {
  const [quantity, setQuantity] = useState('');
  // const [cart, setCart] = useState();
  return (
    <div>
      <div>AddToCartButton</div>
      <p>Quantity:</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      />
      <button>Add to Cart</button>
    </div>
  );
}
