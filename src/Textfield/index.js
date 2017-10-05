import Textfield from './Textfield'
import TextfieldHelptext from './TextfieldHelptext'
import TextfieldMultiline from './TextfieldMultiline'

export { Textfield, TextfieldHelptext, TextfieldMultiline }

export default {
  install (vm) {
    vm.component('m-textfield', Textfield)
    vm.component('m-textfield-helptext', TextfieldHelptext)
    vm.component('m-textfield-multiline', TextfieldMultiline)
  }
}
