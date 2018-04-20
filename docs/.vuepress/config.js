module.exports = {
  title: 'Material Components Vue',
  description: 'Material Design styled components for Vue.js',
  markdown: {
    toc: {
      includeLevel: [1, 2]
    }
  },
  themeConfig: {
    sidebar: [
      '/Button'
    ]
  },
  // chainWebpack: config => {
    // config.module
      // .rule('sass')
      // .test(/\.scss$/)
      // .use('css-loader')
      // .loader('sass-loader')
      // .options({
        // includePaths: ['../../node_modules']
      // })
  // }
}
