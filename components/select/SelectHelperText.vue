<template>
  <p
    aria-hidden="true"
    class="mdc-select-helper-text"
    v-bind="$attrs"
    @_init="onParentInit"
  >
    <slot />
  </p>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'
import { MDCSelectHelperText } from '@material/select/helper-text'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    persistent: {
      type: Boolean,
      default: false
    },
    validationMsg: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcSelectHelperText: undefined
    }
  },
  watch: {
    persistent (val) {
      this.mdcSelectHelperText.foundation.setPersistent(val)
    },
    validationMsg (val) {
      this.mdcSelectHelperText.foundation.setValidation(val)
    }
  },
  mounted () {
    if (!(this.getHelperText instanceof Function)) { // can not be init by parent
      this.mdcSelectHelperText = MDCSelectHelperText.attachTo(this.$el)
      this.mdcSelectHelperText.foundation.setPersistent(this.persistent)
      this.mdcSelectHelperText.foundation.setValidation(this.validationMsg)
    }
  },
  beforeDestroy () {
    if (this.mdcSelectHelperText instanceof MDCSelectHelperText) {
      this.mdcSelectHelperText.destroy()
    }
  },
  methods: {
    onParentInit (helperText) {
      if (helperText instanceof MDCSelectHelperText) {
        if (this.mdcSelectHelperText instanceof MDCSelectHelperText) this.mdcSelectHelperText.destroy()
        this.mdcSelectHelperText = helperText
        this.mdcSelectHelperText.foundation.setPersistent(this.persistent)
        this.mdcSelectHelperText.foundation.setValidation(this.validationMsg)
      }
    }
  }
}
</script>

<style scoped>

</style>
