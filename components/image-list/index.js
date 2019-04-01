import ImageList from './ImageList.vue'
import ImageListItem from './ImageListItem.vue'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-image-list', ImageList)
    Vue.component('m-image-list-item', ImageListItem)
  }
}
export default plugin

initPlugin(plugin)
