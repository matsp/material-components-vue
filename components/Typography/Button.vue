<template>
  <span class="mdc-typography--button" :class="classes">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    adjustMargin: {
      type: Boolean,
      default: true
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

<style lang="scss">
@import "@material/typography/mdc-typography";
</style>
