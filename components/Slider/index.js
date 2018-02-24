import Slider from './Slider.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-slider', Slider)
  }
}
export default plugin

initPlugin(plugin)
