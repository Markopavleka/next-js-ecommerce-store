import Link from 'next/link';
import { getShirts } from '../../database/shirts';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import DarkMode from './DarkMode';

type CartItems = {
  id: number;
  quantity: number;
  price: number;
};

export default async function Navbar() {
  const cartItemsCookie = getCookie('cart');
  const cartItemQuantities = !cartItemsCookie ? [] : parseJson(cartItemsCookie);

  const shirtList = await getShirts();

  const cartItemsWithQuantities = shirtList.map((shirt) => {
    const matchingShirtsFromCookie = cartItemQuantities.find(
      (shirtQuantity: CartItems) => shirt.id === shirtQuantity.id,
    );
    return { ...shirt, quantity: matchingShirtsFromCookie?.quantity };
  });

  const cartItemsWithQuantityGreaterThanOne = cartItemsWithQuantities.filter(
    (shirtInCart) => {
      return shirtInCart.quantity >= 1;
    },
  );

  const quantity = cartItemsWithQuantityGreaterThanOne.reduce((acc, shirt) => {
    acc += Number(shirt.quantity);
    return acc;
  }, 0);
  const cartTotalPrice = cartItemsWithQuantityGreaterThanOne.reduce(
    (sum: number, shirt: CartItems) => {
      const itemTotal = shirt.price * shirt.quantity;
      sum += itemTotal;
      return sum;
    },
    0,
  );

  return (
    <div className="navbar bg-base-100 mb-10 mt-5">
      <div className="navbar-start">
        <div className="dropdown ml-2">
          <button tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
          </button>
          <ul className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
        <Link
          href="/"
          tabIndex={0}
          className="btn btn-ghost normal-case text-xl"
        >
          三刀流
        </Link>
      </div>
      <div className="navbar-end mr-2">
        <DarkMode />
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle ml-2">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {quantity}
                </span>
              </div>
            </button>
            <div className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">{quantity} Items</span>
                <span className="text-info">Subtotal: {cartTotalPrice}€</span>
                <div className="card-actions">
                  <Link href="/cart" className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
