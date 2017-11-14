export default {
  install (vm) {
    vm.component('m-grid-list', () => import('./GridList'))
    vm.component('m-grid-tile', () => import('./GridListTile'))
  }
}
