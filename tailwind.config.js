module.exports = {
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
      },
    },
    variants: {},
    plugins: [],
  }