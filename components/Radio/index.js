export default {
  install (vm) {
    vm.component('m-radio', () => import('./Radio'))
  }
}
