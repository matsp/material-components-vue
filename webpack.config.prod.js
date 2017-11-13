const path = require('path')
const Webpack = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const root = path.join(__dirname)

module.exports = merge(common, {
  output: {
    path: path.resolve(root + '/dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[name].[chunkhash].js'
  },
  plugins: [
    new Webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new OptimizeCssAssetsPlugin(),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 5
      },
      cache: true,
      parallel: true
    })
    // ,new Webpack.optimize.AggressiveSplittingPlugin({
    //  minSize: 30000,
  //  maxSize: 50000,
  //  chunkOverhead: 0,
  //  entryChunkMultiplicator: 1,
  // }),
  ]
})
