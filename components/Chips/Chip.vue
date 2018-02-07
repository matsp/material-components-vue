<template>
  <div class="mdc-chip">
    <div class="mdc-chip__text">
      <slot />
    </div>
  </div>
</template>

<script>
import { MDCChip } from '@material/chips'

export default {
  data () {
    return {
      mdcChip: null
    }
  },
  mounted () {
    this.mdcChip = MDCChip.attachTo(this.$el)
  }
}
</script>

<style lang="scss">
@import "@material/chips/mdc-chips";
</style>
