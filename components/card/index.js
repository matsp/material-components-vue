import Card from './Card.vue'
import CardMedia from './CardMedia.vue'
import CardPrimaryAction from './CardPrimaryAction'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-card', Card)
    vm.component('m-card-media', CardMedia)
    vm.component('m-card-primary-action', CardPrimaryAction)
  }
}
export default plugin

initPlugin(plugin)
