module.exports = function (api) {
  const plugins = []
  const presets = []

  switch (api.env()) {
    case 'testing':
      presets.push([
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ])
      break
    case 'development':
      plugins.push(
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-object-assign'
      )
      presets.push([
        '@babel/preset-env',
        {
          modules: false
        }
      ])
      break
    case 'production':
      plugins.push(
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-object-assign'
      )
      presets.push([
        '@babel/preset-env',
        {
          modules: false
        }
      ])
  }

  return { plugins, presets }
}
