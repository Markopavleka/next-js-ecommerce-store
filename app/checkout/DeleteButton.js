'use client';
import React from 'react';
import { deleteCookies } from './action';

export default function deleteButton() {
  const handleDeleteCookies = async () => {
    await deleteCookies();
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={handleDeleteCookies}>
        order now
      </button>
    </div>
  );
}
