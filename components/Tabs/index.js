import Tab from './Tab.vue'
import TabBar from './TabBar.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-tab', Tab)
    vm.component('m-tab-bar', TabBar)
  }
}
export default plugin

initPlugin(plugin)
