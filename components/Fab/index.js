export default {
  install (vm) {
    vm.component('m-fab', () => import('./Fab'))
  }
}
