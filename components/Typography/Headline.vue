<template>
  <h1 class="mdc-typography--headline" :class="classes">
    <slot />
  </h1>
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
