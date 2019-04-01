import Snackbar from './Snackbar.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-snackbar', Snackbar)
  }
}
export default plugin

initPlugin(plugin)
