const path = require('path')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.config.lib.common.js')

const root = path.join(__dirname)

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(root + '/dist'),
    filename: '[name]/mcv-[name].min.js',
    libraryTarget: 'umd',
    library: 'mcv-[name]'
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 5
      },
      cache: true,
      parallel: true
    })
  ]
})
