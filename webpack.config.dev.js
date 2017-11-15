const path = require('path')
const webpack = require('webpack')

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const dist = path.resolve('./dist')

module.exports = merge(common, {
  output: {
    path: dist,
    filename: '[name].js',
    chunkFilename: 'chunk.[name].js'
  },
  devServer: {
    compress: true,
    hot: true,
    port: 8080
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
