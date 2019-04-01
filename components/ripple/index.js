import Ripple from './Ripple.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-ripple', Ripple)
  }
}
export default plugin

initPlugin(plugin)
