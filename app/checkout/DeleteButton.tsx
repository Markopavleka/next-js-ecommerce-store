'use client';
import React from 'react';
import { deleteCookies } from './action';

export default function deleteButton() {
  const handleDeleteCookies = async () => {
    await deleteCookies();
  };
  return (
    <button
      className="btn btn-primary"
      data-test-id="checkout-confirm-order"
      onClick={handleDeleteCookies}
    >
      order now
    </button>
  );
}
