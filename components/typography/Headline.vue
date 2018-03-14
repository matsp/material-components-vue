<template>
  <h1
    class="mdc-typography--headline"
    :class="classes">
    <slot />
  </h1>
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
