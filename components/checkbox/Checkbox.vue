<template>
  <div class="mdc-checkbox">
    <input
      type="checkbox"
      class="mdc-checkbox__native-control"
      v-bind="$attrs"
      v-model="model">
    <div class="mdc-checkbox__background">
      <svg
        class="mdc-checkbox__checkmark"
        viewBox="0 0 24 24">
        <path
          class="mdc-checkbox__checkmark-path"
          fill="none"
          stroke="white"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"/>
    </div>
  </div>
</template>

<script>
import { MDCCheckbox } from '@material/checkbox'
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcCheckbox: null
    }
  },
  computed: {
    model: {
      get () {
        return this.checked
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  },
  watch: {
    checked () {
      this.mdcCheckbox.indeterminate = false
    }
  },
  mounted () {
    this.mdcCheckbox = MDCCheckbox.attachTo(this.$el)
    this.mdcCheckbox.indeterminate = this.indeterminate
  },
  beforeDestroy () {
    this.mdcCheckbox.destroy()
  }
}
</script>
