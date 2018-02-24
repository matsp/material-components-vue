import LayoutGrid from './LayoutGrid.vue'
import LayoutGridCell from './LayoutGridCell.vue'
import LayoutGridInner from './LayoutGridInner.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-layout-grid', LayoutGrid)
    vm.component('m-layout-grid-cell', LayoutGridCell)
    vm.component('m-layout-grid-inner', LayoutGridInner)
  }
}
export default plugin

initPlugin(plugin)
