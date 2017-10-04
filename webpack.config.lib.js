const path = require('path')
const Webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const root = path.join(__dirname)
const src = path.join(root + '/src/')
const components = path.join(src + '/components/')
const nodeModules = path.join(root, '/node_modules/')

module.exports = {
  entry: {
    base: [path.resolve(components + '/index.js')]
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
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/,
        options: {
          minimize: true
        }
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(root + '/src/components/')
    },
    extensions: ['.js', '.json', '.css', '.scss', '.vue']
  }
}

module.exports.plugins = [
  new Webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new ExtractTextPlugin({
    filename: 'material-components-vue.css',
    allChunks: true
  }),
  new OptimizeCssAssetsPlugin({
    cssProcessor: require('cssnano'),
    cssProcessorOptions: {
      safe: true,
      minimize: true,
      discardComments: { removeAll: true }
    }
  }),
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
