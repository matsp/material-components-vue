const path = require('path')
const webpack = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const dist = path.resolve('./dist')

module.exports = merge(common, {
  output: {
    path: dist,
    filename: '[name].[chunkhash].js',
    chunkFilename: 'chunk.[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new OptimizeCssAssetsPlugin(),
    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 5
      },
      cache: true,
      parallel: false
    })
    // ,new Webpack.optimize.AggressiveSplittingPlugin({
    //  minSize: 30000,
    //  maxSize: 50000,
    //  chunkOverhead: 0,
    //  entryChunkMultiplicator: 1,
    // }),
  ]
})
