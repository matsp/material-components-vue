const path = require('path')
const Webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const root = path.join(__dirname)
const src = path.join(root + '/src/')
const nodeModules = path.join(root, '/node_modules/')

module.exports = {
  entry: {
    base: [path.resolve(src + '/index.js')]
  },
  output: {
    path: path.resolve(root + '/dist'),
    filename: 'material-components-vue.min.js',
    library: 'MaterialComponentsVue',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [src, path.join(nodeModules, '@material')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false,
          cssSourceMap: false,
          loaders: {
            scss: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [{
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [nodeModules, src]
                }
              }
              ]
            })
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(src)
    },
    extensions: ['.js', '.json', '.css', '.scss', '.vue']
  }
}

module.exports.plugins = [
  new ExtractTextPlugin({
    filename: 'material-components-vue.css',
    allChunks: true
  }),
  new OptimizeCssAssetsPlugin(),
  new Webpack.optimize.ModuleConcatenationPlugin(),
  new Webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      dead_code: true,
      unused: true,
      keep_fnames: false
    },
    mangle: {
      keep_fnames: false
    },
    output: {
      beautify: false
    }
  })
]
