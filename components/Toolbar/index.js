import Toolbar from './Toolbar.vue'
import ToolbarFixedAdjust from './ToolbarFixedAdjust.vue'
import ToolbarIcon from './ToolbarIcon.vue'
import ToolbarRow from './ToolbarRow.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-toolbar', Toolbar)
    vm.component('m-toolbar-fixed-adjust', ToolbarFixedAdjust)
    vm.component('m-toolbar-icon', ToolbarIcon)
    vm.component('m-toolbar-row', ToolbarRow)
  }
}
export default plugin

initPlugin(plugin)
