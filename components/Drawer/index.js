export default {
  install (vm) {
    vm.component('m-permanent-drawer', () => import('./PermanentDrawer/PermanentDrawer'))
    vm.component('m-permanent-drawer-item', () => import('./PermanentDrawer/PermanentDrawerListItem'))
    vm.component('m-persistent-drawer', () => import('./PersistentDrawer/PersistentDrawer'))
    vm.component('m-persistent-drawer-item', () => import('./PersistentDrawer/PersistentDrawerListItem'))
    vm.component('m-temporary-drawer', () => import('./TemporaryDrawer/TemporaryDrawer'))
    vm.component('m-temporary-drawer-item', () => import('./TemporaryDrawer/TemporaryDrawerListItem'))
    vm.component('m-drawer-item-divider', () => import('./DrawerItemDivider'))
  }
}
