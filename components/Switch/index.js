export default {
  install (vm) {
    vm.component('m-switch', () => import('./Switch'))
  }
}
