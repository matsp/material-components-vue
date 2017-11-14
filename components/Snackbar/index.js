export default {
  install (vm) {
    vm.component('m-snackbar', () => import('./Snackbar'))
  }
}
