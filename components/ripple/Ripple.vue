<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { MDCRipple } from '@material/ripple'

import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
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
      slotObserver: undefined
    }
  },
  mounted () {
    this.updateSlot()
    this.slotObserver = new MutationObserver(() => this.updateSlot())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    if (this.mdcRipple) { this.mdcRipple.destroy() }
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
