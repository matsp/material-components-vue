import PermanentDrawer from './PermanentDrawer/PermanentDrawer.vue'
import PersistentDrawer from './PersistentDrawer/PersistentDrawer.vue'
import TemporaryDrawer from './TemporaryDrawer/TemporaryDrawer.vue'

export default {
  install (vm) {
    vm.component('m-permanent-drawer', PermanentDrawer)
    vm.component('m-persistent-drawer', PersistentDrawer)
    vm.component('m-temporary-drawer', TemporaryDrawer)
  }
}
