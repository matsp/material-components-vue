const path = require('path')
const nodeModules = path.resolve('node_modules/')

module.exports = {
  title: 'Material Components Vue',
  description: 'Material Design styled components for Vue.js',
  markdown: {
    toc: {
      includeLevel: [1, 2]
    }
  },
  themeConfig: {
    repo: 'matsp/material-components-vue',
    sidebar: [
      '/Button',
      '/Card'
    ]
  },
  scss: {
    includePaths: [nodeModules]
  }
}
