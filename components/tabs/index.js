import Tab from './Tab.vue'
import TabBar from './TabBar.vue'
import TabIndicator from './TabIndicator.vue'
import TabScroller from './TabScroller.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-tab', Tab)
    Vue.component('m-tab-bar', TabBar)
    Vue.component('m-tab-indicator', TabIndicator)
    Vue.component('m-tab-scroller', TabScroller)
  }
}
export default plugin

initPlugin(plugin)
