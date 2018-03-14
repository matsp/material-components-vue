<template>
  <p :class="classes">
    <slot />
  </p>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    adjustMargin: {
      type: Boolean,
      default: false
    },
    level: {
      type: Number,
      required: true,
      validator: (level) => level > 0 && level <= 2
    }
  },
  computed: {
    classes () {
      let def = {
        'mdc-typography--adjust-margin': this.adjustMargin
      }

      let calc = {}
      calc['mdc-typography--body' + this.level] = true

      return Object.assign(def, calc)
    }
  }
}
</script>
