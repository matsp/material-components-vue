import AutoInit from './AutoInit.vue'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-auto-init', AutoInit)
  }
}
export default plugin

initPlugin(plugin)
