<template>
  <h1 :class="classes">
    <slot />
  </h1>
</template>

<script>
export default {
  props: {
    adjustMargin: {
      type: Boolean,
      default: true
    },
    level: {
      type: Number,
      required: true,
      validator: (level) => level > 0 && level <= 4
    }
  },
  computed: {
    classes () {
      let def = {
        'mdc-typography--adjust-margin': this.adjustMargin
      }

      let calc = {}
      calc['mdc-typography--display' + this.level] = true

      return Object.assign(def, calc)
    }
  }
}
</script>

<style lang="scss">
@import "@material/typography/mdc-typography";
</style>
