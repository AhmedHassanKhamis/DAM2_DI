/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'miFuente': ['Danfo', 'Arial']
      },
      colors:{
        'amarilloOro': '#FFDF00'
      }
    },
  },
  plugins: [],
}