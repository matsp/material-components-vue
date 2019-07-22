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
      bind: function (el, binding, vnode) {
        const mdcRipple = setup(el, binding)
        if (vnode.componentInstance && !binding.modifiers['css-only']) vnode.componentInstance.mdcRipple = mdcRipple
      },
      componentUpdated: function (el, binding, vnode) {
        vnode.componentInstance && typeof binding.oldValue === 'boolean' && typeof binding.value === 'boolean' && binding.oldValue !== binding.value && binding.value
          ? vnode.componentInstance.mdcRipple.activate()
          : vnode.componentInstance.mdcRipple.deactivate()
      },
      unbind: function (el, binding, vnode) {
        if (vnode.componentInstance && vnode.componentInstance.mdcRipple) vnode.componentInstance.mdcRipple.destroy()
      }
    })
  }
}
export default plugin

initPlugin(plugin)
