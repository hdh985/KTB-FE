/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myBaseBrown: '#F4F3F0',
        myLightGreen: '#98C24E',
        myHoverLightGreen: '#B4D37E',
        myHoverWhite: '#E5F0DD',
        myDarkGray: '#444444'
      }
    },
  },
  plugins: [require('daisyui')],
}