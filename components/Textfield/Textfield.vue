<template>
  <div class="mdc-text-field" :class="classes">
    <i v-if="leadingIcon" class="material-icons mdc-text-field__icon">{{ leadingIcon }}</i>
    <input class="mdc-text-field__input" :value="value" @input="onInput" v-bind="$attrs" >
    <label class="mdc-text-field__label" :class="classesLabel" v-if="$slots['default'] && !fullWidth">
      <slot />
    </label>
    <i v-if="trailingIcon" class="material-icons mdc-text-field__icon">{{ trailingIcon }}</i>
    <div v-if="bottomLine" class="mdc-text-field__bottom-line"/>
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
    },
    bottomLine: {
      type: Boolean,
      required: false
    },
    leadingIcon: {
      type: String,
      required: false
    },
    trailingIcon: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      mdcTextField: null,
      mdcRipple: null,
      float: false
    }
  },
  mounted () {
    this.mdcTextField = MDCTextField.attachTo(this.$el)
    this.float = this.labelFloat
  },
  beforeDestroy () {
    this.mdcTextField.destroy()

    if (this.interactive && this.box) { this.mdcRipple.destroy() }
  },
  computed: {
    classes () {
      return {
        'mdc-text-field--disabled': this.disabled,
        'mdc-text-field--upgraded': this.upgraded,
        'mdc-text-field--fullwidth': this.fullWidth,
        'mdc-text-field--box': this.box,
        'mdc-text-field--with-leading-icon': this.leadingIcon,
        'mdc-text-field--with-trailing-icon': this.trailingIcon
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

<style lang="scss" >
@import "@material/textfield/mdc-text-field";
</style>
