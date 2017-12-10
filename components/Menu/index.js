import Menu from './Menu.vue'
import MenuAnchor from './MenuAnchor.vue'
import MenuDivider from './MenuDivider.vue'
import MenuGroup from './MenuGroup.vue'
import MenuGroupDivider from './MenuGroupDivider.vue'
import MenuGroupSubheader from './MenuGroupSubheader.vue'
import MenuItem from './MenuItem.vue'

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
