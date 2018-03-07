<template>
  <a
    v-if="href"
    role="button"
    class="mdc-button"
    :class="classes"
    :href="href"
    v-bind="$attrs"
    v-on="$listeners">
    <slot name="icon"/>
    <slot />
  </a>
  <button
    v-else
    class="mdc-button"
    :class="classes"
    v-bind="$attrs"
    v-on="$listeners">
    <slot name="icon"/>
    <slot />
  </button>
</template>

<script>
import { MDCRipple } from '@material/ripple'

export default {
  props: {
    raised: {
      type: Boolean,
      default: false
    },
    unelevated: {
      type: Boolean,
      default: false
    },
    stroked: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    interactive: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mdcRipple: null
    }
  },
  computed: {
    classes () {
      return {
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        'mdc-button--stroked': this.stroked,
        'mdc-button--dense': this.dense,
        'mdc-button--compact': this.compact
      }
    }
  },
  mounted () {
    if (this.$slots.icon) {
      this.$slots.icon.map(n => {
        n.elm.classList.add('mdc-button__icon')
      })
    }

    if (this.interactive) { this.mdcRipple = MDCRipple.attachTo(this.$el) }
  },
  beforeDestroy () {
    if (this.interactive) { this.mdcRipple.destroy() }
  }
}
</script>
