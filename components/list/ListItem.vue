<template>
  <a
    v-if="href"
    :aria-selected="activated"
    :class="classes"
    :href="href"
    class="mdc-list-item"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot
      v-if="$slots['graphic']"
      name="graphic"
    />
    <slot />
    <span
      v-if="$slots['text'] || $slots['primaryText'] || $slots['secondaryText']"
      class="mdc-list-item__text"
    >
      <slot name="text" />
      <span
        v-if="$slots['primaryText']"
        class="mdc-list-item__primary-text"
      >
        <slot name="primaryText" />
      </span>
      <span
        v-if="$slots['secondaryText']"
        class="mdc-list-item__secondary-text"
      >
        <slot name="secondaryText" />
      </span>
    </span>
    <slot
      v-if="$slots['meta']"
      name="meta"
    />
  </a>
  <li
    v-else
    :class="classes"
    class="mdc-list-item"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot name="graphic" />
    <slot />
    <span
      v-if="$slots['text'] || $slots['primaryText'] || $slots['secondaryText']"
      class="mdc-list-item__text"
    >
      <slot name="text" />
      <span
        v-if="$slots['primaryText']"
        class="mdc-list-item__primary-text"
      >
        <slot name="primaryText" />
      </span>
      <span
        v-if="$slots['secondaryText']"
        class="mdc-list-item__secondary-text"
      >
        <slot name="secondaryText" />
      </span>
    </span>
    <slot name="meta" />
  </li>
</template>

<script>
import { MDCRipple } from '@material/ripple'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    activated: {
      type: Boolean,
      default: false
    },
    selected: {
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
          if (this.$el.getAttribute('role') === 'menuitem') {
            n.elm.classList.add('mdc-menu__selection-group-icon')
          }
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
