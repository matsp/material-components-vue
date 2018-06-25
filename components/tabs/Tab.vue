<template>
  <a
    :class="classes"
    class="mdc-tab"
    v-on="$listeners">
    <slot name="icon"/>
    <span
      v-if="hasIcon && label"
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

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
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
      mdcTab: undefined,
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-tab--active': this.active,
        'mdc-tab--with-icon-and-text': this.hasIcon && this.label
      }
    },
    hasIcon () {
      return this.$slots.icon
    }
  },
  mounted () {
    this.updateSlot()
    this.slotObserver = new MutationObserver(() => this.updateSlot())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })

    this.mdcTab = MDCTab.attachTo(this.$el)
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    this.mdcTab.destroy()
  },
  methods: {
    updateSlot () {
      if (this.$slots.icon) {
        this.$slots.icon.map(n => {
          n.elm.classList.add('mdc-tab__icon')
          this.label ? n.elm.setAttribute('aria-label', true) : n.elm.setAttribute('aria-hidden', true)
        })
      }
    }
  }
}
</script>
