import Toolbar from './Toolbar.vue'
import ToolbarFixedAdjust from './ToolbarFixedAdjust.vue'
import ToolbarIcon from './ToolbarIcon.vue'
import ToolbarRow from './ToolbarRow.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-toolbar', Toolbar)
    Vue.component('m-toolbar-fixed-adjust', ToolbarFixedAdjust)
    Vue.component('m-toolbar-icon', ToolbarIcon)
    Vue.component('m-toolbar-row', ToolbarRow)
  }
}
export default plugin

initPlugin(plugin)
