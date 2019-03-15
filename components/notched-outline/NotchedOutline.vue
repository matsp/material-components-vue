<template>
  <div class="mdc-notched-outline">
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
  data () {
    return {
      mdcNotchedOutline: undefined
    }
  },
  mounted () {
    this.mdcNotchedOutline = MDCNotchedOutline.attachTo(this.$el)
  },
  beforeDestroy () {
    if (typeof this.mdcNotchedOutline !== 'undefined') {
      this.mdcNotchedOutline.destroy()
    }
  }
}
</script>
