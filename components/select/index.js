import Select from './Select.vue'
import SelectHelperText from './SelectHelperText.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-select', Select)
    Vue.component('m-select-helper-text', SelectHelperText)
  }
}
export default plugin

initPlugin(plugin)
