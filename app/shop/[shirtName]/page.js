import Image from 'next/image';
import { getShirtByName } from '../../database/shirts';
import style from './page.module.scss';

export default function SingleShirtPage(props) {
  console.log('ShirtName from props:', props.params.shirtName);

  const singleShirt = getShirtByName(props.params.shirtName);

  return (
    <div className={style.singleShirtBody}>
      <Image
        src={`/images/${singleShirt.name}.jpeg`}
        alt={singleShirt.description}
        width={100}
        height={100}
        className={style.shopImage}
      />
      <h1>{singleShirt.description}</h1>
      <p>
        {singleShirt.price} {singleShirt.currency}
      </p>
      <p>Quantity:{singleShirt.quantity} </p>
      <p>Size:{singleShirt.size}</p>
    </div>
  );
}
