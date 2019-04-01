import Theme from './Theme.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-theme', Theme)
  }
}
export default plugin

initPlugin(plugin)
