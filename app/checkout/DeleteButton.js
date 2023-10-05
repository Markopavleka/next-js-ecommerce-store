'use client';
import React from 'react';
import { deleteCookies } from './action';

export default function deleteButton() {
  const handleDeleteCookies = async () => {
    await deleteCookies();
  };
  return (
    <div>
      <button onClick={handleDeleteCookies}>order now</button>
    </div>
  );
}
