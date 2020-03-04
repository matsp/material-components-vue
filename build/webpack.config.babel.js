import path from 'path'
import merge from 'webpack-merge'
import common, { root } from './webpack.config.common'

export default merge(common, {
  mode: 'development',
  target: 'web',
  output: {
    path: path.resolve(root, '/dist'),
    filename: '[name]/index.js',
    libraryTarget: 'umd'
  }
})
