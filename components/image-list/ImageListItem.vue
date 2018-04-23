<template>
  <li class="mdc-image-list__item">
    <div
      v-if="adjustAspectRatio"
      class="mdc-image-list__image-aspect-container">
      <slot name="image"/>
    </div>
    <slot
      v-else
      name="image"/>
    <div
      v-if="$slots['default']"
      class="mdc-image-list__supporting">
      <span class="mdc-image-list__label">
        <slot/>
      </span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    adjustAspectRatio: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slotOberserver: null
    }
  },
  mounted () {
    this.updateSlot ()
    this.slotOberserver = new MutationObserver( () => this.updateSlot())
    this.slotOberserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
  },
  methods: {
    updateSlot () {
      if (this.$slots.image) {
        this.$slots.image.map(n => {
          n.elm.classList.add('mdc-image-list__image')
        })
      }
    }
  },
  beforeDestroy () {
    this.slotOberserver.disconnect()
  }
}
</script>
