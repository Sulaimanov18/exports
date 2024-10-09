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
        custom: ['SuisseIntl', 'Helvetica Neue', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      colors: {
      'custom-blue': '#477be4',
      'green' : '#59C65B',
      'blaa' : '#2B2B2B',

    }
    },
  },
  plugins: [],
}
