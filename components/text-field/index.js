import TextField from './TextField.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-text-field', TextField)
  }
}
export default plugin

initPlugin(plugin)
