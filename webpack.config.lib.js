const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.config.lib.common.js')

const root = path.join(__dirname)

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(root + '/dist'),
    filename: '[name]/mcv-[name].js',
    libraryTarget: 'umd',
    library: 'mcv-[name]'
  }
})
