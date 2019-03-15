<template>
  <div class="mdc-text-field-helper-line">
    <div
      aria-hidden="true"
      class="mdc-text-field-helper-text"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { MDCTextFieldHelperText } from '@material/textfield/helper-text'

import { baseComponentMixin, themeClassMixin } from '../base'

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
      mdcTextFieldHelperText: undefined
    }
  },
  watch: {
    persistent () {
      this.mdcTextFieldHelperText.foundation.setPersistent(this.persistent)
    },
    validationMsg () {
      this.mdcTextFieldHelperText.foundation.setValidation(this.validationMsg)
    }
  },
  mounted () {
    this.mdcTextFieldHelperText = MDCTextFieldHelperText.attachTo(this.$el.children[0])
    this.mdcTextFieldHelperText.foundation.setPersistent(this.persistent)
    this.mdcTextFieldHelperText.foundation.setValidation(this.validationMsg)
  }
}
</script>
