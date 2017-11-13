const path = require('path')
const Webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const root = path.join(__dirname)

module.exports = merge(common, {
  output: {
    path: path.resolve(root + '/dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[id].[name].[chunkhash].js'
  },
  devServer: {
    contentBase: path.resolve(root, 'output'),
    compress: true,
    hot: true,
    port: 8080
  },
  plugins: [
    new Webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
    }),
    new Webpack.HotModuleReplacementPlugin()
  ]
})
