<template>
  <h2
    class="mdc-typography--title"
    :class="classes">
    <slot />
  </h2>
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
