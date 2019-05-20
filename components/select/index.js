import Select from './Select.vue'
import SelectHelperText from './SelectHelperText.vue'
import SelectIcon from './SelectIcon'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-select', Select)
    vm.component('m-select-helper-text', SelectHelperText)
    vm.component('m-select-icon', SelectIcon)
  }
}
export default plugin

initPlugin(plugin)
