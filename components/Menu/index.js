import Menu from './Menu.vue'
import MenuAnchor from './MenuAnchor.vue'

export default {
  install (vm) {
    vm.component('m-menu', Menu)
    vm.component('m-menu-anchor', MenuAnchor)
  }
}
