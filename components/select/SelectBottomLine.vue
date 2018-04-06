<template>
  <div
    class="mdc-select__bottom-line"
    :class="classes"/>
</template>

<script>
import { MDCSelectBottomLine } from '@material/select/bottom-line'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcSelectBottomLine: null
    }
  },
  computed: {
    classes () {
      return {
        'mdc-select__bottom-line--active': this.active
      }
    }
  },
  mounted () {
    this.mdcSelectBottomLine = MDCSelectBottomLine.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcSelectBottomLine.destroy()
  }
}
</script>
