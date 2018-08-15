<template>
  <div class="mdc-line-ripple"/>
</template>

<script>
import { MDCLineRipple } from '@material/line-ripple'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  data () {
    return {
      mdcLineRipple: undefined
    }
  },
  mounted () {
    this.mdcLineRipple = MDCLineRipple.attachTo(this.$el)
  },
  beforeDestroy () {
    if (typeof this.mdcLineRipple !== 'undefined') {
      this.mdcLineRipple.destroy()
    }
  },
  methods: {
    activate () {
      this.mdcLineRipple.activate()
    },
    deactivate () {
      this.mdcLineRipple.deactivate()
    },
    setRippleCenter (xCoordinate) {
      this.mdcLineRipple.setRippleCenter(xCoordinate)
    }
  }
}
</script>
