import LayoutGrid from './LayoutGrid.vue'
import LayoutGridCell from './LayoutGridCell.vue'
import LayoutGridInner from './LayoutGridInner.vue'

export default {
  install (vm) {
    vm.component('m-layout-grid', LayoutGrid)
    vm.component('m-layout-grid-cell', LayoutGridCell)
    vm.component('m-layout-grid-inner', LayoutGridInner)
  }
}
