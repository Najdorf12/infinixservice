/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '420px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
      primary:"rgb(146,195,73)",
      pastel: "#dcd0be",
      pastel2: "#F0EBE5",
      black: "#2a2829",
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        title2: ["Orbitron", "system-ui"],
        text: ["Varela Round", "sans-serif"],
        text2: ["Kanit", "sans-serif"],
        text3: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};