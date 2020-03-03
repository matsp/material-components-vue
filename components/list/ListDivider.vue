<template>
  <li
    :class="classes"
    role="separator"
    class="mdc-list-divider"
  />
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    inset: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-list-divider--inset': this.inset,
        'mdc-list-divider--padded': this.padded
      }
    }
  }
}
</script>
