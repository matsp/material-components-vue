<template>
  <p
    class="mdc-text-field-helper-text"
    :class="classes">
    <slot />
  </p>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    persistent: {
      type: Boolean,
      default: false
    },
    validationMsg: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-textfield-helper-text--persistent': this.persistent,
        'mdc-textfield-helper-text--validation-msg': this.validationMsg
      }
    }
  }
}
</script>
