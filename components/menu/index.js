import Menu from './Menu.vue'
import MenuAnchor from './MenuAnchor.vue'
import MenuSurface from './MenuSurface.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-menu', Menu)
    vm.component('m-menu-anchor', MenuAnchor)
    vm.component('m-menu-surface', MenuSurface)
  }
}
export default plugin

initPlugin(plugin)
