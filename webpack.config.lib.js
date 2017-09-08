const path = require('path')
const Webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const root = path.join(__dirname)
const src = path.join(root + '/src/')
const example = path.join(root + '/example/')
const nodeModules = path.join(root, '/node_modules/')

module.exports = {
  entry: {
    base: [path.resolve(src + '/index.js')]
  },
  output: {
    path: path.resolve(root + '/dist'),
    filename: 'material-components-vue.min.js',
    library: 'material-components-vue',
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
      components: path.resolve(root + '/src/components/'),
      panels: path.resolve(example + '/panels/'),
      views: path.resolve(example + '/views/'),
      modules: path.resolve(example + '/store/modules/'),
      routes: path.resolve(example + '/router/routes/'),
      scss: path.resolve(src + '/scss/')
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
  }),
  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|html|css)$/,
    threshold: 1024,
    minRatio: 0.8
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false,
    reportFilename: path.resolve(root, 'reports/bundle_analyse.html')
  })
]
