<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    level: {
      type: Number,
      required: true,
      validator: (level) => level > 0 && level <= 2
    }
  },
  computed: {
    classes () {
      return {
        [`mdc-typography--body${this.level}`]: true
      }
    }
  }
}
</script>
