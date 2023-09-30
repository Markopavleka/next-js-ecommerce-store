import Image from 'next/image';
import { getShirtById } from '../../database/shirts';
import AddToCartButton from './AddToCartButton';
import styles from './page.module.scss';

export default async function SingleShirtPage(props) {
  const singleShirt = await getShirtById(Number(props.params.shirtId));
  console.log(props.params.shirtId);
  return (
    <div className={styles.singleShirtBody}>
      <Image
        src={`/images/${singleShirt.name}.jpeg`}
        alt={singleShirt.description}
        width={100}
        height={100}
        className={styles.shopImage}
        data-test-id="product-image"
      />
      <h1>{singleShirt.description}</h1>
      <p data-test-id="product-price">
        {singleShirt.price} {singleShirt.currency}
      </p>
      <AddToCartButton shirtId={singleShirt.id} />
    </div>
  );
}
