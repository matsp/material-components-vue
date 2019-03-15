<template>
  <a
    :class="classes"
    class="material-icons"
    v-on="$listeners"
  >
    {{ icon }}
  </a>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    icon: {
      type: String,
      required: true
    },
    menuIcon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-toolbar__menu-icon': this.menuIcon,
        'mdc-toolbar__icon': !this.menuIcon
      }
    }
  }
}
</script>
