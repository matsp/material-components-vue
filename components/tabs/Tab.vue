<template>
  <a
    class="mdc-tab"
    :class="classes"
    v-on="$listeners">
    <slot name="icon"/>
    <span
      v-if="icon && label"
      class="mdc-tab__icon-text">
      <slot/>
    </span>
    <span v-else-if="label">
      <slot/>
    </span>
  </a>
</template>

<script>
import { MDCTab } from '@material/tabs'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    active: {
      type: Boolean,
      default: false
    },
    label: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      mdcTab: null
    }
  },
  computed: {
    classes () {
      return {
        'mdc-tab--active': this.active,
        'mdc-tab--with-icon-and-text': this.icon && this.label
      }
    }
  },
  mounted () {
    if (this.$slots.icon) {
      this.$slots.icon[0].elm.classList.add('mdc-tab__icon')
      this.label ? this.$slots.icon[0].elm.setAttribute('aria-label', true)
        : this.$slots.icon[0].elm.setAttribute('aria-hidden', true)
    }

    this.mdcTab = MDCTab.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcTab.destroy()
  }
}
</script>
