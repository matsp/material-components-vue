import Elevation from './Elevation.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-elevation', Elevation)
    vm.directive('elevation', {
      bind: function (el, binding) {
        if (binding.value != null) {
          const n = Number(binding.value)
          el.classList.add(`mdc-elevation--z${n}`)
        }
        if (binding.modifiers.transition) {
          el.classList.add('mdc-elevation-transition')
        }
      },
      componentUpdated: function (el, binding) {
        if (Number(binding.oldValue) !== Number(binding.value)) {
          if (binding.oldValue != null) {
            const n = Number(binding.oldValue)
            el.classList.remove(`mdc-elevation--z${n}`)
          }
          if (binding.value != null) {
            const n = Number(binding.value)
            el.classList.add(`mdc-elevation--z${n}`)
          }
        }
        if (!binding.modifiers.transition && el.classList.contains('mdc-elevation-transition')) {
          el.classList.remove('mdc-elevation-transition')
        }
        if (binding.modifiers.transition && !el.classList.contains('mdc-elevation-transition')) {
          el.classList.add('mdc-elevation-transition')
        }
      },
      unbind: function (el, binding) {
        if (binding.value != null) {
          const n = Number(binding.value)
          el.classList.remove(`mdc-elevation--z${n}`)
        }
        if (binding.modifiers.transition) {
          el.classList.remove('mdc-elevation-transition')
        }
      }
    })
  }
}
export default plugin

initPlugin(plugin)
