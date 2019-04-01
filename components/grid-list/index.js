import GridList from './GridList.vue'
import GridListTile from './GridListTile.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-grid-list', GridList)
    Vue.component('m-grid-tile', GridListTile)
  }
}
export default plugin

initPlugin(plugin)
