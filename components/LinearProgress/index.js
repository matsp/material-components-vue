import LinearProgress from './LinearProgress.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-linear-progress', LinearProgress)
  }
}
export default plugin

initPlugin(plugin)
