const path = require('path')
const glob = require('glob')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const root = path.join(__dirname)
const src = path.join(root + '/src/')
const example = path.join(root + '/example/')
const nodeModules = path.join(root, '/node_modules/')

// const vueSCSS = [
//  { loader: 'style-loader' },
//  { loader: 'css-loader', options: {minimize: true} },
//  { loader: 'sass-loader',
//    options: {
//      includePaths: glob.sync('node_modules').map((d) => path.join(root, d))
//    }
//  }
// ]

module.exports = {
  entry: {
    bundle: [path.resolve(example + '/index.js')],
    vendor: ['vue', 'vuex', 'vue-router']
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
        include: [src, example, path.join(nodeModules, '@material')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [{
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: glob.sync('node_modules').map((d) => path.join(root, d))
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
      components: path.resolve(root + '/src/components/'),
      panels: path.resolve(example + '/panels/'),
      views: path.resolve(example + '/views/'),
      modules: path.resolve(example + '/store/modules/'),
      routes: path.resolve(example + '/router/routes/')
    },
    extensions: ['.js', '.json', '.css', '.scss', '.vue']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 8080
  }
}

module.exports.plugins = [
  new Webpack.LoaderOptionsPlugin({
    minimize: false,
    debug: true
  }),
  new Webpack.HotModuleReplacementPlugin(),
  new Webpack.NamedModulesPlugin(),
  new Webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest']
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(example + 'index.html'),
    chunksSortMode: 'dependency'
    // hash: true
  }),
  new ExtractTextPlugin({
    filename: '[name].[chunkhash].css',
    allChunks: true
  })
]
