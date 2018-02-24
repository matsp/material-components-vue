import Button from './Button.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-button', Button)
  }
}
export default plugin

initPlugin(plugin)
