import GridList from './GridList'
import GridListIcon from './GridListIcon'
import GridListSupporttext from './GridListSupporttext'
import GridListTile from './GridListTile'
import GridListTiles from './GridListTiles'
import GridListTitle from './GridListTitle'

export { GridList, GridListIcon, GridListSupporttext, GridListTile, GridListTiles, GridListTitle }

export default {
  install (vm) {
    vm.component('m-grid-list', GridList)
    vm.component('m-grid-list-icon', GridListIcon)
    vm.component('m-grid-list-supporttext', GridListSupporttext)
    vm.component('m-grid-list-tile', GridListTile)
    vm.component('m-grid-list-tiles', GridListTiles)
    vm.component('m-grid-list-title', GridListTitle)
  }
}
