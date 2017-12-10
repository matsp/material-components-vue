import Card from './Card.vue'
import CardMediaItem from './CardMediaItem.vue'

export default {
  install (vm) {
    vm.component('m-card', Card)
    vm.component('m-card-media-item', CardMediaItem)
  }
}
