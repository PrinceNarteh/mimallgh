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
      animation: {
        loader: "loader 0.6s infinite alternate",
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: "translate3d(0, -1rem, 0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
