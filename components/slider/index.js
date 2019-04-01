import Slider from './Slider.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-slider', Slider)
  }
}
export default plugin

initPlugin(plugin)
