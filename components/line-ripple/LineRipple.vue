<template>
  <div class="mdc-line-ripple" />
</template>

<script>
import { MDCLineRipple } from '@material/line-ripple'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    activate: {
      type: Boolean,
      default: true
    },
    rippleCenter: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      mdcLineRipple: undefined
    }
  },
  watch: {
    activate () {
      if (this.activate) this.mdcLineRipple.activate()
      else this.mdcLineRipple.deactivate()
    },
    rippleCenter () {
      this.setRippleCenter(this.rippleCenter)
    }
  },
  mounted () {
    this.mdcLineRipple = MDCLineRipple.attachTo(this.$el)
    if (this.rippleCenter) this.setRippleCenter(this.rippleCenter)
  },
  beforeDestroy () {
    if (typeof this.mdcLineRipple !== 'undefined') {
      this.mdcLineRipple.destroy()
    }
  },
  methods: {
    setRippleCenter (xCoordinate) {
      this.mdcLineRipple.setRippleCenter(xCoordinate)
    }
  }
}
</script>
