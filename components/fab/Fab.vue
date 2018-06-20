<template>
  <button
    :class="classes"
    class="mdc-fab"
    v-on="$listeners">
    <slot />
  </button>
</template>

<script>
import { MDCRipple } from '@material/ripple'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    mini: {
      type: Boolean,
      default: false
    },
    absoluteRight: {
      type: Boolean,
      default: false
    },
    exited: {
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
  computed: {
    classes () {
      return {
        'mdc-fab--mini': this.mini,
        'mdc-fab--absolute-right': this.absoluteRight,
        'mdc-fab--exited': this.exited
      }
    }
  },
  watch: {
    classes () {
      this.mdcRipple.destroy()
      this.mdcRipple = MDCRipple.attachTo(this.$el)
    }
  },
  mounted () {
    this.updateSlot()
    this.slotObserver = new MutationObserver(() => this.updateSlot())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    this.mdcRipple = MDCRipple.attachTo(this.$el)
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    if (typeof this.mdcRipple !== 'undefined') {
      this.mdcRipple.destroy()
    }
  },
  methods: {
    updateSlot () {
      if (this.$slots.default) {
        this.$slots.default.map(n => {
          if (n.elm.tagName !== 'SVG') {
            n.elm.classList.add('mdc-fab__icon')
          }
        })
      }
    }
  }
}
</script>
