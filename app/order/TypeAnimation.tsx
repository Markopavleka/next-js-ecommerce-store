'use client';
import { TypeAnimation } from 'react-type-animation';

export const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Thank you for your order!',
        2000,
        '注文していただきありがとうございます',
        2000,
        'Merci pour votre commande!',
        2000,
        '¡Gracias por su pedido!',
        2000,
        'Vielen Dank für Ihre Bestellung!',
        2000,
        'Grazie per il vostro ordine!',
        2000,
        '谢谢您的订单!',
        2000,
        'شكرًا على طلبك!',
        2000,
        'Спасибо за ваш заказ!',
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
