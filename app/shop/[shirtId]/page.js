import Image from 'next/image';
import { getShirtById } from '../../database/shirts';
import style from './page.module.scss';

export default function SingleShirtPage(props) {
  const singleShirt = getShirtById(props.params.shirtId);

  return (
    <div className={style.singleShirtBody}>
      <Image
        src={`/images/${singleShirt.name}.jpeg`}
        alt={singleShirt.description}
        width={100}
        height={100}
        className={style.shopImage}
        data-test-id="product-image"
      />
      <h1>{singleShirt.description}</h1>
      <p data-test-id="product-price">
        {singleShirt.price} {singleShirt.currency}
      </p>
      <p>Quantity:{singleShirt.quantity} </p>
      <p>Size:{singleShirt.size}</p>
    </div>
  );
}
