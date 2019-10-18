<template>
  <i
    class="mdc-text-field__icon"
    :class="classes"
    v-bind="attrs"
    v-on="$listeners"
    tabindex="0"
    role="button"
  >
    <slot>{{icon}}</slot>
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
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return {
        'material-icons': this.icon.length > 0
      }
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
    this.mdcTextFieldIcon.destroy()
  }
}
</script>
