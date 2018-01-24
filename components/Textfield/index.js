import Textfield from './Textfield.vue'
import TextfieldHelptext from './TextfieldHelptext.vue'

export default {
  install (vm) {
    vm.component('m-text-field', Textfield)
    vm.component('m-text-field-helptext', TextfieldHelptext)
  }
}
