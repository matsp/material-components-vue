const webpackConfig = require('../build/webpack.config.common')
const path = require('path')
const root = path.join(__dirname, '..')
const components = path.join(root, '/components/')
const nodeModules = path.join(root, '/node_modules/')

module.exports = {
  stories: ['../components/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-knobs/register'
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        {
          loader: 'style-loader'
        },
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
    });
    return {...config, resolve: {...webpackConfig.resolve}}
  }
};
