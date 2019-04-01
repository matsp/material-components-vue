import Button from './Button.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-button', Button)
  }
}
export default plugin

initPlugin(plugin)
