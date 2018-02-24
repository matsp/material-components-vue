import Icon from './Icon.vue'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-icon', Icon)
  }
}
export default plugin

initPlugin(plugin)
