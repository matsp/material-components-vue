<template>
  <div
    class="mdc-select__label"
    :class="classes">
    <slot/>
  </div>
</template>

<script>
import { MDCSelectLabel } from '@material/select/label'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    floatAbove: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcSelectLabel: null
    }
  },
  computed: {
    classes () {
      return {
        'mdc-select__label--float-above': this.floatAbove
      }
    }
  },
  mounted () {
    this.mdcSelectLabel = MDCSelectLabel.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcSelectLabel.destroy()
  }
}
</script>
