import TextField from './TextField.vue'
import TextFieldHelperText from './TextFieldHelperText.vue'
import TextFieldCharacterCounter from './TextFieldCharacterCounter'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-text-field', TextField)
    vm.component('m-text-field-helper-text', TextFieldHelperText)
    vm.component('m-text-field-character-counter', TextFieldCharacterCounter)
  }
}
export default plugin

initPlugin(plugin)
