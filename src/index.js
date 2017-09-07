import Button from 'components/Button'

const MaterialComponentsVue {
  install(Vue, options) {
    Vue.component(Button.name, Button)
  }
}

export default MaterialComponentsVue;