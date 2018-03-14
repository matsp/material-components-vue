<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    level: {
      type: Number,
      required: true,
      validator: (value) => value >= 1 && value <= 24
    },
    transition: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    classes () {
      let calc = {}
      calc['mdc-elevation--z' + this.level] = true
      return Object.assign({ 'mdc-elevation-transition': this.transition }, calc)
    }
  }
}
</script>
