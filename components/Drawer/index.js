import PermanentDrawer from './PermanentDrawer/PermanentDrawer.vue'
import PermanentDrawerListItem from './PermanentDrawer/PermanentDrawerListItem.vue'
import PersistentDrawer from './PersistentDrawer/PersistentDrawer.vue'
import PersistentDrawerListItem from './PersistentDrawer/PersistentDrawerListItem.vue'
import TemporaryDrawer from './TemporaryDrawer/TemporaryDrawer.vue'
import TemporaryDrawerListItem from './TemporaryDrawer/TemporaryDrawerListItem.vue'
import DrawerItemDivider from './DrawerItemDivider.vue'

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
