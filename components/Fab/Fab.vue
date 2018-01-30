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
export default {
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

<style lang="scss" >
@import "@material/fab/mdc-fab";

.mdc-fab--absolute-right.mdc-fab--absolute-right {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
}

@media(min-width: 1024px) {
    .mdc-fab--absolute-right.mdc-fab--absolute-right {
        bottom: 1.5rem;
        right: 1.5rem;
    }
}
</style>
