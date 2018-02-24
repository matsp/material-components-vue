import Radio from './Radio.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-radio', Radio)
  }
}
export default plugin

initPlugin(plugin)
