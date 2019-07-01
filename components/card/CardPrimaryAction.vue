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
  name: 'CardPrimaryAction',
  data () {
    return {
      mdcRipple: undefined
    }
  },
  mounted () {
    this.mdcRipple = MDCRipple.attachTo(this.$el)
  },
  beforeDestroy () {
    if (this.mdcRipple) {
      this.mdcRipple.destroyed()
    }
  }
}
</script>
