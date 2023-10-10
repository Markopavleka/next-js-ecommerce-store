import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { TextAnimationHero } from './Component/AnimationHeroMain';

export default function Home() {
  return (
    <div>
      <Head>
        <title>三刀流 || Homepage</title>
        <meta
          name="Homepage"
          content="Welcome to our website. Discover amazing products, services, and more."
        />
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
