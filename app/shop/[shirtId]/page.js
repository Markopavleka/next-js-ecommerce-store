import Head from 'next/head';
import Image from 'next/image';
import { getShirtById } from '../../../database/shirts';
import AddToCartButton from './AddToCartButton';

export default async function SingleShirtPage(props) {
  const singleShirt = await getShirtById(Number(props.params.shirtId));

  return (
    <div className="grid justify-center items-center mb-24">
      <Head>
        <title>三刀流 || {singleShirt.description}</title>
        <meta
          name="description"
          content={`Shop the ${singleShirt.description} shirt - Price: ${singleShirt.price} ${singleShirt.currency}`}
        />
      </Head>
      <div className="card lg:card-side bg-base-200 shadow-xl ">
        <figure>
          <Image
            src={`/images/${singleShirt.name}.jpeg`}
            alt={singleShirt.description}
            width={384}
            height={226}
            data-test-id="product-image"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title">{singleShirt.description}</h1>
          <p data-test-id="product-price">{singleShirt.price}€</p>
          <AddToCartButton shirtId={singleShirt.id} />
        </div>
      </div>
    </div>
  );
}
