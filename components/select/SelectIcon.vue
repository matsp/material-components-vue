<template>
  <i
    class="mdc-select__icon"
    v-bind="attrs"
    v-on="$listeners"
  >
    <slot/>
  </i>
</template>

<script>
import { MDCSelectIcon } from '@material/select/icon'
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  name: 'SelectIcon',
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    clickable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      attrs: this.$attrs,
      mdcSelectIcon: undefined
    }
  },
  watch: {
    clickable () {
      if (this.clickable) {
        this.$set(this.attrs, 'tabindex', '0')
        this.$set(this.attrs, 'role', 'button')
      } else {
        this.$delete(this.attrs, 'tabindex')
        this.$delete(this.attrs, 'role')
      }
    }
  },
  mounted () {
    if (this.clickable) {
      this.$set(this.attrs, 'tabindex', '0')
      this.$set(this.attrs, 'role', 'button')
    }
    this.mdcSelectIcon = MDCSelectIcon.attachTo(this.$el)
  }
}
</script>

<style scoped>

</style>
