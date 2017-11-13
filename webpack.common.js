const path = require('path')
const Webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const root = path.join(__dirname)
const demo = path.join(root + '/demo/')
const components = path.join(root + '/components/')
const nodeModules = path.join(root, '/node_modules/')

module.exports = {
  entry: {
    bundle: ['babel-polyfill', path.resolve(demo + 'index.js')],
    components: [path.resolve(components + 'index.js')],
    vue: ['vue', 'vuex', 'vue-router']
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
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new Webpack.NamedModulesPlugin(),
    new Webpack.HashedModuleIdsPlugin(),
    new Webpack.optimize.CommonsChunkPlugin({
      names: ['bundle', 'vue', 'components', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(demo + 'index.html'),
      chunksSortMode: 'dependency'
      // hash: true
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true
    })
  ]
}
