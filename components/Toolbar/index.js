import Toolbar from './Toolbar'
import ToolbarFixedAdjust from './ToolbarFixedAdjust'
import ToolbarIcon from './ToolbarIcon'
import ToolbarRow from './ToolbarRow'

export { Toolbar, ToolbarFixedAdjust, ToolbarIcon, ToolbarRow }

export default {
  install (vm) {
    vm.component('m-toolbar', Toolbar)
    vm.component('m-toolbar-fixed-adjust', ToolbarFixedAdjust)
    vm.component('m-toolbar-icon', ToolbarIcon)
    vm.component('m-toolbar-row', ToolbarRow)
  }
}
