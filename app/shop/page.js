import Image from 'next/image';
import Link from 'next/link';
import { shirts } from '../database/shirts';
import style from './page.module.scss';

export default function Shop() {
  return (
    <div className={style.shopPageBody}>
      {shirts.map((shirt) => {
        return (
          <div key={`shirt-${shirt.id}`} className={style.shopItem}>
            <Link
              href={`/shop/${shirt.id}`}
              data-test-id="product-<product id>"
            >
              <Image
                src={`/images/${shirt.name}.jpeg`}
                alt={shirt.description}
                width={100}
                height={100}
                className={style.shopImage}
              />
              <h1>{shirt.description}</h1>
            </Link>
            <p>
              {shirt.price} {shirt.currency}
            </p>
          </div>
        );
      })}
    </div>
  );
}
