import NotchedOutline from './NotchedOutline.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-notched-outline', NotchedOutline)
  }
}
export default plugin

initPlugin(plugin)
