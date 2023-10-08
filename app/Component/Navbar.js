import Image from 'next/image';
import Link from 'next/link';
import { getShirts } from '../../database/shirts';
import Cart from '../../public/images/cart.png';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import DarkMode from './DarkMode';
import style from './Navbar.module.scss';

export default async function Navbar() {
  const cartItemsCookie = getCookie('shirtQuantity');
  const cartItemQuantities = !cartItemsCookie ? [] : parseJson(cartItemsCookie);

  const shirtList = await getShirts();

  const cartItemsWithQuantities = shirtList.map((shirt) => {
    const matchingShirtsFromCookie = cartItemQuantities.find(
      (shirtQuantity) => shirt.id === shirtQuantity.id,
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

  return (
    <div className={style.Navbar}>
      <a className={style.Logo} href="/">
        三刀流
      </a>
      <div className={style.centerNavElements}>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
      </div>

      <div className={style.DarkModeButton}>
        <DarkMode />
      </div>
      <div className={style.Cart}>
        <Link href="/cart">
          <Image src={Cart} alt="Cart" width={40} height={40} />
        </Link>
        <div className={style.quantity}>
          <p>{quantity}</p>
        </div>
      </div>
    </div>
  );
}
