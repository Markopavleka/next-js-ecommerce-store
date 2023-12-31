import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { TextAnimationHero } from './Component/AnimationHeroMain';

export const metadata = {
  title: '三刀流 || Homepage',
  description:
    'Welcome to our website. Discover amazing products, services, and more.',
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>三刀流 || Homepage</title>
        <meta
          name="Homepage"
          content="Welcome to our website. Discover amazing products, services, and more."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="hero min-h-screen background-image">
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <TextAnimationHero />
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <Link href="/shop" className="btn btn-primary">
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
