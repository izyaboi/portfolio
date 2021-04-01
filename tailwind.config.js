module.exports = {
   darkMode: 'class',
  purge: ['./pages/**/*.tsx', './styles/**/*.css'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
    theme: {
      fontFamily: {
        'sans': 'Roboto, Arial, sans-serif',
        'serif': 'Merriweather, Georgia, serif'
      },
      extend: {
        colors: {
          'spotify-green': '#1DB954',
          'twitter-blue' : '#1DA1F2',
        },
      },
    },
    variants: {},
    plugins: [],
  }
