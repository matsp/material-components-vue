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
      validator: (level) => level > 0 && level <= 4
    }
  },
  computed: {
    classes () {
      let calc = {}
      calc['mdc-typography--display' + this.level] = true
      return calc
    }
  }
}
</script>
