import Chip from './Chip.vue'
import ChipSet from './ChipSet.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-chip', Chip)
    Vue.component('m-chip-set', ChipSet)
  }
}
export default plugin

initPlugin(plugin)
