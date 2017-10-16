import PermanentDrawer from './PermanentDrawer/PermanentDrawer'
import PermanentDrawerListItem from './PermanentDrawer/PermanentDrawerListItem'

import PersistentDrawer from './PersistentDrawer/PersistentDrawer'
import PersistentDrawerListItem from './PersistentDrawer/PersistentDrawerListItem'

import TemporaryDrawer from './TemporaryDrawer/TemporaryDrawer'
import TemporaryDrawerListItem from './TemporaryDrawer/TemporaryDrawerListItem'

import DrawerItemDivider from './DrawerItemDivider'

export { PermanentDrawer, PermanentDrawerListItem, PersistentDrawer, PersistentDrawerListItem, TemporaryDrawer, TemporaryDrawerListItem, DrawerItemDivider }

export default {
  install (vm) {
    vm.component('m-permanent-drawer', PermanentDrawer)
    vm.component('m-permanent-drawer-item', PermanentDrawerListItem)
    vm.component('m-persistent-drawer', PersistentDrawer)
    vm.component('m-persistent-drawer-item', PersistentDrawerListItem)
    vm.component('m-temporary-drawer', TemporaryDrawer)
    vm.component('m-temporary-drawer-item', TemporaryDrawerListItem)
    vm.component('m-drawer-item-divider', DrawerItemDivider)
  }
}
