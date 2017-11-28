<template>
    <p class="mdc-text-field-helper-text" :class="classes">
      <slot />
    </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    persistent: {
      type: Boolean,
      required: false
    },
    validationMsg: {
      type: Boolean,
      required: false
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

<style lang="scss">
@import "@material/textfield/mdc-text-field";
</style>
