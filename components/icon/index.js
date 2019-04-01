import Icon from './Icon.vue'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-icon', Icon)
  }
}
export default plugin

initPlugin(plugin)
