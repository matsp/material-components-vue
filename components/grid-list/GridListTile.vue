<template>
  <li
    class="mdc-grid-tile"
    v-on="$listeners">
    <div class="mdc-grid-tile__primary">
      <slot name="primary">
        <img
          v-if="imgSrc"
          class="mdc-grid-tile__primary-content"
          :src="imgSrc">
      </slot>
    </div>
    <span
      v-if="$slots['default']"
      class="mdc-grid-tile__secondary">
      <span class="mdc-grid-tile__title">
        <slot />
      </span>
      <slot name="icon"/>
      <slot name="supporttext"/>
    </span>
  </li>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    imgSrc: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      slotObserver: undefined
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
  methods: {
    updateSlots () {
      if (this.$slots.supporttext) {
        this.$slots.supporttext.map(n =>
          n.elm.classList.add('mdc-grid-tile__support-text')
        )
      }

      if (this.$slots.icon) {
        this.$slots.icon.map(n => {
          n.elm.classList.add('mdc-grid-tile__icon')
        })
      }

      if (this.$slots.primary) {
        this.$slots.primary.map(n =>
          n.elm.classList.add('mdc-grid-tile__primary-content')
        )
      }
    }
  }
}
</script>
