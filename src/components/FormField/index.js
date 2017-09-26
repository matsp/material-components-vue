import FormField from './FormField'

export { FormField }

export default {
  install (vm) {
    vm.component('m-form-field', FormField)
  }
}
