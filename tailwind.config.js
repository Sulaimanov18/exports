/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Adding Inter as the default sans-serif font
      },
      colors: {
      'custom-blue': '#477be4',
    }
    },
  },
  plugins: [],
}
