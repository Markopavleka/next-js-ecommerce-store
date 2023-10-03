import Image from 'next/image';
import Link from 'next/link';
import Cart from '../../public/images/cart.png';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import { getShirts } from '../database/shirts';
import DarkMode from './DarkMode';
import style from './Navbar.module.scss';

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
    <div className={style.Navbar}>
      <a className={style.Logo} href="/">
        三刀流
      </a>
      <div className={style.centerNavElements}>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
      </div>
      <DarkMode />
      <div className={style.Cart}>
        <div className={style.quantity}>
          <p>{quantity}</p>
        </div>
        <a href="/cart">
          <Image src={Cart} alt="Cart" width={40} height={40} />
        </a>
      </div>
    </div>
  );
}
