<template>
  <div class="mdc-line-ripple"/>
</template>

<script>
import { MDCLineRipple } from '@material/line-ripple'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  data () {
    return {
      mdcLineRipple: undefined
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
