<template>
  <i
    class="mdc-text-field__icon"
    v-bind="attrs"
    v-on="$listeners"
    tabindex="0"
    role="button"
  >
    <slot />
  </i>
</template>

<script>
import { MDCTextFieldIcon } from '@material/textfield/icon'

export default {
  name: 'TextFieldIcon',
  props: {
    clickable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      attrs: Object.assign({}, this.$attrs),
      mdcTextFieldIcon: undefined
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
    this.mdcTextFieldIcon = MDCTextFieldIcon.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcTextFieldIcon.destroyed()
  }
}
</script>
