<template>
  <div
    :class="classes"
    class="mdc-card__media"
  >
    <div
      v-if="$slots['default']"
      class="mdc-card__media-content"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    square: {
      type: Boolean,
      default: true
    },
    sixteenNine: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-card__media--square': this.square,
        'mdc-card__media--16-9': this.sixteenNine
      }
    }
  }
}
</script>
