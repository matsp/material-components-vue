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

import { baseComponentMixin, themeClassMixin } from '@components/base'

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
    },
    disabled: {
      type: Boolean,
      default: false
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
        'mdc-list-item--activated': this.activated,
        'mdc-list-item--selected': this.selected,
        'mdc-list-item--disabled': this.disabled
      }
    }
  },
  watch: {
    classes () {
      this.reInstantiateRipple()
      if (this.selected) this.$el.setAttribute('aria-selected', 'true')
    },
    ripple () {
      this.reInstantiateRipple()
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    if (this.ripple) this.mdcRipple = MDCRipple.attachTo(this.$el)
    if (this.selected) this.$el.setAttribute('aria-selected', 'true')
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
