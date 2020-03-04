const path = require('path')
const root = path.join(__dirname, '..')
const components = path.join(root, '/components/')
const nodeModules = path.join(root, '/node_modules/')
const materialNodeModules = path.join(nodeModules, '/@material')

module.exports = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: false,
      importLoaders: 1
    }
  },
  {
    loader: 'postcss-loader'
  },
  {
    loader: 'sass-loader',
    options: {
      implementation: require('dart-sass'),
      sourceMap: false,
      sassOptions: {
        includePaths: [components, materialNodeModules]
      }
    }
  }
]
