<template>
  <div class="mdc-chip" tabindex="0">
    <slot
      name="leadingIcon"
      v-if="$slots['leadingIcon']"/>
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

export default {
  data () {
    return {
      mdcChip: null
    }
  },
  mounted () {
    if (this.$slots.leadingIcon) {
      this.$slots.leadingIcon.map((n) => {
        n.elm.classList.add('mdc-chip__icon')
        n.elm.classList.add('mdc-chip__icon--leading')
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
    
    // this done by MDCChipSet:
    // this.mdcChip = MDCChip.attachTo(this.$el)
  }
}
</script>
