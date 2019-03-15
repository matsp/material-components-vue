import DrawerContent from './DrawerContent.vue'
import DrawerHeader from './DrawerHeader.vue'
import Drawer from './Drawer.vue'
import DrawerScrim from './DrawerScrim.vue'
import DrawerAppContent from './DrawerAppContent.vue'
import DrawerList from './DrawerList.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-drawer-content', DrawerContent)
    vm.component('m-drawer-header', DrawerHeader)
    vm.component('m-drawer', Drawer)
    vm.component('m-drawer-scrim', DrawerScrim)
    vm.component('m-drawer-app-content', DrawerAppContent)
    vm.component('m-drawer-list', DrawerList)
  }
}
export default plugin

initPlugin(plugin)
