<template>
  <div
    class="mdc-card__primary-action"
    tabindex="0"
  >
    <slot />
  </div>
</template>

<script>

import { MDCRipple } from '@material/ripple'

export default {
  props: {
    ripple: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      mdcRipple: undefined
    }
  },
  watch: {
    ripple () {
      if (!this.ripple && this.mdcRipple) {
        this.mdcRipple.destroyed()
      }
      if (this.ripple) this.mdcRipple = MDCRipple.attachTo(this.$el)
    }
  },
  mounted () {
    if (this.ripple) this.mdcRipple = MDCRipple.attachTo(this.$el)
  },
  beforeDestroy () {
    if (this.mdcRipple) {
      this.mdcRipple.destroyed()
    }
  }
}
</script>
