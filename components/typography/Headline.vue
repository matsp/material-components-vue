<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    level: {
      type: Number,
      required: true,
      validator: (level) => level >= 1 && level <= 6
    }
  },
  computed: {
    classes () {
      const calc = {}
      calc['mdc-typography--headline' + this.level] = true
      return calc
    }
  }
}
</script>
