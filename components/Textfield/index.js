import Textfield from './Textfield.vue'
import TextfieldHelptext from './TextfieldHelptext.vue'
import TextfieldMultiline from './TextfieldMultiline.vue'

export default {
  install (vm) {
    vm.component('m-textfield', Textfield)
    vm.component('m-textfield-helptext', TextfieldHelptext)
    vm.component('m-textfield-multiline', TextfieldMultiline)
  }
}
