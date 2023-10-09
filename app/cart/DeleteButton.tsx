'use client';
import DeleteShirt from './actions';

type ShirtId = {
  id: number;
};

export default function DeleteButton(shirt: ShirtId) {
  const handleDeleteClick = async () => {
    await DeleteShirt(shirt.id);
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        data-test-id="cart-product-remove-<product id>"
        onClick={handleDeleteClick}
      >
        Remove
      </button>
    </div>
  );
}
