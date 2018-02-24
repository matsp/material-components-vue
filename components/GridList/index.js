import GridList from './GridList.vue'
import GridListTile from './GridListTile.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-grid-list', GridList)
    vm.component('m-grid-tile', GridListTile)
  }
}
export default plugin

initPlugin(plugin)
