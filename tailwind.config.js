/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  important: true,
  plugins: [],
};
