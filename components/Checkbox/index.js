export default {
  install (vm) {
    vm.component('m-checkbox', () => import('./Checkbox'))
  }
}
