<template>
  <div
    class="mdc-chip"
    tabindex="0"
    @MDCChip:interaction="onInteraction()">
    <slot
      name="leadingIcon"
      v-if="$slots['leadingIcon']"/>
    <div class="mdc-chip__checkmark" >
      <svg
        class="mdc-chip__checkmark-svg"
        viewBox="-2 -3 30 30">
        <path
          class="mdc-chip__checkmark-path"
          fill="none"
          stroke="black"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
    </div>
    <div class="mdc-chip__text">
      <slot/>
    </div>
    <slot
      name="trailingIcon"
      v-if="$slots['trailingIcon']"/>
  </div>
</template>

<script>
import { MDCChip } from '@material/chips'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  model: {
    props: 'selected',
    event: 'change'
  },
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcChip: undefined,
      slotObserver: undefined
    }
  },
  computed: {
    model: {
      get () {
        return this.selected
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver( () => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
  },
  methods:  {
    onInteraction () {
      this.model = this.mdcChip.isSelected()
    },
    updateSlots () {
      if (this.$slots.leadingIcon) {
        this.$slots.leadingIcon.map((n) => {
          n.elm.classList.add('mdc-chip__icon')
          n.elm.classList.add('mdc-chip__icon--leading')
        })
      }

      if (this.$slots.trailingIcon) {
        this.$slots.trailingIcon.map((n) => {
          n.elm.classList.add('mdc-chip__icon')
          n.elm.classList.add('mdc-chip__icon--trailing')
          n.elm.setAttribute('role', 'button')
          n.elm.setAttribute('tabindex', '0')
        })
      }
    }
  }
}
</script>
