import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getShirts } from '../../database/shirts';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

type CartItems = {
  id: number;
  quantity: number;
  price: number;
};

export const metadata = {
  title: '三刀流 || Shop',
  description:
    'Explore our collection of shirts and find the perfect one for you.',
};

export default async function Shop() {
  const shirts = await getShirts();
  const shirtItemCookie = getCookie('shirtQuantity');

  const shirtQuantity = !shirtItemCookie ? [] : parseJson(shirtItemCookie);

  const shirtsWithQuantity = shirts.map((shirt) => {
    const matchingShirtsWithQuantityFromCookie = shirtQuantity.find(
      (shirtItem: CartItems) => shirt.id === shirtItem.id,
    );
    return {
      ...shirt,
      quantity: matchingShirtsWithQuantityFromCookie?.quantity,
    };
  });
  return (
    <div className="grid justify-center items-center mb-24">
      <Head>
        <title>三刀流 || Shop</title>
        <meta
          name="description"
          content="Explore our collection of shirts and find the perfect one for you."
        />
      </Head>

      <div className="grid grid-cols-3 grid-rows-2 gap-20 ">
        {shirtsWithQuantity.map((shirt) => {
          return (
            <div
              key={`shirt-${shirt.id}`}
              className="card w-96 overflow-hidden shadow-xl bg-base-200"
            >
              <Link
                href={`/shop/${shirt.id}`}
                data-test-id={`product-${shirt.id}`}
              >
                <figure>
                  <Image
                    src={`/images/${shirt.name}.jpg`}
                    alt={shirt.description}
                    width={384}
                    height={226}
                  />
                </figure>
                <div className="card-body">
                  <h1 className="card-actions card-title justify-center">
                    {shirt.description}
                  </h1>
                </div>
                <p className="card-actions justify-center">{shirt.price} €</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
