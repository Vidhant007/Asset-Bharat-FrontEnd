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
        'partner-bg':'#2b2c32 ',
        'cream-bg':'#eaeaea',
        'blue-xlight':'#d9dfe5',
      },
      fontFamily:{
        'krona': ['Krona One', 'sans-serif'],
        'jost': ['Jost', 'sans'],
      },
      textColor:{
        'custom-blue':'#0c183a',
        'partner':'#2b2c32',
      },
      spacing: {
        '150':'40rem',
        '105':'27rem',
        '100': '25rem', 
        '90':'23rem',
        '85':'20rem',
        '40':'17rem',
        '30':'15rem',
        '28':'13rem',
        '25':'12rem',
        '22':'9rem',
        '21':'7rem',
      },
    },
  },
  plugins: [require("daisyui")],
}
