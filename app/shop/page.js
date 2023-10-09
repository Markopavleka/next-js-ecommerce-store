import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getShirts } from '../../database/shirts';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';

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
              className="card w-96 glass overflow-hidden"
            >
              <Link
                href={`/shop/${shirt.id}`}
                data-test-id={`product-${shirt.id}`}
              >
                <figure>
                  <Image
                    src={`/images/${shirt.name}.jpeg`}
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
