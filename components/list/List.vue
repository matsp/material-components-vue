<template>
  <ul
    class="mdc-list"
    :class="classes">
    <slot />
  </ul>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    avatar: {
      type: Boolean,
      required: false,
      default: false
    },
    dense: {
      type: Boolean,
      required: false,
      default: false
    },
    twoLine: {
      type: Boolean,
      required: false,
      default: false
    },
    nonInteractive: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-list--dense': this.dense,
        'mdc-list--two-line': this.twoLine,
        'mdc-list--avatar-list': this.avatar,
        'mdc-list--non-interactive': this.nonInteractive
      }
    }
  }
}
</script>
