const path = require('path')
const nodeModules = path.resolve('node_modules/')

module.exports = {
  title: 'Material Components Vue',
  description: 'Material Design components for Vue.js',
  head: [
    ['link', { rel: 'icon', href: '/logo.png'}]
  ],
  themeConfig: {
    repo: 'matsp/material-components-vue',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Components', link: '/components/' }
    ]
  },
  scss: {
    includePaths: [nodeModules]
  }
}
