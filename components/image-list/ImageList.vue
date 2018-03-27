<template>
  <ul 
    class="mdc-image-list"
    :class="classes">
    <slot/>
  </ul>
</template>

<script>
export default {
  props:  {
    standardColumn: {
      type: Number,
      validator: (value) => value >= 1 && value <= 12,
      default: 0
    },
    masonryColumn: {
      type: Number,
      validator: (value) => value >= 1 && value <= 12,
      default: 0
    },
    textProtection: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      let standard = {}
      if (this.standardColumn > 0 && this.masonryColumn === 0) {
        standard['image-list-standard-' + this.standardColumn] = true
      }

      let masonry = {}
      if (this.masonryColumn > 0 && this.standardColumn === 0) {
        masonry['image-list-masonry-' + this.masonryColumn] = true
        masonry['mdc-image-list--masonry'] = true
      }

      let others = {}
      others['mdc-image-list--with-text-protection'] = this.textProtection

      return Object.assign({}, standard, masonry, others)
    }
  }
}
</script>

