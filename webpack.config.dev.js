const path = require('path')
const webpack = require('webpack')

const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')

const output = path.resolve('./public')

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: output,
    filename: '[name].js',
    chunkFilename: 'chunk.[name].js'
  },
  devServer: {
    compress: true,
    hot: true,
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
