<template>
  <button
    v-if="href.length === 0"
    :class="classes"
    class="mdc-fab"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
  <a
    v-else
    :href="href"
    :class="classes"
    class="mdc-fab"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </a>
</template>

<script>
import { MDCRipple } from '@material/ripple'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    mini: {
      type: Boolean,
      default: false
    },
    absoluteRight: {
      type: Boolean,
      default: false
    },
    exited: {
      type: Boolean,
      default: false
    },
    ripple: {
      type: Boolean,
      default: true
    },
    href: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mdcRipple: undefined,
      extended: false,
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-fab--mini': this.mini,
        'mdc-fab--absolute-right': this.absoluteRight,
        'mdc-fab--exited': this.exited,
        'mdc-fab--extended': this.extended
      }
    }
  },
  watch: {
    classes () {
      this.reInstantiateRipple()
    },
    ripple () {
      this.reInstantiateRipple()
    }
  },
  mounted () {
    this.updateSlot()
    this.slotObserver = new MutationObserver(() => this.updateSlot())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    if (this.ripple) this.mdcRipple = MDCRipple.attachTo(this.$el)
  },
  beforeDestroy () {
    if (this.mdcRipple) {
      this.mdcRipple.destroy()
    }
    this.slotObserver.disconnect()
  },
  methods: {
    updateSlot () {
      if (this.$slots.default) {
        const defaults = this.$slots.default
        let i = 0
        for (; i < defaults.length; i++) {
          if (defaults[i].elm instanceof Element && defaults[i].elm.classList.contains('mdc-fab__label')) {
            this.extended = true
            break
          }
        }
        if (i === defaults.length) this.extended = false // no label found
      }
    },
    reInstantiateRipple () {
      if (this.ripple) {
        if (this.mdcRipple) {
          this.mdcRipple.destroy()
        }
        MDCRipple.attachTo(this.$el)
      } else {
        if (this.mdcRipple) {
          this.mdcRipple.destroy()
        }
        this.mdcRipple = undefined
      }
    }
  }
}
</script>
