import Head from 'next/head';
import { TextAnimation } from './TypeAnimation';

export default function page() {
  return (
    <div>
      <Head>
        <title>三刀流 || Thank You for Your Order</title>
        <meta name="description" content="Thank you for placing your order." />
      </Head>
      <div className="hero min-h-screen thx-you-image">
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <TextAnimation />
          </div>
        </div>
      </div>
    </div>
  );
}
