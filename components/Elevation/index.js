export default {
  install (vm) {
    vm.component('m-elevation', () => import('./Elevation'))
  }
}
