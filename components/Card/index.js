import Card from './Card'
import CardMediaItem from './CardMediaItem'

export { Card, CardMediaItem }

export default {
  install (vm) {
    vm.component('m-card', Card)
    vm.component('m-card-media-item', CardMediaItem)
  }
}
