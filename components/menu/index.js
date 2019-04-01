import Menu from './Menu.vue'
import MenuAnchor from './MenuAnchor.vue'
import MenuSurface from './MenuSurface.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-menu', Menu)
    Vue.component('m-menu-anchor', MenuAnchor)
    Vue.component('m-menu-surface', MenuSurface)
  }
}
export default plugin

initPlugin(plugin)
