const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const root = path.join(__dirname)
const demo = path.join(root + '/demo/')
const components = path.join(root + '/components/')
const nodeModules = path.join(root, '/node_modules/')

module.exports = {
  entry: {
    bundle: [path.resolve(demo + '/index.js')],
    vendor: ['babel-polyfill', 'vue', 'vuex', 'vue-router', path.resolve(components + 'index.js')]
  },
  output: {
    path: path.resolve(root + '/dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[id].[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [demo, components, path.join(nodeModules, '@material')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false,
          loaders: {
            scss: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [{
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [demo, components, nodeModules]
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
      'vue$': 'vue/dist/vue.runtime.esm.js',
      'vuex': 'vuex/dist/vuex.esm.js',
      'vue-router': 'vue-router/dist/vue-router.esm.js',
      panels: path.resolve(demo + '/panels/'),
      views: path.resolve(demo + '/views/'),
      modules: path.resolve(demo + '/store/modules/'),
      routes: path.resolve(demo + '/router/routes/')
    },
    extensions: ['.js', '.json', '.css', '.scss', '.vue']
  }
}

module.exports.plugins = [
  new Webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new Webpack.HashedModuleIdsPlugin(),
  new Webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest']
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(demo + 'index.html'),
    chunksSortMode: 'dependency'
    // hash: true
  }),
  new ExtractTextPlugin({
    filename: '[name].[chunkhash].css',
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
  // new Webpack.optimize.AggressiveSplittingPlugin({
  //  minSize: 30000,
  //  maxSize: 50000,
  //  chunkOverhead: 0,
  //  entryChunkMultiplicator: 1,
  // }),
  new Webpack.optimize.ModuleConcatenationPlugin(),
  new UglifyJSPlugin({
    ecma: 5,
    cache: true,
    parallel: true
  })
]
