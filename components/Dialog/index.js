export default {
  install (vm) {
    vm.component('m-dialog', () => import('./Dialog'))
  }
}
