import Elevation from './Elevation.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-elevation', Elevation)
  }
}
export default plugin

initPlugin(plugin)
