import NotchedOutline from './NotchedOutline.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-notched-outline', NotchedOutline)
  }
}
export default plugin

initPlugin(plugin)
