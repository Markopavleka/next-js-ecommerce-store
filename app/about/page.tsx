import Head from 'next/head'; // Import the Head component

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about our company and our mission to serve our customers."
        />
      </Head>

      <div className="flex flex-col  mx-8 mb-24">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <h1>About Us</h1>
          <p>
            We are a young and vibrant clothing brand based in Austria, catering
            to fashion-forward individuals like you. At 三刀流, we are
            passionate about creating high-quality shirts that not only make a
            statement but also reflect our commitment to the environment and
            street style culture.
          </p>
        </div>
        <div className="divider" />
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to provide you with the trendiest and most
            comfortable shirts while being responsible stewards of our planet.
            We believe that fashion can be sustainable, and we work tirelessly
            to reduce our environmental footprint.
          </p>
        </div>

        <div className="divider" />
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <h2>Quality Matters</h2>
          <p>
            Quality is at the heart of everything we do. Our shirts are crafted
            with care, using premium materials and attention to detail. We want
            you to feel confident and comfortable in our clothing, whether
            you're hitting the streets or simply hanging out with friends.
          </p>
        </div>
        <div className="divider" />
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <h2>Street Styled Focus</h2>
          <p>
            We draw inspiration from street style culture, urban vibes, and the
            creativity of young people. Our designs are a reflection of the
            energy and individuality that define street fashion. Each shirt is a
            canvas for self-expression.
          </p>
        </div>
      </div>
    </div>
  );
}
