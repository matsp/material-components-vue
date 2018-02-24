import IconToggle from './IconToggle.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-icon-toggle', IconToggle)
  }
}
export default plugin

initPlugin(plugin)
