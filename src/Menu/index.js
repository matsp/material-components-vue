import Menu from './Menu'
import MenuAnchor from './MenuAnchor'

export { Menu, MenuAnchor }

export default {
  install (vm) {
    vm.component('m-menu', Menu)
    vm.component('m-menu-anchor', MenuAnchor)
  }
}
