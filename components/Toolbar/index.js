import Toolbar from './Toolbar'
import ToolbarRow from './ToolbarRow'

export { Toolbar, ToolbarRow }

export default {
  install (vm) {
    vm.component('m-toolbar', Toolbar)
    vm.component('m-toolbar-row', ToolbarRow)
  }
}
