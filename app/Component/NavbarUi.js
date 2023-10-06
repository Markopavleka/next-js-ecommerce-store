// import Image from 'next/image';
import Link from 'next/link';
// import Cart from '../../public/images/cart.png';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import { getShirts } from '../database/shirts';
import DarkMode from './DarkMode';

// import style from './Navbar.module.scss';

export default async function Navbar() {
  const shirtItemCookie = getCookie('shirtQuantity');
  const shirtsQuantity = !shirtItemCookie ? [] : parseJson(shirtItemCookie);
  const shirts = await getShirts();

  const shirtsInCart = shirts.map((shirt) => {
    const matchingShirtsFromCookie = shirtsQuantity.find(
      (shirtQuantity) => shirt.id === shirtQuantity.id,
    );
    return { ...shirt, quantity: matchingShirtsFromCookie?.quantity };
  });

  const shirtsWithQuantity = shirtsInCart.filter((shirtInCart) => {
    return shirtInCart.quantity >= 1;
  });

  const quantity = shirtsWithQuantity.reduce((acc, shirt) => {
    acc += Number(shirt.quantity);
    return acc;
  }, 0);

  console.log(quantity);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label className="btn btn-ghost btn-circle">
            <input />
            <a role="button">Edit</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href="/" tabIndex={0}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" tabIndex={0}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" tabIndex={0}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">三刀流</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <DarkMode />
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item" />
          </div>
        </button>
      </div>
    </div>
  );
}
