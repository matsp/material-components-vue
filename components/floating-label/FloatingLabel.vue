<template>
  <span
    v-if="$parent.$options._componentTag === 'm-select'"
    :class="classes"
    class="mdc-floating-label"
    v-bind="$attrs"
  >
    <slot />
  </span>
  <label
    v-else
    :class="classes"
    class="mdc-floating-label"
    v-bind="$attrs"
  >
    <slot />
  </label>
</template>

<script>
import { MDCFloatingLabel } from '@material/floating-label'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
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
      mdcFloatingLabel: undefined,
      classes: {
        'mdc-floating-label--float-above': this.floatAbove,
        'mdc-floating-label--shake': this.shake
      }
    }
  },
  watch: {
    floatAbove () {
      this.$set(this.classes, 'mdc-floating-label--float-above', this.floatAbove)
    },
    shake () {
      this.$set(this.classes, 'mdc-floating-label--shake', this.shake)
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
