import path from 'path'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import merge from 'webpack-merge'
import common, { root } from './webpack.config.common'

export default merge(common, {
  mode: 'production',
  target: 'web',
  output: {
    path: path.resolve(root, '/dist'),
    filename: '[name]/[name].min.js',
    libraryTarget: 'umd'
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 5
      },
      cache: true,
      parallel: true,
      extractComments: true
    }),
    new OptimizeCssAssetsPlugin()
  ]
})
