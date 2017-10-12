import LayoutGrid from './LayoutGrid'
import LayoutGridCell from './LayoutGridCell'
import LayoutGridInner from './LayoutGridInner'

export { LayoutGrid, LayoutGridCell, LayoutGridInner }

export default {
  install (vm) {
    vm.component('m-layout-grid', LayoutGrid)
    vm.component('m-layout-grid-cell', LayoutGridCell)
    vm.component('m-layout-grid-inner', LayoutGridInner)
  }
}
