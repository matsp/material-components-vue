const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.config.common')

const root = path.join(__dirname)

module.exports = merge(common, {
  mode: 'production',
  target: 'web',
  output: {
    path: path.resolve(root + '/dist'),
    filename: '[name]/[name].min.js',
    libraryTarget: 'umd'
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
