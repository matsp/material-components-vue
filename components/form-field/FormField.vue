<template>
  <div
    :class="classes"
    class="mdc-form-field"
  >
    <slot />
  </div>
</template>

<script>
import { MDCFormField, MDCFormFieldInput } from '@material/form-field'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  provide () {
    return {
      formFieldInputAssigning: this.formFieldInputAssigning,
    }
  },
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
  },
  beforeDestroy () {
    this.mdcFormField.destroy()
  },
  methods: {
    formFieldInputAssigning (childInstance) {
      if (this.mdcFormField instanceof MDCFormField && (childInstance === undefined || childInstance instanceof MDCFormFieldInput)) {
        this.mdcFormField.input = childInstance
      }
    }
  }
}
</script>
