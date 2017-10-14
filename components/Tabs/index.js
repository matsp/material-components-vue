import Tab from './Tab'
import TabBar from './TabBar'
import TabBarScroller from './TabBarScroller'
import TabIcon from './TabIcon'
import TabLabel from './TabLabel'

export { Tab, TabBar, TabBarScroller, TabIcon, TabLabel }

export default {
  install (vm) {
    vm.component('m-tab', Tab)
    vm.component('m-tab-bar', TabBar)
    vm.component('m-tab-bar-scroller', TabBarScroller)
    vm.component('m-tab-icon', TabIcon)
    vm.component('m-tab-label', TabLabel)
  }
}
