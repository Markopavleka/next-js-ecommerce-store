'use client';
import DeleteShirt from './actions';

export default function DeleteButton(id) {
  const handleDeleteClick = async () => {
    await DeleteShirt(id);
  };

  return (
    <div>
      <button onClick={handleDeleteClick}>Remove</button>
    </div>
  );
}
