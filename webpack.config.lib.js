const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.config.lib.common.js')

const root = path.join(__dirname)

module.exports = merge(common, {
  mode: 'development',
  target: 'node',
  output: {
    path: path.resolve(root + '/dist'),
    filename: '[name]/index.js',
    libraryTarget: 'umd'
  }
})
