const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const root = path.join(__dirname)
const demo = path.join(root + '/demo/')
const nodeModules = path.join(root, '/node_modules/')

module.exports = {
  entry: {
    app: [path.resolve(demo + 'index.js')]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [demo, path.join(nodeModules, '@material')],
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              includePaths: [nodeModules]
            }
          }
        ]
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
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.jpg($|\?)|\.png($|\?)/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    alias: {
      panels: path.resolve(demo + '/panels/'),
      views: path.resolve(demo + '/views/'),
      modules: path.resolve(demo + '/store/modules/'),
      routes: path.resolve(demo + '/router/routes/')
    },
    extensions: ['.js', '.json', '.css', '.scss', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      Promise: 'core-js/fn/promise'
    }),
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      template: path.resolve(demo + 'index.html'),
      chunksSortMode: 'dependency'
      // hash: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].min.css',
      chunkFilename: 'chunk.[chunkhash].min.css'
    }),
    new PreloadWebpackPlugin({
      rel: 'prefetch',
      include: 'asyncChunks'
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'initial'
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'allAssets',
      fileWhitelist: [/\.woff2$/],
      fileBlacklist: [/\.js/, /\.css/, /\.woff$/]
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
