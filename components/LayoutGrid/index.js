export default {
  install (vm) {
    vm.component('m-layout-grid', () => import('./LayoutGrid'))
    vm.component('m-layout-grid-cell', () => import('./LayoutGridCell'))
    vm.component('m-layout-grid-inner', () => import('./LayoutGridInner'))
  }
}
