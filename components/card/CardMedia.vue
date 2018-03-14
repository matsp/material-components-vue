<template>
  <div
    class="mdc-card__media"
    :class="classes">
    <div class="mdc-card__media-content">
      <slot />
    </div>
  </div>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
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
