import Dialog from './Dialog.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-dialog', Dialog)
  }
}
export default plugin

initPlugin(plugin)
