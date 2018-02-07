import Chip from './Chip.vue'
import ChipSet from './ChipSet.vue'

export default {
  install (vm) {
    vm.component('m-chip', Chip)
    vm.component('m-chip-set', ChipSet)
  }
}
