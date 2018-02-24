<template>
  <span class="mdc-typography--caption" :class="classes">
    <slot />
  </span>
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
