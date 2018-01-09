<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { MDCRipple } from '@material/ripple'

export default {
  props: {
    unbounded: {
      type: Boolean,
      required: false
    },
    accent: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      mdcRipple: null
    }
  },
  mounted () {
    if (this.$slots.default) {
      this.$slots.default.map((n, i) => {
        if (i === 0) {
          n.elm.classList.add('mdc-ripple-surface')
          this.accent ? n.elm.classList.add('mdc-ripple-surface--accent') : n.elm.classList.add('mdc-ripple-surface--primary')
          this.mdcRipple = MDCRipple.attachTo(n.elm)
          this.unbounded ? this.mdcRipple.unbounded = true : this.mdcRipple.unbounded = false
        }
      })
    }
  },
  beforeDestroy () {
    if (this.mdcRipple !== null) { this.mdcRipple.destroy() }
  },
  methods: {
    activate () {
      this.mdcRipple.activate()
    },
    deactivate () {
      this.mdcRipple.deactivate()
    }
  }
}
</script>

<style lang="scss">
@import "@material/ripple/mdc-ripple";
@import "@material/elevation/mixins";
</style>
