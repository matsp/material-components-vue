import GridList from './GridList.vue'
import GridListTile from './GridListTile.vue'

export default {
  install (vm) {
    vm.component('m-grid-list', GridList)
    vm.component('m-grid-tile', GridListTile)
  }
}
