<template>
  <p
    :class="classes"
    class="mdc-text-field-helper-text">
    <slot />
  </p>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
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
