<template>
  <div v-bind:class="classes">
    <slot />
  </div>
</template>

<script>

import { MDCFormField } from '@material/form-field'

export default {
  props: {
    modifier: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      class: ['mdc-form-field'],
      formfield: null
    }
  },
  mounted() {
    this.formField = new MDCFormField(this.$el)
  },
  computed: {
    classes() {
      let tmpClass = this.class
      tmpClass.push((this.modifier ? 'mdc-form-field--' + this.modifier : ''))
      return tmpClass
    }
  }
}

</script>

<style lang="scss">
@import "@material/form-field/mdc-form-field";
</style>


