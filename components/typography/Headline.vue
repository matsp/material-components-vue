<template>
  <h1
    class="mdc-typography--headline"
    :class="classes">
    <slot />
  </h1>
</template>

<script>
export default {
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
