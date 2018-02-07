<template>
  <div class="mdc-chip-set" />
</template>

<script>
import { MDCChipSet } from '@material/chips'

export default {
  data () {
    return {
      mdcChipSet: null
    }
  },
  mounted () {
    this.mdcChipSet = MDCChipSet.attachTo(this.$el)
  }
}
</script>

<style lang="scss">
@import "@material/chips/mdc-chips";
</style>
