<template>
  <div class="mdc-text-field mdc-text-field--textarea" :class="classes">
    <textarea class="mdc-text-field__input" :value="value" @input="onInput" v-bind="$attrs"/>
    <label class="mdc-text-field__label" :class="classesLabel" v-if="$slots['default']">
      <slot />
    </label>
  </div>
</template>

<script>
import { MDCTextField } from '@material/textfield'
import { debounce } from '../utils'

export default {
  props: {
    value: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    upgraded: {
      type: Boolean,
      required: false
    },
    fullWidth: {
      type: Boolean,
      required: false
    },
    box: {
      type: Boolean,
      required: false
    },
    labelFloat: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      mdcTextField: null,
      float: false
    }
  },
  mounted () {
    this.mdcTextField = MDCTextField.attachTo(this.$el)
    this.float = this.labelFloat
  },
  beforeDestroy () {
    this.mdcTextField.destroy()
  },
  computed: {
    classes () {
      return {
        'mdc-text-field--disabled': this.disabled,
        'mdc-text-field--upgraded': this.upgraded,
        'mdc-text-field--fullwidth': this.fullWidth,
        'mdc-text-field--box': this.box
      }
    },
    classesLabel () {
      return {
        'mdc-text-field__label--float-above': this.float
      }
    }
  },
  methods: {
    onInput (event) {
      debounce(this.$emit('input', event.target.value))
    }
  },
  watch: {
    value () {
      this.value === '' ? this.float = false : this.float = true
    }
  }
}
</script>

<style lang="scss">
@import "@material/textfield/mdc-text-field";
</style>
