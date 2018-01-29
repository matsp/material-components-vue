const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.config.lib.common.js')

const root = path.join(__dirname)

module.exports = merge(common, {
  output: {
    path: path.resolve(root + '/dist'),
    filename: 'material-components-vue.js',
    libraryTarget: 'umd',
    library: 'material-components-vue'
  }
})
