<template>
  <div
    role="progressbar"
    class="mdc-linear-progress"
    :aria-label="areaLabel"
    aria-valuemin="0"
    aria-valuemax="1"
    aria-valuenow="0"
  >
    <div class="mdc-linear-progress__buffering-dots" />
    <div class="mdc-linear-progress__buffer" />
    <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
      <span class="mdc-linear-progress__bar-inner" />
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
      <span class="mdc-linear-progress__bar-inner" />
    </div>
  </div>
</template>

<script>
import { MDCLinearProgress } from '@material/linear-progress'

import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    open: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    areaLabel: {
      type: String,
      default: ''
    },
    reverse: {
      type: Boolean,
      default: false
    },
    progress: {
      type: Number,
      validator: (value) => (value >= 0) && (value <= 1),
      default: 1
    },
    buffer: {
      type: Number,
      validator: (value) => (value >= 0) && (value <= 1),
      default: 1
    }
  },
  data () {
    return {
      mdcLinearProgress: undefined
    }
  },
  watch: {
    progress () {
      this.mdcLinearProgress.progress = this.progress
    },
    buffer () {
      this.mdcLinearProgress.buffer = this.buffer
    },
    indeterminate () {
      this.mdcLinearProgress.determinate = !this.indeterminate
    },
    reverse () {
      this.mdcLinearProgress.reverse = this.reverse
    },
    open () {
      this.open ? this.mdcLinearProgress.open() : this.mdcLinearProgress.close()
    }
  },
  mounted () {
    this.mdcLinearProgress = MDCLinearProgress.attachTo(this.$el)
    this.mdcLinearProgress.determinate = !this.indeterminate
    this.mdcLinearProgress.reverse = this.reverse
    this.mdcLinearProgress.progress = this.progress
    this.mdcLinearProgress.buffer = this.buffer
    this.open ? this.mdcLinearProgress.open() : this.mdcLinearProgress.close()
  },
  beforeDestroy () {
    this.mdcLinearProgress.destroy()
  }
}
</script>
