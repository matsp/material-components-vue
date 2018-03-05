<template>
  <div class="mdc-line-ripple"/>
</template>

<script>
import { MDCLineRipple } from '@material/line-ripple'

export default {
  data () {
    return {
      mdcLineRipple: null
    }
  },
  mounted () {
    this.mdcLineRipple = MDCLineRipple.attachTo(this.$el)
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
