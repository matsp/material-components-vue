import FormField from './FormField.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-form-field', FormField)
  }
}
export default plugin

initPlugin(plugin)
