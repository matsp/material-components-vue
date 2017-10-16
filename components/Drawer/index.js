import TemporaryDrawer from './TemporaryDrawer/TemporaryDrawer'
import TemporaryDrawerListItem from './TemporaryDrawer/TemporaryDrawerListItem'
import DrawerItemDivider from './DrawerItemDivider'

export { TemporaryDrawer, TemporaryDrawerListItem, DrawerItemDivider }

export default {
  install (vm) {
    vm.component('m-temporary-drawer', TemporaryDrawer)
    vm.component('m-temporary-drawer-item', TemporaryDrawerListItem)
    vm.component('m-drawer-item-divider', DrawerItemDivider)
  }
}
