<template>
  <label
    class="mdc-floating-label"
    :class="classes">
    <slot/>
  </label>
</template>

<script>
import { MDCFloatingLabel } from '@material/floating-label'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    floatAbove: {
      type: Boolean,
      default: false
    },
    shake: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcFloatingLabel: null
    }
  },
  computed: {
    classes () {
      return {
        'mdc-floating-label--float-above': this.floatAbove,
        'mdc-floating-label--shake': this.shake
      }
    }
  },
  mounted () {
    this.mdcFloatingLabel = MDCFloatingLabel.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcFloatingLabel.destroy()
  }
}
</script>
