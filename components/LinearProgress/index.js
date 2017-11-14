export default {
  install (vm) {
    vm.component('m-linear-progress', () => import('./LinearProgress'))
  }
}
