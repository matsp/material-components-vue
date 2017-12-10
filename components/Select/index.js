import Select from './Select.vue'
import SelectMulti from './SelectMulti.vue'
import SelectMultiDivider from './SelectMultiDivider.vue'
import SelectMultiGroup from './SelectMultiGroup.vue'
import SelectMultiOption from './SelectMultiOption.vue'
import SelectOption from './SelectOption.vue'

export default {
  install (vm) {
    vm.component('m-select', Select)
    vm.component('m-select-multi', SelectMulti)
    vm.component('m-select-multi-divider', SelectMultiDivider)
    vm.component('m-select-multi-group', SelectMultiGroup)
    vm.component('m-select-multi-option', SelectMultiOption)
    vm.component('m-select-option', SelectOption)
  }
}
