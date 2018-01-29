const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const root = path.join(__dirname)
const components = path.join(root + '/components/')
const nodeModules = path.join(root, '/node_modules/')

module.exports = {
  name: 'material-components-vue',
  entry: path.resolve(components + 'index.js'),
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false,
          loaders: {
            scss: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader'
                },
                {
                  loader: 'sass-loader',
                  options: {
                    includePaths: [components, nodeModules]
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
    extensions: ['.js', '.json', '.css', '.scss', '.vue']
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
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      filename: 'material-components-vue.css',
      allChunks: true
    }),
    new OptimizeCssAssetsPlugin(),
    new webpack.BannerPlugin({
      banner: [
        '/*!',
        ' Material Components for Vue.js',
        ` Copyright (c) ${new Date().getFullYear()} Mats Pfeiffer`,
        ' License: MIT',
        '*/'
      ].join('\n'),
      raw: true,
      entryOnly: true
    })
  ],
  stats: {
    all: false,
    assets: true,
    chunkModules: true,
    chunkOrigins: true,
    errors: true,
    errorDetails: true,
    colors: true
  }
}
