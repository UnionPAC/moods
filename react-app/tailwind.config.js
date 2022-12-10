/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xsm': "600px",
      'sm': "900px",
      'md': "1200px",
      'lg': "1500px",
      'xl': "1800px",
    },
    extend: {},
  },
  plugins: [],
};
