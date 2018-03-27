import ImageList from './ImageList.vue'
import ImageListItem from './ImageListItem.vue'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-image-list', ImageList)
    vm.component('m-image-list-item', ImageListItem)
  }
}
export default plugin

initPlugin(plugin)
