import TextField from './TextField.vue'
import TextFieldHelperText from './TextFieldHelperText.vue'
import TextFieldCharacterCounter from './TextFieldCharacterCounter'
import './styles.scss'

import { initPlugin } from '../'
import TextFieldIcon from './TextFieldIcon'

const plugin = {
  install (vm) {
    vm.component('m-text-field', TextField)
    vm.component('m-text-field-helper-text', TextFieldHelperText)
    vm.component('m-text-field-character-counter', TextFieldCharacterCounter)
    vm.component('m-text-field-icon', TextFieldIcon)
  }
}
export default plugin

initPlugin(plugin)
