import Textfield from './Textfield.vue'
import TextfieldHelptext from './TextfieldHelptext.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-textfield', Textfield)
    vm.component('m-textfield-helptext', TextfieldHelptext)
  }
}
export default plugin

initPlugin(plugin)
