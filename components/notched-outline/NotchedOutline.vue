<template>
  <div class="mdc-notched-outline" @_init="onParentInit">
    <div class="mdc-notched-outline__leading" />
    <div class="mdc-notched-outline__notch">
      <slot />
    </div>
    <div class="mdc-notched-outline__trailing" />
  </div>
</template>
<script>
import { MDCNotchedOutline } from '@material/notched-outline'
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  inject: {
    getOutline: {
      default: null
    }
  },
  data () {
    return {
      mdcNotchedOutline: undefined
    }
  },
  mounted () {
    if (!(this.getOutline instanceof Function)) { // can not be init by parent
      this.mdcNotchedOutline = MDCNotchedOutline.attachTo(this.$el)
    }
  },
  beforeDestroy () {
    if (this.mdcNotchedOutline instanceof MDCNotchedOutline) {
      this.mdcNotchedOutline.destroy()
    }
  },
  methods: {
    onParentInit () {
      const outline = this.getOutline()
      if (outline instanceof MDCNotchedOutline) {
        if (this.mdcNotchedOutline instanceof MDCNotchedOutline) this.mdcNotchedOutline.destroy()
        this.mdcNotchedOutline = outline
      }
    }
  }
}
</script>
