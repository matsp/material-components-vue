export default {
  install (vm) {
    vm.component('m-menu', () => import('./Menu'))
    vm.component('m-menu-anchor', () => import('./MenuAnchor'))
    vm.component('m-menu-divider', () => import('./MenuDivider'))
    vm.component('m-menu-group', () => import('./MenuGroup'))
    vm.component('m-menu-group-divider', () => import('./MenuGroupDivider'))
    vm.component('m-menu-group-subheader', () => import('./MenuGroupSubheader'))
    vm.component('m-menu-item', () => import('./MenuItem'))
  }
}
