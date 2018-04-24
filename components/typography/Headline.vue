<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    level: {
      type: Number,
      required: true,
      validator: (level) => level >= 1 && level <= 6 
    }
  },
  computed: {
    classes () {
      let calc = {}
      calc['mdc-typography--headline' + this.level] = true
      return calc
    }
  }
}
</script>
