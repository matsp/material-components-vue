import Switch from './Switch.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-switch', Switch)
  }
}
export default plugin

initPlugin(plugin)
