import Fab from './Fab.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-fab', Fab)
  }
}
export default plugin

initPlugin(plugin)
