import Menu from './Menu'
import MenuAnchor from './MenuAnchor'
import MenuDivider from './MenuDivider'
import MenuGroup from './MenuGroup'
import MenuGroupDivider from './MenuGroupDivider'
import MenuGroupSubheader from './MenuGroupSubheader'
import MenuItem from './MenuItem'

export { Menu, MenuAnchor }

export default {
  install (vm) {
    vm.component('m-menu', Menu)
    vm.component('m-menu-anchor', MenuAnchor)
    vm.component('m-menu-divider', MenuDivider)
    vm.component('m-menu-group', MenuGroup)
    vm.component('m-menu-group-divider', MenuGroupDivider)
    vm.component('m-menu-group-subheader', MenuGroupSubheader)
    vm.component('m-menu-item', MenuItem)
  }
}
