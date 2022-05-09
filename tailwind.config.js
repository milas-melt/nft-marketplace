module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        // Skeuo / Branding of a luxury menswear brand
        // https://color.adobe.com/search?q=luxury
        'custom1': '#2933F2',
        'custom2': '#252ED9',
        'custom3': '#262B8C',
        'custom4': '#3940BF', // bg
        'custom5': '#D93D04',
      },
    },
  },
  plugins: [],
}