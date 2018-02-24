<template>
  <p
    class="mdc-text-field-helper-text"
    :class="classes">
    <slot />
  </p>
</template>

<script>
export default {
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
