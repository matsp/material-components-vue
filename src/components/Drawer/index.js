import TemporaryDrawer from './TemporaryDrawer'

export { TemporaryDrawer }

export default {
  install (vm) {
    vm.component('m-temporary-drawer', TemporaryDrawer)
  }
}
