export default {
  install (vm) {
    vm.component('m-icon', () => import('./Icon'))
  }
}
