'use client';

// import Link from 'next/link';
import { deleteCookies } from './action';

export default function Form() {
  return (
    <form action="/order" className="grid">
      <div className="card w-96 bg-base-200 shadow-xl p-4 m-10 my-24 ">
        <input
          className="input input-bordered input-primary w-full max-w-xs m-2"
          placeholder="first name"
          data-test-id="checkout-first-name"
          required
        />
        <input
          className="input input-bordered input-primary w-full max-w-xs m-2"
          placeholder="last name"
          data-test-id="checkout-last-name"
          required
        />
        <input
          className="input input-bordered input-primary w-full max-w-xs m-2"
          type="email"
          placeholder="e-mail"
          data-test-id="checkout-email"
          required
        />
        <input
          className="input input-bordered input-primary w-full max-w-xs m-2"
          placeholder="address"
          data-test-id="checkout-address"
          required
        />
        <input
          className="input input-bordered input-primary w-full max-w-xs m-2"
          placeholder="city"
          data-test-id="checkout-city"
          required
        />
        <input
          className="input input-bordered input-primary w-full max-w-xs m-2"
          type="number"
          placeholder="Postal Code"
          data-test-id="checkout-postal-code"
          maxLength={6}
          required
        />
        <input
          className="input input-bordered input-primary w-full max-w-xs m-2"
          placeholder="country"
          data-test-id="checkout-country"
          required
        />
      </div>
      <div className="card w-96 h-80 bg-base-200 shadow-xl p-4 m-10 ">
        <input
          className="input input-bordered input-accent w-full max-w-xs m-2"
          placeholder="credit card"
          data-test-id="checkout-expiration-date"
          type="number"
          required
        />
        <input
          className="input input-bordered input-accent w-full max-w-xs m-2"
          type="date"
          placeholder="expiration date"
          data-test-id="checkout-credit-card"
          required
        />
        <input
          className="input input-bordered input-accent w-full max-w-xs m-2"
          placeholder="cvc"
          data-test-id="checkout-security-code"
          type="number"
          maxLength={3}
          required
        />

        <button
          className="btn btn-primary m-8"
          data-test-id="checkout-confirm-order"
          onClick={async () => {
            await deleteCookies();
          }}
        >
          order now
        </button>
      </div>
    </form>
  );
}
