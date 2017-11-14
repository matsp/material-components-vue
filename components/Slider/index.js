export default {
  install (vm) {
    vm.component('m-slider', () => import('./Slider'))
  }
}
