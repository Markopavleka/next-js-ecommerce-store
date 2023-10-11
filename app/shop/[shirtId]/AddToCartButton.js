'use client';
import { useState } from 'react';
import { createOrUpdateItem } from './actions.js';

// import style from './AddToCartButton.module.scss';

export default function AddToCartButton(props) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <p className="card-text">Quantity:</p>
      <input
        data-test-id="inputQuantity"
        type="number"
        min="1"
        className="input input-bordered input-accent w-full max-w-xs my-4"
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      />
      <br />
      <button
        className="btn btn-primary"
        onClick={async () => {
          await createOrUpdateItem(props.shirtId, quantity);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
