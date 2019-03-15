<template>
  <div class="mdc-checkbox">
    <input
      v-model="model"
      v-bind="$attrs"
      type="checkbox"
      class="mdc-checkbox__native-control"
    >
    <div class="mdc-checkbox__background">
      <svg
        class="mdc-checkbox__checkmark"
        viewBox="0 0 24 24"
      >
        <path
          class="mdc-checkbox__checkmark-path"
          fill="none"
          stroke="white"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        />
      </svg>
      <div class="mdc-checkbox__mixedmark" />
    </div>
  </div>
</template>

<script>
import { MDCCheckbox } from '@material/checkbox'
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
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
      mdcCheckbox: undefined
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
    checked (value) {
      if (value) {
        this.mdcCheckbox.indeterminate = false
      }
    },
    indeterminate (value) {
      this.mdcCheckbox.indeterminate = value
      if (this.model && value) {
        this.model = false
      }
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
