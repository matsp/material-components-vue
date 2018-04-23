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
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
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
      mdcRipple: null,
      slotOberserver: null
    }
  },
  computed: {
    classes () {
      return {
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        'mdc-button--stroked': this.stroked,
        'mdc-button--dense': this.dense
      }
    }
  },
  mounted () {
    this.updateSlot()
    this.slotOberserver = new MutationObserver( () => this.updateSlot())
    this.slotOberserver.observe(this.$el, {
      childList: true,
      subtree: true
    })

    if (this.interactive) { this.mdcRipple = MDCRipple.attachTo(this.$el) }
  },
  beforeDestroy () {
    this.slotOberserver.disconnect()
    if (this.interactive) { this.mdcRipple.destroy() }
  },
  methods: {
    updateSlot() {
      if (this.$slots.icon) {
        this.$slots.icon.map(n => {
          n.elm.classList.add('mdc-button__icon')
        })
      }
    }
  }
}
</script>
