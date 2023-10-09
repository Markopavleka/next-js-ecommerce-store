import Head from 'next/head';
import { TextAnimation } from './TypeAnimation';

export default function page() {
  return (
    <div
      className="flex align-center justify-center "
      style={{ height: '65vh' }}
    >
      <Head>
        <title>三刀流 || Thank You for Your Order</title>
        <meta name="description" content="Thank you for placing your order." />
      </Head>

      <TextAnimation className="card card-title  bg-base-100 shadow-xl p-4 m-10" />
    </div>
  );
}
