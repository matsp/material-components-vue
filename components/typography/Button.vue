<template>
  <span
    class="mdc-typography--button"
    :class="classes">
    <slot />
  </span>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    adjustMargin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-typography--adjust-margin': this.adjustMargin
      }
    }
  }
}
</script>
