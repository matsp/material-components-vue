import Menu from './Menu.vue'
import MenuAnchor from './MenuAnchor.vue'
import MenuSurface from './MenuSurface.vue'
import MenuSelectionGroup from './MenuSelectionGroup'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-menu', Menu)
    vm.component('m-menu-anchor', MenuAnchor)
    vm.component('m-menu-surface', MenuSurface)
    vm.component('m-menu-selection-group', MenuSelectionGroup)
  }
}
export default plugin

initPlugin(plugin)
