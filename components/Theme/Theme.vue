<template>
  <div
    :class="classes"
    :style="customStyles">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      required: false
    },
    customStyles: {
      type: Object,
      required: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-theme--dark': this.dark
      }
    }
  }
}
</script>
