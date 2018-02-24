import Chip from './Chip.vue'
import ChipSet from './ChipSet.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-chip', Chip)
    vm.component('m-chip-set', ChipSet)
  }
}
export default plugin

initPlugin(plugin)
