import Tab from './Tab.vue'
import TabBar from './TabBar.vue'
import TabIndicator from './TabIndicator.vue'
import TabScroller from './TabScroller.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-tab', Tab)
    vm.component('m-tab-bar', TabBar)
    vm.component('m-tab-indicator', TabIndicator)
    vm.component('m-tab-scroller', TabScroller)
  }
}
export default plugin

initPlugin(plugin)
