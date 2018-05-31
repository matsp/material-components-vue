const path = require('path')
const material = path.resolve('node_modules/@material')

module.exports = {
  title: 'Material Components Vue',
  description: 'Material Design components for Vue.js',
  base: '/material-components-vue/',
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
    includePaths: [material]
  }
}
