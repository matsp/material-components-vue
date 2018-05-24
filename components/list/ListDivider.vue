<template>
  <li
    role="separator"
    class="mdc-list-divider"
    :class="classes"
  />
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    inset: {
      type: Boolean,
      required: false,
      default: false
    },
    padded: {
      type: Boolean,
      required: false,
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
