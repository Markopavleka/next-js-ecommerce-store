import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getShirts } from '../../database/shirts';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import DeleteButton from './DeleteButton';

type CartItems = {
  id: number;
  quantity: number;
  price: number;
};
export default async function Cart() {
  const cartItemsCookie = getCookie('cart');
  const cartItemQuantities = !cartItemsCookie ? [] : parseJson(cartItemsCookie);

  const shirtList = await getShirts();

  const cartItemsWithQuantities = shirtList.map((shirt) => {
    const matchingShirtsFromCookie = cartItemQuantities.find(
      (cart: CartItems) => shirt.id === cart.id,
    );
    return { ...shirt, quantity: matchingShirtsFromCookie?.quantity };
  });

  console.log('cartItemsWithQuantities', cartItemsWithQuantities);
  console.log('shirtList', shirtList);

  const cartItemsWithQuantityGreaterThanOne = cartItemsWithQuantities.filter(
    (shirtInCart) => {
      return shirtInCart.quantity >= 1;
    },
  );

  const cartTotalPrice = cartItemsWithQuantityGreaterThanOne.reduce(
    (sum: number, shirt: CartItems) => {
      const itemTotal = shirt.price * shirt.quantity;
      sum += itemTotal;
      return sum;
    },
    0,
  );
  const priceWithoutTaxes: number = Number((cartTotalPrice / 1.2).toFixed(2));
  const taxAmount = (cartTotalPrice - priceWithoutTaxes).toFixed(2);

  return (
    <div>
      <Head>
        <title>三刀流 || Shopping Cart</title>
        <meta
          name="description"
          content="Review and edit the items in your shopping cart before proceeding to checkout."
        />
      </Head>
      <div className="mx-24">
        {cartItemsWithQuantityGreaterThanOne.map((shirt) => {
          return (
            <div
              className="card card-side bg-base-100 shadow-xl glass m-4"
              key={`shirt-${shirt.id}`}
            >
              <figure>
                <Image
                  src={`/images/${shirt.name}.jpeg`}
                  alt={shirt.description}
                  width={192}
                  height={113}
                  data-test-id="product-image"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{shirt.description}</h3>
                <p>Quantity: {shirt.quantity}</p>
                <p>Price: {shirt.price}€</p>
                <p>Subtotal: {shirt.price * shirt.quantity} €</p>
                <DeleteButton id={shirt.id} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid justify-center items-center my-24">
        <div className="card w-96 bg-base-100 shadow-xl glass">
          <div className="card-body">
            <p>Price without Tax: {priceWithoutTaxes} €</p>
            <p>Tax: {taxAmount} €</p>
            <p>Total price: {cartTotalPrice} €</p>
            <Link className="btn btn-accent" href="/checkout">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
