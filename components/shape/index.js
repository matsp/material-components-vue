import Shape from './Shape.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-shape', Shape)
  }
}
export default plugin

initPlugin(plugin)
