<template>
  <div class="mdc-layout-grid" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    fixedColumnWidth: {
      type: Boolean,
      required: false
    },
    align: {
      type: String,
      validator: value => ['left', 'right'].includes(value),
      required: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-layout-grid--fixed-column-width': this.fixedColumnWidth,
        'mdc-layout-grid--align-left': (this.align === 'left'),
        'mdc-layout-grid--align-right': (this.align === 'right')
      }
    }
  }
}
</script>
