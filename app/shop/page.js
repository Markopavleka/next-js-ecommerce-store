import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getShirts } from '../../database/shirts';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import style from './page.module.scss';

export default async function Shop() {
  const shirts = await getShirts();
  const shirtItemCookie = getCookie('shirtQuantity');

  const shirtQuantity = !shirtItemCookie ? [] : parseJson(shirtItemCookie);

  const shirtsWithQuantity = shirts.map((shirt) => {
    const matchingShirtsWithQuantityFromCookie = shirtQuantity.find(
      (shirtItem) => shirt.id === shirtItem.id,
    );
    return {
      ...shirt,
      quantity: matchingShirtsWithQuantityFromCookie?.quantity,
    };
  });
  return (
    <div>
      <Head>
        <title>三刀流 || Shop</title>
        <meta
          name="description"
          content="Explore our collection of shirts and find the perfect one for you."
        />
      </Head>

      <div className={style.shopPageBody}>
        {shirtsWithQuantity.map((shirt) => {
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
              <p>{shirt.price} €</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
