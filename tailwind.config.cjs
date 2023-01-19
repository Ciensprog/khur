const colors = {
  black: {
    600: '#24292F',
    800: '#1B1F24',
    900: '#161B22',
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      maxWidth: {
        screen: '100vw',
      },
    },
  },
  plugins: [],
}
