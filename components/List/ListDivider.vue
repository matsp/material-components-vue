<template>
    <li role="separator" class="mdc-list-divider" :class="classes" />
</template>

<script>
export default {
  props: {
    inset: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-list-divider--inset': this.inset
      }
    }
  }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>
