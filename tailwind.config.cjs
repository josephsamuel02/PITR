/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/1.png')",
      },
      fontFamily: {
        nunito: ["Nunito", " sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        courgette: ["Courgette", "cursive"],
        dayone: ["Days One", "sans-serif"],
        Palanquin: ["Palanquin Dark", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
