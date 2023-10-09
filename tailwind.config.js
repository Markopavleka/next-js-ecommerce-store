/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: ['lemonade', 'dark'],
  extend: {
    backgroundImage: {
      hero: "url('/Users/marko/projects/next.js-ecommerce-store/public/images/tokio.jpeg')",
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
