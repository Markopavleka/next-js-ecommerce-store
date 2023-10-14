import Image from 'next/image';

export const metadata = {
  title: '三刀流 || Page not found',
  description:
    'Sorry this page was not found make sure you visit a page that exists.',
};

export default function RootNotFound() {
  return (
    <div className="grid justify-center items-center my-20">
      <div className="mb-5 text-5xl font-bold">
        Sorry this page was not found make sure you visit a page that exists
      </div>
      <br />
      <Image
        className="grid justify-center items-center mx-auto my-20"
        alt="Homer gif"
        src="/images/homer.gif"
        width={384}
        height={226}
      />
    </div>
  );
}
