<template>
  <ul
    :class="classes"
    class="mdc-image-list"
  >
    <slot />
  </ul>
</template>

<script>
export default {
  props: {
    column: {
      type: Number,
      validator: (value) => value >= 0 && value <= 12,
      default: 0
    },
    masonry: {
      type: Boolean,
      default: false
    },
    textProtection: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      const standard = {}
      if (this.column > 0 && !this.masonry) {
        standard['image-list-standard-' + this.column] = true
      }

      const masonry = {}
      if (this.column > 0 && this.masonry) {
        masonry['image-list-masonry-' + this.column] = true
        masonry['mdc-image-list--masonry'] = true
      }

      const others = {}
      others['mdc-image-list--with-text-protection'] = this.textProtection

      return { ...standard, ...masonry, ...others }
    }
  }
}
</script>
