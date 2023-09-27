import Image from 'next/image';
import Link from 'next/link';
import Cart from '../../public/images/cart.png';
import style from './Navbar.module.scss';

export default function Navbar() {
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
      <div className={style.Cart}>
        <a href="/cart">
          <Image src={Cart} alt="Cart" width={40} height={40} />
        </a>
      </div>
    </div>
  );
}
