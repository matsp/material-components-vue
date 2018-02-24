import Select from './Select.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-select', Select)
  }
}
export default plugin

initPlugin(plugin)
