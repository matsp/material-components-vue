<template>
  <li
    class="mdc-list-item"
    :class="classes"
    v-on="$listeners">
    <slot
      name="graphic"
      v-if="$slots['graphic']"/>
    <slot/>
    <span
      class="mdc-list-item__text"
      v-if="$slots['text']">
      <slot name="text"/>
      <div
        class="mdc-list-mdc-list-item__secondary-text"
        v-if="$slots['secondaryText']">
        <slot name="secondaryText"/>
      </div>
    </span>
    <slot
      name="meta"
      v-if="$slots['meta']"/>
  </li>
</template>

<script>
import { MDCRipple } from '@material/ripple'

export default {
  props: {
    interactive: {
      type: Boolean,
      default: false
    },
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
      mdcRipple: null
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
  mounted () {
    if (this.interactive) { this.mdcRipple = MDCRipple.attachTo(this.$el) }

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
  beforeDestroy () {
    if (this.interactive) { this.mdcRipple.destroy() }
  }
}
</script>
