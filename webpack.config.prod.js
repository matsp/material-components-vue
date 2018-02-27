const path = require('path')
const webpack = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')

const output = path.resolve('./public')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: output,
    filename: '[name].[chunkhash].js',
    chunkFilename: 'chunk.[chunkhash].js'
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new OptimizeCssAssetsPlugin(),
    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 5
      },
      cache: true,
      parallel: false
    })
  ]
})
