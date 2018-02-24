import Menu from './Menu.vue'
import MenuAnchor from './MenuAnchor.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-menu', Menu)
    vm.component('m-menu-anchor', MenuAnchor)
  }
}
export default plugin

initPlugin(plugin)
