import FormField from './FormField.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-form-field', FormField)
  }
}
export default plugin

initPlugin(plugin)
