import Ripple from './Ripple'

export { Ripple }

export default {
  install (vm) {
    vm.component('m-ripple', Ripple)
  }
}
