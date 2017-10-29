<template>
  <div class="mdc-form-field" :class="classes">
    <slot />
  </div>
</template>

<script>
import { MDCFormField } from '@material/form-field'

export default {
  props: {
    alignEnd: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      mdcFormField: null
    }
  },
  mounted () {
    this.mdcFormField = MDCFormField.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcFormField.destroy()
  },
  computed: {
    classes () {
      return {
        'mdc-form-field--align-end': this.alignEnd
      }
    }
  }
}

</script>

<style lang="scss">
@import "@material/form-field/mdc-form-field";
</style>
