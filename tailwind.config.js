/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'sans-serif'],
      },
      colors: {
        deepBlue: '#000B58',
        darkTeal: '#003161',
        seaGreen: '#006A67',
        softCream: '#FFF4B7',
      },
    },
  },
  plugins: [], // Siirretty ulos theme-objektista
};
