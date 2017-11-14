export default {
  install (vm) {
    vm.component('m-select', () => import('./Select'))
    vm.component('m-select-multi', () => import('./SelectMulti'))
    vm.component('m-select-multi-divider', () => import('./SelectMultiDivider'))
    vm.component('m-select-multi-group', () => import('./SelectMultiGroup'))
    vm.component('m-select-multi-option', () => import('./SelectMultiOption'))
    vm.component('m-select-option', () => import('./SelectOption'))
  }
}
