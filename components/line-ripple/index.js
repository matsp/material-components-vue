import LineRipple from './LineRipple.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-line-ripple', LineRipple)
  }
}
export default plugin

initPlugin(plugin)
