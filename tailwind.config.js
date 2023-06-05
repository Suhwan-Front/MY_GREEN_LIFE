module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
      colors: {
        'main-blue': '#111931',
        'main-green': '#DDEF3F',
        'main-white': '#EDE9E9',
      },
      animation: {
        'bounce-pulse': 'bounce 1s infinite, pulse 1s infinite',
      },
      translate: {
        'half-turn': '-50%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
