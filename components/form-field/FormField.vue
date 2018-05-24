<template>
  <div
    :class="classes"
    class="mdc-form-field">
    <slot/>
  </div>
</template>

<script>
import { MDCFormField } from '@material/form-field'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    alignEnd: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcFormField: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-form-field--align-end': this.alignEnd
      }
    }
  },
  mounted () {
    this.mdcFormField = MDCFormField.attachTo(this.$el)
    // TODO: Better solution to avoid direct children access?!
    if (this.$children.length === 1) {
      if (this.$children[0]._data.mdcRadio) {
        this.mdcFormField.input = this.$children[0]._data.mdcRadio
      } else if (this.$children[0]._data.mdcCheckbox) {
        this.mdcFormField.input = this.$children[0]._data.mdcCheckbox
      }
    }
  },
  beforeDestroy () {
    this.mdcFormField.destroy()
  }
}
</script>
