import Switch from './Switch.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-switch', Switch)
  }
}
export default plugin

initPlugin(plugin)
