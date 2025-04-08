import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F3A446',
        secondary: '#A06235',
        dark1: '#141313',
        dark2: '#1D1D1D',
        light: '#EFEFEF',
      },
      fontFamily: {
        heading: ['Butler', 'serif'], // make sure to import Butler via CSS or host it
        body: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'texture': "url('./assets/bg-texture.png')",
      },
    },
  },
  plugins: [],
}
export default config
