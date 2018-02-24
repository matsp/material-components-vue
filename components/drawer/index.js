import DrawerContent from './DrawerContent.vue'
import DrawerHeader from './DrawerHeader.vue'
import DrawerToolbarSpacer from './DrawerToolbarSpacer.vue'
import DrawerPermanent from './DrawerPermanent/DrawerPermanent.vue'
import DrawerPersistent from './DrawerPersistent/DrawerPersistent.vue'
import DrawerTemporary from './DrawerTemporary/DrawerTemporary.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-drawer-content', DrawerContent)
    vm.component('m-drawer-header', DrawerHeader)
    vm.component('m-drawer-toolbar-spacer', DrawerToolbarSpacer)
    vm.component('m-drawer-permanent', DrawerPermanent)
    vm.component('m-drawer-persistent', DrawerPersistent)
    vm.component('m-drawer-temporary', DrawerTemporary)
  }
}
export default plugin

initPlugin(plugin)
