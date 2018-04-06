import Select from './Select.vue'
import SelectBottomLine from './SelectBottomLine.vue'
import SelectLabel from './SelectLabel.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-select', Select)
    vm.component('m-select-bottom-line', SelectBottomLine)
    vm.component('m-select-label', SelectLabel)
  }
}
export default plugin

initPlugin(plugin)
