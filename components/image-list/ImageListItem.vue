<template>
  <li class="mdc-image-list__item">
    <div
      v-if="adjustAspectRatio"
      class="mdc-image-list__image-aspect-container"
    >
      <slot name="image" />
    </div>
    <slot
      v-else
      name="image"
    />
    <div
      v-if="$slots.default"
      class="mdc-image-list__supporting"
    >
      <span class="mdc-image-list__label">
        <slot />
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
  data () {
    return {
      slotObserver: undefined
    }
  },
  mounted () {
    this.updateSlot()
    this.slotObserver = new MutationObserver(() => this.updateSlot())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
  },
  methods: {
    updateSlot () {
      if (this.$slots.image) {
        this.$slots.image.forEach(n => {
          if (n.elm instanceof Element) n.elm.classList.add('mdc-image-list__image')
        })
      }
    }
  }
}
</script>
