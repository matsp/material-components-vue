import Tab from './Tab.vue'
import TabBar from './TabBar.vue'

export default {
  install (vm) {
    vm.component('m-tab', Tab)
    vm.component('m-tab-bar', TabBar)
  }
}
