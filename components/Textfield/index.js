export default {
  install (vm) {
    vm.component('m-textfield', () => import('./Textfield'))
    vm.component('m-textfield-helptext', () => import('./TextfieldHelptext'))
    vm.component('m-textfield-multiline', () => import('./TextfieldMultiline'))
  }
}
