import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'

export const root = path.join(__dirname, '..')
const components = path.join(root, '/components')
const nodeModules = path.join(root, '/node_modules')

export default {
  entry: {
    button: path.resolve(components, './button/index.js'),
    card: path.resolve(components, './card/index.js'),
    checkbox: path.resolve(components, './checkbox/index.js'),
    chips: path.resolve(components, './chips/index.js'),
    dialog: path.resolve(components, './dialog/index.js'),
    drawer: path.resolve(components, './drawer/index.js'),
    elevation: path.resolve(components, './elevation/index.js'),
    fab: path.resolve(components, './fab/index.js'),
    'floating-label': path.resolve(components, './floating-label/index.js'),
    'form-field': path.resolve(components, './form-field/index.js'),
    icon: path.resolve(components, './icon/index.js'),
    'image-list': path.resolve(components, './image-list/index.js'),
    'icon-button': path.resolve(components, './icon-button/index.js'),
    'layout-grid': path.resolve(components, './layout-grid/index.js'),
    'linear-progress': path.resolve(components, './linear-progress/index.js'),
    'line-ripple': path.resolve(components, './line-ripple/index.js'),
    list: path.resolve(components, './list/index.js'),
    menu: path.resolve(components, './menu/index.js'),
    'notched-outline': path.resolve(components, './notched-outline/index.js'),
    radio: path.resolve(components, './radio/index.js'),
    ripple: path.resolve(components, './ripple/index.js'),
    select: path.resolve(components, './select/index.js'),
    shape: path.resolve(components, './shape/index.js'),
    slider: path.resolve(components, './slider/index.js'),
    snackbar: path.resolve(components, './snackbar/index.js'),
    switch: path.resolve(components, './switch/index.js'),
    // tab: path.resolve(components, './tab/index.js'),
    tabs: path.resolve(components, './tabs/index.js'),
    'text-field': path.resolve(components, './text-field/index.js'),
    theme: path.resolve(components, './theme/index.js'),
    'top-app-bar': path.resolve(components, './top-app-bar/index.js'),
    typography: path.resolve(components, './typography/index.js')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [components, path.join(nodeModules, '@material')],
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.s[ac]ss$/i,
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
              implementation: require('dart-sass'),
              sourceMap: false,
              sassOptions: {
                includePaths: [components, nodeModules]
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.vue'],
    alias: {
      '@components': path.resolve(root, './components'),
      vue: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].min.css'
    }),
    new CopyWebpackPlugin([
      {
        context: 'components/',
        from: '**/*',
        to: './',
        ignore: ['*.js', '*.vue', '*.css', '*.snap', '__tests__', '*.stories.*']
      }
    ])
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
