const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')

const output = path.resolve('./public')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: output,
    filename: '[name].[chunkhash].js',
    chunkFilename: 'chunk.[chunkhash].async.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimize: true
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 5,
        output: {
          comments: false
        }
      },
      cache: true,
      parallel: false
    }),
    new OptimizeCssAssetsPlugin()
  ]
})
