/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#6eccff',
          200: '#57a8d4',
          300: '#407a99',
        }
      }
    },
    darkMode: 'media',
  },
  plugins: [],
}
