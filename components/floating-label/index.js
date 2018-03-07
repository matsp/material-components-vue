import FloatingLabel from './FloatingLabel.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-floating-label', FloatingLabel)
  }
}
export default plugin

initPlugin(plugin)
