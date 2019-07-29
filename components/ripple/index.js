import Ripple from './Ripple.vue'
import { MDCRipple } from '@material/ripple'
import './styles.scss'

import { initPlugin } from '../'

function setupClasses (el, binding) {
  const mod = binding.modifiers
  mod.customized ? el.classList.remove('mdc-ripple-surface') : el.classList.add('mdc-ripple-surface')
  mod.primary ? el.classList.add('mdc-ripple-surface--primary') : el.classList.remove('mdc-ripple-surface--primary')
  mod.accent ? el.classList.add('mdc-ripple-surface--accent') : el.classList.remove('mdc-ripple-surface--accent')
}

const plugin = {
  install (vm) {
    vm.component('m-ripple', Ripple)
    vm.directive('ripple', {
      bind: function (el, binding) {
        setupClasses(el, binding)
        if (!binding.modifiers['css-only']) {
          const mdcRipple = MDCRipple.attachTo(el)
          Object.defineProperty(el, 'mdcRipple', {
            configurable: true,
            enumerable: false,
            value: mdcRipple,
            writable: false
          })
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
