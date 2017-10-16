import GridList from './GridList'
import GridListTile from './GridListTile'

export { GridList, GridListTile }

export default {
  install (vm) {
    vm.component('m-grid-list', GridList)
    vm.component('m-grid-tile', GridListTile)
  }
}
