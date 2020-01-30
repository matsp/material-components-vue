<template>
  <i
    class="mdc-select__icon"
    :class="classes"
    v-bind="attrs"
    v-on="$listeners"
    @_init="onParentInit"
  >
    <template v-if="icon && icon.length > 0">{{ icon }}</template>
    <slot v-else />
  </i>
</template>

<script>
import { MDCSelectIcon } from '@material/select/icon'
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  inject: {
    getLeadingIcon: {
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
      mdcSelectIcon: undefined
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
    if (!(this.getLeadingIcon instanceof Function)) { // can not be init by parent
      this.mdcSelectIcon = MDCSelectIcon.attachTo(this.$el)
    }
  },
  beforeDestroy () {
    if (this.mdcSelectIcon instanceof MDCSelectIcon) this.mdcSelectIcon.destroy()
  },
  methods: {
    onParentInit () {
      const leadingIcon = this.getLeadingIcon()
      if (leadingIcon instanceof MDCSelectIcon) {
        if (this.mdcSelectIcon instanceof MDCSelectIcon) this.mdcSelectIcon.destroy()
        this.mdcSelectIcon = leadingIcon
      }
    }
  }
}
</script>

<style scoped>

</style>
