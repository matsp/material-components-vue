import Card from './Card.vue'
import CardMedia from './CardMedia.vue'

export default {
  install (vm) {
    vm.component('m-card', Card)
    vm.component('m-card-media', CardMedia)
  }
}
