<template>
  <button
    v-if="href.length === 0"
    :class="classes"
    class="mdc-fab"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot name="icon" />
    <span
      v-show="extended"
      class="mdc-fab__label"
    >
      <slot />
    </span>
    <slot name="trailingIcon" />
  </button>
  <a
    v-else
    :href="href"
    :class="classes"
    class="mdc-fab"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot name="icon" />
    <span
      v-show="extended"
      class="mdc-fab__label"
    >
      <slot />
    </span>
    <slot name="trailingIcon" />
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
      slotObserver: undefined,
      extended: false
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
      subtree: true,
      characterData: true
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
      if (this.$slots.icon) {
        this.$slots.icon.map(n => {
          if (n.elm instanceof Element) n.elm.classList.add('mdc-fab__icon')
        })
      }
      if (this.$slots.trailingIcon) {
        this.$slots.trailingIcon.map(n => {
          if (n.elm instanceof Element) n.elm.classList.add('mdc-fab__icon')
        })
      }
      this.extended = false
      if (this.$slots.default) {
        this.$slots.default.map(n => {
          if (n.elm instanceof Element || n.text.trim().length > 0) this.extended = true
        })
      }
    },
    reInstantiateRipple () {
      if (this.mdcRipple instanceof MDCRipple) {
        this.mdcRipple.destroy()
      }
      if (this.ripple) {
        MDCRipple.attachTo(this.$el)
      } else {
        this.mdcRipple = undefined
      }
    }
  }
}
</script>
