/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'custom-blue': '#0c183a',
      },
      fontFamily:{
        'krona': ['Krona One', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
