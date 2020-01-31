<template>
  <div class="mdc-line-ripple" @_init="onParentInit"/>
</template>

<script>
import { MDCLineRipple } from '@material/line-ripple'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  inject: {
    getLineRipple: {
      default: null
    }
  },
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
    activate (val) {
      val ? this.mdcLineRipple.activate() : this.mdcLineRipple.deactivate()
    },
    rippleCenter () {
      this.setRippleCenter(this.rippleCenter)
    }
  },
  mounted () {
    if (!(this.getLineRipple instanceof Function)) { // can not be init by parent
      this.mdcLineRipple = MDCLineRipple.attachTo(this.$el)
      if (this.rippleCenter) this.setRippleCenter(this.rippleCenter)
    }
  },
  beforeDestroy () {
    if (this.mdcLineRipple instanceof MDCLineRipple) {
      this.mdcLineRipple.destroy()
    }
  },
  methods: {
    setRippleCenter (xCoordinate) {
      this.mdcLineRipple.setRippleCenter(xCoordinate)
    },
    onParentInit () {
      const lineRipple = this.getLineRipple()
      if (lineRipple instanceof MDCLineRipple) {
        if (this.mdcLineRipple instanceof MDCLineRipple) this.mdcLineRipple.destroy()
        this.mdcLineRipple = lineRipple
        if (this.rippleCenter) this.setRippleCenter(this.rippleCenter)
      }
    }
  }
}
</script>
