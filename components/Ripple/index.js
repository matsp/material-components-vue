export default {
  install (vm) {
    vm.component('m-ripple', () => import('./Ripple'))
  }
}
