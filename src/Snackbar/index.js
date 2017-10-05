import Snackbar from './Snackbar'

export { Snackbar }

export default {
  install (vm) {
    vm.component('m-snackbar', Snackbar)
  }
}
