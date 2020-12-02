module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        body: ['Itim']
      },
      zIndex:{
        'minus': ['-1']
      },
    },
  },
  variants: {},
  plugins: ['before','after'],
  
}
