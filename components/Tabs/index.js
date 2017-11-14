export default {
  install (vm) {
    vm.component('m-tab', () => import('./Tab'))
    vm.component('m-tab-bar', () => import('./TabBar'))
  }
}
