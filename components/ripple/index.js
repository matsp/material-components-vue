import Ripple from './Ripple.vue'
import { MDCRipple } from '@material/ripple'
import './styles.scss'

import { initPlugin } from '../'

function setup (el, binding) {
  const mod = binding.modifiers
  mod.customized ? el.classList.remove('mdc-ripple-surface') : el.classList.add('mdc-ripple-surface')
  mod.primary ? el.classList.add('mdc-ripple-surface--primary') : el.classList.remove('mdc-ripple-surface--primary')
  if (mod.accent) {
    el.classList.add('mdc-ripple-surface--accent')
  }
  return MDCRipple.attachTo(el)
}

const plugin = {
  install (vm) {
    vm.component('m-ripple', Ripple)
    vm.directive('ripple', {
      bind: function (el, binding) {
        const mdcRipple = setup(el, binding)
        if (!binding.modifiers['css-only']) {
          Object.defineProperty(el, 'mdcRipple', {
            configurable: true,
            enumerable: false,
            value: mdcRipple,
            writable: false
          })
        }
      },
      componentUpdated: function (el, binding) {
        if (typeof binding.oldValue === 'boolean' && typeof binding.value === 'boolean' && binding.oldValue !== binding.value && binding.value) {
          if (el.mdcRipple) el.mdcRipple.activate()
        } else {
          if (el.mdcRipple) el.mdcRipple.deactivate()
        }
      },
      unbind: function (el) {
        if (el.mdcRipple) {
          el.mdcRipple.destroy()
        }
      }
    })
  }
}
export default plugin

initPlugin(plugin)
