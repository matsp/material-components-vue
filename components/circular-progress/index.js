import CircularProgress from './CircularProgress.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-circular-progress', CircularProgress)
  }
}
export default plugin

initPlugin(plugin)
