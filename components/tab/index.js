import Tab from './Tab.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-tab', Tab)
  }
}
export default plugin

initPlugin(plugin)
