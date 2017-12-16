const path = require('path')
const webpack = require('webpack')

const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')

const output = path.resolve('./public')

module.exports = merge(common, {
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
