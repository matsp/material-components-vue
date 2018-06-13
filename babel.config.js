module.exports = function (api) {
  const plugins = []
  const presets = []

  switch (api.env()) {
    case 'testing':
      presets.push([
        '@babel/preset-env',
        {
          'targets': {
            'node': 'current'
          }
        }
      ])
      break
    case 'development':
      presets.push([
        '@babel/preset-env',
        {
          'modules': false
        }
      ])
      break
    case 'production':
      presets.push([
        '@babel/preset-env',
        {
          'modules': false
        }
      ])
  }

  return { plugins, presets }
}
