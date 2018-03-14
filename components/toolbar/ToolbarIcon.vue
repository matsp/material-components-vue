<template>
  <a
    class="material-icons"
    :class="classes"
    v-on="$listeners">
    {{ icon }}
  </a>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
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
