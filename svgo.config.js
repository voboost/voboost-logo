// svgo.config.js
module.exports = {
  multipass: true,
  plugins: [
    'preset-default',
    'removeEmptyContainers',
    'sortAttrs',
    
    {
      name: 'mergePaths',
      params: {
        force: true,
        floatPrecision: 0,
      }
    },
  ]
}
