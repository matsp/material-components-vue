import Card from './Card.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-card', Card)
  }
}
export default plugin

initPlugin(plugin)
