import React from 'react';
import { removeShirtById } from './CartUtil';

export default function RemoveButton({ shirtId }) {
  const handleRemoveShirt = () => {
    removeShirtById(shirtId);
  };

  return (
    <div>
      <button onClick={handleRemoveShirt}>Remove</button>
    </div>
  );
}
