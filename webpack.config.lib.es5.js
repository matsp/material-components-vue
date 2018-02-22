const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.config.lib.common.js')

const root = path.join(__dirname)
const components = path.join(root + '/components/')
const nodeModules = path.join(root, '/node_modules/')

module.exports = merge(common, {
  output: {
    path: path.resolve(root + '/dist'),
    filename: 'mcv-[name].es5.min.js',
    libraryTarget: 'umd',
    library: 'mcv-[name]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [components, path.join(nodeModules, '@material')],
        options: {
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 5
      },
      cache: true,
      parallel: true
    })
  ]
})
