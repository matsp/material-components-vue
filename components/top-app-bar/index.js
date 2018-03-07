import TopAppBar from './TopAppBar.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-top-app-bar', TopAppBar)
  }
}
export default plugin

initPlugin(plugin)
