/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      fontSize: {
        28: "28px",
      },
      colors: {
        seamlessBlue: {
          900: "#171f52",
          800: "#273175",
          700: "#283275",
          400: "#8287a0",
          300: "#50598f",
          200: "#2d3b7a",
          100:"#66d6fb"
        },
        seamlessGray: {
          950: "#282728",
          900: "#6b6a6b",
          800: "#6d6b6d",
          750: "#8a8b8b",
          700: "#939393",
          600: "#c2c5cf",
          500: "#d5d7db",
          400: "#dfe1e1",
          300: "#edefef",
          200: "#676b6a",
          100: "#6c7171",
          50: "#DFDEDE"
        },
        seamlessCyan: {
          600: "#cdd5d4",
          500: "#d9e3e2",
        },
        seamlessGreen: {
          500: "#c2e0b3",
        },
        seamlessPink: {
          500: "#e0b3c9",
        },
        seamlessGradient: {
          start: "#cc01ff",
          end: "#01fedd",
        },
      },
    },
  },
  plugins: [],
};
