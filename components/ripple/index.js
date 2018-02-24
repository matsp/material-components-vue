import Ripple from './Ripple.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-ripple', Ripple)
  }
}
export default plugin

initPlugin(plugin)
