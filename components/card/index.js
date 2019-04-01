import Card from './Card.vue'
import CardMedia from './CardMedia.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-card', Card)
    Vue.component('m-card-media', CardMedia)
  }
}
export default plugin

initPlugin(plugin)
