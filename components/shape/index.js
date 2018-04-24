import Shape from './Shape.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-shape', Shape)
  }
}
export default plugin

initPlugin(plugin)
