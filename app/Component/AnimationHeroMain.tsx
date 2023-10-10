'use client';
import { TypeAnimation } from 'react-type-animation';

export const TextAnimationHero = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Welcome',
        2000,
        '歓迎 ',
        2000,
        'Bienvenue ',
        2000,
        'Willkommen ',
        2000,
        '欢迎 ',
        2000,
        'Bienvenido',
        2000,
        'Benvenuto / Benvenuta ',
        2000,
        'مرحباً',
        2000,
        'Добро пожаловать',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      className="mb-5 text-5xl font-bold"
    />
  );
};
