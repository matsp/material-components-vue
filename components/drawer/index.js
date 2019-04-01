import DrawerContent from './DrawerContent.vue'
import DrawerHeader from './DrawerHeader.vue'
import Drawer from './Drawer.vue'
import DrawerScrim from './DrawerScrim.vue'
import DrawerAppContent from './DrawerAppContent.vue'
import DrawerList from './DrawerList.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-drawer-content', DrawerContent)
    Vue.component('m-drawer-header', DrawerHeader)
    Vue.component('m-drawer', Drawer)
    Vue.component('m-drawer-scrim', DrawerScrim)
    Vue.component('m-drawer-app-content', DrawerAppContent)
    Vue.component('m-drawer-list', DrawerList)
  }
}
export default plugin

initPlugin(plugin)
