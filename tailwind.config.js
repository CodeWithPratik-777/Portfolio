/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'vsm': '460px',
        '3xl': '1800px',
      }
    },
  },
  plugins: [require("daisyui")],
}