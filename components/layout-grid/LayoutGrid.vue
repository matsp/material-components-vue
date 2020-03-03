<template>
  <div
    :class="classes"
    class="mdc-layout-grid"
  >
    <slot />
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    fixedColumnWidth: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      validator: value => ['left', 'right', ''].indexOf(value) > -1,
      default: ''
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
