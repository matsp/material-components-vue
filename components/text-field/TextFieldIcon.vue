<template>
  <i
    class="mdc-text-field__icon"
    :class="classes"
    v-bind="attrs"
    v-on="$listeners"
    @_init="onParentInit"
  >
    <slot>{{ icon }}</slot>
  </i>
</template>

<script>
import { MDCTextFieldIcon } from '@material/textfield/icon'

export default {
  inject: {
    getLeadingIcon: {
      default: null
    },
    getTrailingIcon: {
      default: null
    }
  },
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
  data () {
    return {
      attrs: Object.assign({}, this.$attrs),
      mdcTextFieldIcon: undefined
    }
  },
  computed: {
    classes () {
      return {
        'material-icons': this.icon.length > 0
      }
    }
  },
  watch: {
    clickable (val) {
      if (val) {
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
    if (!(this.getLeadingIcon instanceof Function || this.getTrailingIcon instanceof Function)) { // can not be init by parent
      this.mdcTextFieldIcon = MDCTextFieldIcon.attachTo(this.$el)
    }
  },
  beforeDestroy () {
    if (this.mdcTextFieldIcon instanceof MDCTextFieldIcon) {
      this.mdcTextFieldIcon.destroy()
    }
  },
  methods: {
    onParentInit () {
      const leadingIcon = this.getLeadingIcon()
      const trailingIcon = this.getTrailingIcon()
      const mdcTextFieldIcon = leadingIcon instanceof MDCTextFieldIcon && leadingIcon.root_ === this.$el ? leadingIcon : trailingIcon
      if (this.mdcTextFieldIcon instanceof MDCTextFieldIcon) this.mdcTextFieldIcon.destroy()
      this.mdcTextFieldIcon = mdcTextFieldIcon
    }
  }
}
</script>
