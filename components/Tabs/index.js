import Tab from './Tab'
import TabBar from './TabBar'

export { Tab, TabBar }

export default {
  install (vm) {
    vm.component('m-tab', Tab)
    vm.component('m-tab-bar', TabBar)
  }
}
