import DrawerContent from './DrawerContent.vue'
import DrawerHeader from './DrawerHeader.vue'
import DrawerToolbarSpacer from './DrawerToolbarSpacer.vue'
import DrawerPermanent from './DrawerPermanent/DrawerPermanent.vue'
import DrawerModal from './DrawerModal/DrawerModal.vue'
import DrawerDismissible from './DrawerDismissible/DrawerDismissible.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-drawer-content', DrawerContent)
    vm.component('m-drawer-header', DrawerHeader)
    vm.component('m-drawer-toolbar-spacer', DrawerToolbarSpacer)
    vm.component('m-drawer-permanent', DrawerPermanent)
    vm.component('m-drawer-modal', DrawerModal)
    vm.component('m-drawer-dismissible', DrawerDismissible)
  }
}
export default plugin

initPlugin(plugin)
