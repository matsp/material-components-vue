<template>
  <div
    class="mdc-chip-set"
    :class="classes">
    <slot/>
  </div>
</template>

<script>
import { MDCChipSet } from '@material/chips'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    choice: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcChipSet: null
    }
  },
  computed: {
    classes () {
      return {
        'mdc-chip-set--choice': this.choice,
        'mdc-chip-set--filter': this.filter
      }
    }
  },
  mounted () {
    this.mdcChipSet = MDCChipSet.attachTo(this.$el)
  },
  methods: {
    getSelectedChips () {
      return this.mdcChipSet.foundation_.selectedChips_
    }
  }
}
</script>
