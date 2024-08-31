/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        darkGray: "hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)",
      },
      fontSize: {
        body:'0.938rem',
      }
    },
  },
  plugins: [],
};
