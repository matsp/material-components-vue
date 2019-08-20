<template>
  <ul class="mdc-menu__selection-group">
    <slot />
  </ul>
</template>

<script>
export default {
  data () {
    return {
      slotObserver: undefined
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.updateSlot()
      this.slotObserver = new MutationObserver(() => this.updateSlot())
      this.slotObserver.observe(this.$el, {
        childList: true,
        subtree: true
      })
    })
  },
  methods: {
    updateSlot () {
      if (this.$slots.default) {
        this.$slots.default.forEach(n => {
          if (n.elm instanceof Element && n.elm.classList.contains('mdc-list-item')) {
            n.elm.querySelector('.mdc-list-item__graphic').classList.add('mdc-menu__selection-group-icon')
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
