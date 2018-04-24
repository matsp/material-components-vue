import TopAppBar from './TopAppBar.vue'
import TopAppBarFixedAdjust from './TopAppBarFixedAdjust.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-top-app-bar', TopAppBar)
    vm.component('m-top-app-bar-fixed-adjust', TopAppBarFixedAdjust)
  }
}
export default plugin

initPlugin(plugin)
