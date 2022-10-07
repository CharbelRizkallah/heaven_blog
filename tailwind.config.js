/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: 
    {colors: {
      'hblush' : '#E9BEBE',
      'hmint': '#D1EFE4',
      'hgray': '#7D7474',
      'hdust': '#EEEEEE'
    }
},
  },
  plugins: [],
}
