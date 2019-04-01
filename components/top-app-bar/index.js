import TopAppBar from './TopAppBar.vue'
import TopAppBarFixedAdjust from './TopAppBarFixedAdjust.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-top-app-bar', TopAppBar)
    Vue.component('m-top-app-bar-fixed-adjust', TopAppBarFixedAdjust)
  }
}
export default plugin

initPlugin(plugin)
