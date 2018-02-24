import Textfield from './Textfield.vue'
import TextfieldHelptext from './TextfieldHelptext.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-text-field', Textfield)
    vm.component('m-text-field-helptext', TextfieldHelptext)
  }
}
export default plugin

initPlugin(plugin)
