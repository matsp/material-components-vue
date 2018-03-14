<template>
  <button
    class="mdc-fab"
    :class="classes"
    v-on="$listeners">
    <slot />
  </button>
</template>

<script>
import { MDCRipple } from '@material/ripple'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
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
    },
    interactive: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcRipple: null
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
  mounted () {
    if (this.$slots.default) {
      this.$slots.default.map(n => {
        n.elm.classList.add('mdc-fab__icon')
      })
    }

    if (this.interactive) { this.mdcRipple = MDCRipple.attachTo(this.$el) }
  },
  beforeDestroy () {
    if (this.interactive) { this.mdcRipple.destroy() }
  }
}
</script>
