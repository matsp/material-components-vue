import Select from './Select'
import SelectMulti from './SelectMulti'
import SelectMultiDivider from './SelectMultiDivider'
import SelectMultiGroup from './SelectMultiGroup'
import SelectMultiOption from './SelectMultiOption'
import SelectOption from './SelectOption'

export { Select, SelectMulti, SelectMultiDivider, SelectMultiGroup, SelectMultiOption, SelectOption }

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
