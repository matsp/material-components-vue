import Fab from './Fab.vue'
import FabLabel from './FabLabel'
import FabIcon from './FabIcon'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-fab', Fab)
    vm.component('m-fab-label', FabLabel)
    vm.component('m-fab-icon', FabIcon)
  }
}
export default plugin

initPlugin(plugin)
