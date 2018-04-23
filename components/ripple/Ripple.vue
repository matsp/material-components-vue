<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { MDCRipple } from '@material/ripple'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    unbounded: {
      type: Boolean,
      default: false
    },
    accent: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcRipple: undefined,
      slotOberserver: null
    }
  },
  mounted () {
    this.updateSlot()
    this.slotOberserver = new MutationObserver( () => this.updateSlot())
    this.slotOberserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
  },
  beforeDestroy () {
    this.slotOberserver.disconnect()
    if (this.mdcRipple !== null) { this.mdcRipple.destroy() }
  },
  methods: {
    updateSlot () {
      if (this.$slots.default) {
        this.$slots.default.map((n, i) => {
          if (i === 0) {
            n.elm.classList.add('mdc-ripple-surface')
            this.accent ? n.elm.classList.add('mdc-ripple-surface--accent') : n.elm.classList.add('mdc-ripple-surface--primary')
            this.mdcRipple = MDCRipple.attachTo(n.elm)
            this.mdcRipple.unbounded = this.unbounded
          }
        })
      }
    }
  }
}
</script>
