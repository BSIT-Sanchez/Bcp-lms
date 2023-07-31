/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        main: '#0984e3',
        dry: '#292F38',
      }
    },
    
   
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

