import Slider from './Slider'

export { Slider }

export default {
  install (vm) {
    vm.component('m-slider', Slider)
  }
}
