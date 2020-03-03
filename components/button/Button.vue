<template>
  <a
    v-if="href"
    :class="classes"
    :href="href"
    v-bind="$attrs"
    role="button"
    class="mdc-button"
    v-on="$listeners"
  >
    <slot name="icon" />
    <span class="mdc-button__label"><slot /></span>
    <slot name="trailingIcon" />
  </a>
  <button
    v-else
    :class="classes"
    v-bind="$attrs"
    class="mdc-button"
    v-on="$listeners"
  >
    <slot name="icon" />
    <span class="mdc-button__label"><slot /></span>
    <slot name="trailingIcon" />
  </button>
</template>

<script>
import { MDCRipple } from '@material/ripple'
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    raised: {
      type: Boolean,
      default: false
    },
    unelevated: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    ripple: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      mdcRipple: undefined,
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        'mdc-button--outlined': this.outlined,
        'mdc-button--dense': this.dense
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
    this.slotObserver.disconnect()
    if (this.mdcRipple) {
      this.mdcRipple.destroy()
    }
  },
  methods: {
    updateSlot () {
      if (this.$slots.icon) {
        this.$slots.icon.map(n => {
          n.elm.classList.add('mdc-button__icon')
          n.elm.setAttribute('aria-hidden', 'true')
        })
      }
      if (this.$slots.trailingIcon) {
        this.$slots.trailingIcon.map(n => {
          n.elm.classList.add('mdc-button__icon')
          n.elm.setAttribute('aria-hidden', 'true')
        })
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
