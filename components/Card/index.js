import Card from './Card.vue'
import CardMedia from './CardMedia.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-card', Card)
    vm.component('m-card-media', CardMedia)
  }
}
export default plugin

initPlugin(plugin)
