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
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(20deg)' },
        },
        fadeindown: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -50%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeinleft: {
          "0%": {
            opacity: 0,
            transform: "translate3d(-50%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeinright: {
          "0%": {
            opacity: 0,
            transform: "translate3d(50%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeinup: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 50%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        tada: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "10%, 20%": {
            transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },
          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeindown: 'fadeindown 1s ease-in 0.25s 1 forwards',
        fadeinright: 'fadeinright 1s ease-in-out 0.25s 1 forwards',
        fadeinup: 'fadeinup 1s ease-in-out 0.25s 1 forwards',
        fadeinleft: 'fadeinleft 1s ease-in-out 0.25s 1 forwards',
        tada: 'tada 1s ease-in-out 0.25s 1',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
