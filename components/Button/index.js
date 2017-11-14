export default {
  install (vm) {
    vm.component('m-button', () => import('./Button'))
  }
}
