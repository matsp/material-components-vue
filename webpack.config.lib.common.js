const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const root = path.join(__dirname)
const components = path.join(root + '/components/')
const nodeModules = path.join(root, '/node_modules/')

module.exports = {
  entry: {
    button: path.resolve(components + '/Button/index.js'),
    card: path.resolve(components + '/Card/index.js'),
    checkbox: path.resolve(components + '/Checkbox/index.js'),
    chips: path.resolve(components + '/Chips/index.js'),
    dialog: path.resolve(components + '/Dialog/index.js'),
    drawer: path.resolve(components + '/Drawer/index.js'),
    elevation: path.resolve(components + '/Elevation/index.js'),
    fab: path.resolve(components + '/Fab/index.js'),
    'form-field': path.resolve(components + '/FormField/index.js'),
    gridList: path.resolve(components + '/GridList/index.js'),
    icon: path.resolve(components + '/Icon/index.js'),
    'icon-toggle': path.resolve(components + '/IconToggle/index.js'),
    'layout-grid': path.resolve(components + '/LayoutGrid/index.js'),
    'linear-progress': path.resolve(components + '/LinearProgress/index.js'),
    'line-ripple': path.resolve(components + '/LineRipple/index.js'),
    list: path.resolve(components + '/List/index.js'),
    menu: path.resolve(components + '/Menu/index.js'),
    radio: path.resolve(components + '/Radio/index.js'),
    ripple: path.resolve(components + '/Ripple/index.js'),
    select: path.resolve(components + '/Select/index.js'),
    slider: path.resolve(components + '/Slider/index.js'),
    snackbar: path.resolve(components + '/Snackbar/index.js'),
    switch: path.resolve(components + '/Switch/index.js'),
    tabs: path.resolve(components + '/Tabs/index.js'),
    textfield: path.resolve(components + '/Textfield/index.js'),
    theme: path.resolve(components + '/Theme/index.js'),
    toolbar: path.resolve(components + '/Toolbar/index.js'),
    typography: path.resolve(components + '/Typography/index.js')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
                includePaths: [components, nodeModules]
              }
            }
          ]
        })
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
      filename: 'mcv-[name].css',
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
