export default {
  install (vm) {
    vm.component('m-form-field', () => import('./FormField'))
  }
}
