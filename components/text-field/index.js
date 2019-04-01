import TextField from './TextField.vue'
import TextFieldHelperText from './TextFieldHelperText.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-text-field', TextField)
    Vue.component('m-text-field-helper-text', TextFieldHelperText)
  }
}
export default plugin

initPlugin(plugin)
