<template>
  <div
    class="mdc-chip"
    :class="classes"
    tabindex="0"
    @MDCChip:interaction="$emit('change', !selected)"
    @MDCChip:removal="$emit('remove') && $emit('change', false)">
    <slot
      name="leadingIcon"
      v-if="$slots['leadingIcon']"/>
    <div
      v-if="mdcChipSet && mdcChipSet.filter"
      class="mdc-chip__checkmark">
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
    prop: 'selected',
    event: 'change'
  },
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  inject: ['mdcChipSet'],
  data () {
    return {
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-chip--selected': this.selected
      }
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
  },
  methods: {
    updateSlots () {
      if (this.$slots.leadingIcon) {
        this.$slots.leadingIcon.map((n) => {
          n.elm.classList.add('mdc-chip__icon')
          if (this.selected) {
            n.elm.classList.add('mdc-chip__icon--leading-hidden')
          } else {
            n.elm.classList.remove('mdc-chip__icon--leading-hidden')
            n.elm.classList.add('mdc-chip__icon--leading')
          }
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
