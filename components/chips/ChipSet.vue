<template>
  <div
    :class="classes"
    class="mdc-chip-set"
  >
    <slot />
  </div>
</template>

<script>
import { MDCChipSet } from '@material/chips'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    choice: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Boolean,
      default: false
    },
    input: {
      type: Boolean,
      default: false
    }
  },
  provide () {
    return {
      mdcChipSet: this
    }
  },
  data () {
    return {
      mdcChipSet: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-chip-set--choice': this.choice,
        'mdc-chip-set--filter': this.filter,
        'mdc-chip-set--input': this.input
      }
    }
  },
  mounted () {
    this.mdcChipSet = MDCChipSet.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcChipSet.destroy()
  }
}
</script>
