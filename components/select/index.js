import Select from './Select.vue'
import SelectHelperText from './SelectHelperText.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-select', Select)
    vm.component('m-select-helper-text', SelectHelperText)
  }
}
export default plugin

initPlugin(plugin)
