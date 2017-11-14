export default {
  install (vm) {
    vm.component('m-toolbar', () => import('./Toolbar'))
    vm.component('m-toolbar-fixed-adjust', () => import('./ToolbarFixedAdjust'))
    vm.component('m-toolbar-icon', () => import('./ToolbarIcon'))
    vm.component('m-toolbar-row', () => import('./ToolbarRow'))
  }
}
