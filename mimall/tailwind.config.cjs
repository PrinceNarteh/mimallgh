/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        authImage: "url(../../assets/images/auth.jpg)",
      },
      colors: {
        "dark-gray": "#282e38",
        "light-gray": "#313844",
        "off-white": "#adb5bd",
      },
    },
  },
  plugins: [require("@shrutibalasa/tailwind-grid-auto-fit"),],
};
