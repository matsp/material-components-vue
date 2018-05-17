<template>
  <li
    :class="classes"
    class="mdc-list-item"
    v-on="$listeners">
    <slot
      v-if="$slots['graphic']"
      name="graphic"/>
    <slot/>
    <span
      v-if="$slots['text']"
      class="mdc-list-item__text">
      <slot name="text"/>
      <div
        v-if="$slots['secondaryText']"
        class="mdc-list-mdc-list-item__secondary-text">
        <slot name="secondaryText"/>
      </div>
    </span>
    <slot
      v-if="$slots['meta']"
      name="meta"/>
  </li>
</template>

<script>
import { MDCRipple } from '@material/ripple'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    activated: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
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
        'mdc-list-item--activated': this.activated,
        'mdc-list-item--selected': this.selected
      }
    }
  },
  watch: {
    classes () {
      this.mdcRipple.destroy()
      this.mdcRipple = MDCRipple.attachTo(this.$el)
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    this.mdcRipple = MDCRipple.attachTo(this.$el)
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    if (typeof this.mdcRipple !== 'undefined') {
      this.mdcRipple.destroy()
    }
  },
  methods: {
    updateSlots () {
      if (this.$slots.graphic) {
        this.$slots.graphic.map(n => {
          n.elm.classList.add('mdc-list-item__graphic')
        })
      }
      if (this.$slots.meta) {
        this.$slots.meta.map(n => {
          n.elm.classList.add('mdc-list-item__meta')
        })
      }
    }
  }
}
</script>
